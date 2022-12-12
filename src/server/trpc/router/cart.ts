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
        cartItem: {
          select: {
            numberOfItems: true,
            size: true,
            productDetail: {
              select: {
                id: true,
                colorCode: true,
                image: true,
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
        },
      },
    })
  ),
  /**
   * Clear the cart of the current logged in user
   */
  clear: protectedProcedure.mutation(({ ctx }) =>
    ctx.prisma.cartItem.deleteMany({
      where: {
        cartId: input.id,
      },
    })
  ),
  getAll: adminProcedure.query(({ ctx }) =>
    ctx.prisma.cart.findMany({
      include: {
        cartItem: true,
      },
    })
  ),
});
