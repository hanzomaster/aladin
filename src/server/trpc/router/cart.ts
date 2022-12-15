import { adminProcedure, protectedProcedure, router } from "../trpc";
import { cartParams } from "./dto/cart.dto";

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
  getAll: adminProcedure.query(({ ctx }) =>
    ctx.prisma.cart.findMany({
      skip: 0,
      take: 10,
      include: {
        cartItem: true,
      },
    })
  ),
});
