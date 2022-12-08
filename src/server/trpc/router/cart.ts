import { adminProcedure, protectedProcedure, router } from "../trpc";

export const cartRouter = router({
  /**
   * Get the cart of the current logged in user
   */
  get: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.cart.findUnique({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        cartItem: true,
      },
    })
  ),
  /**
   * Clear the cart of the current logged in user
   */
  clear: protectedProcedure.mutation(({ ctx }) =>
    ctx.prisma.cartItem.deleteMany({
      where: {
        cartId: ctx.session.user.id,
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
