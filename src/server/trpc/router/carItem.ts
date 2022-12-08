import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const cartItemRouter = router({
  updateOrCreate: protectedProcedure
    .input(
      z.object({
        productDetailId: z.string(),
        numberOfItems: z.number().min(1),
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
      const cartItem = await ctx.prisma.cartItem.findUnique({
        where: {
          productDetailId_cartId: {
            cartId: cart.id,
            productDetailId: input.productDetailId,
          },
        },
      });
      if (cartItem) {
        await ctx.prisma.cartItem.update({
          where: {
            productDetailId_cartId: {
              cartId: cart.id,
              productDetailId: input.productDetailId,
            },
          },
          data: {
            numberOfItems: input.numberOfItems,
          },
        });
      } else {
        await ctx.prisma.cartItem.create({
          data: {
            productDetailId: input.productDetailId,
            cartId: cart.id,
            numberOfItems: input.numberOfItems,
          },
        });
      }
    }),
});
