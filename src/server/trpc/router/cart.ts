import { protectedProcedure, router } from "../trpc";
import { cartParams } from "./dto";

export const cartRouter = router({
  get: protectedProcedure
    .input(cartParams)

    .query(({ ctx, input }) =>
      ctx.prisma.cart.findUnique({
        where: {
          userId: input.id,
        },
        include: {
          cartItem: true,
        },
      })
    ),
  clear: protectedProcedure.input(cartParams).mutation(({ ctx, input }) =>
    ctx.prisma.cartItem.deleteMany({
      where: {
        cartId: input.id,
      },
    })
  ),
});
