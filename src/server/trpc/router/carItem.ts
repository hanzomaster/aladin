import { ClothSize } from "@prisma/client";
import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const cartItemRouter = router({
  updateOrCreate: protectedProcedure
    .input(
      z.object({
        productDetailId: z.string(),
        size: z.nativeEnum(ClothSize),
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
          size: input.size,
        },
        update: {
          numberOfItems: {
            set: input.numberOfItems,
          },
        },
        include: {
          productDetail: {
            include: {
              product: {
                select: {
                  code: true,
                  buyPrice: true,
                  name: true,
                  description: true,
                },
              },
            },
          },
        },
      });
    }),
  delete: protectedProcedure
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
      return ctx.prisma.cartItem.delete({
        where: {
          productDetailId_cartId: {
            cartId: cart.id,
            productDetailId: input.productDetailId,
          },
        },
      });
    }),
});
