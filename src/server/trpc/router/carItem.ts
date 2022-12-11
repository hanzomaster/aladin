import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const cartItemRouter = router({
  updateOrCreate: protectedProcedure
    .input(
      z.object({
        productDetailId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const cart = await ctx.prisma.cart.findUnique({
        where: {
          userId: ctx.session.user.id,
        },
      });
      if (!cart) {
        throw new Error("Cart not found");
      }
      return ctx.prisma.cartItem.upsert({
        where: {
          productDetailId_cartId: {
            cartId: cart.id,
            productDetailId: input.productDetailId,
          },
        },
        create: {
          productDetailId: input.productDetailId,
          cartId: cart.id,
        },
        update: {
          numberOfItems: {
            increment: 1,
          },
        },
        include: {
          productDetail: {
            select: {
              colorCode: true,
            },
          },
        },
      });
    }),
});
