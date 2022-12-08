import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const orderRouter = router({
  getAllOfUser: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.order.findMany({
      where: {
        customerNumber: ctx.session.user.id,
      },
      include: {
        orderdetail: true,
      },
    });
  }),
  getOneWhere: protectedProcedure
    .input(
      z.object({
        orderNumber: z.string().length(25),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.order.findUnique({
        where: {},
        include: {
          orderdetail: true,
        },
      });
    }),
});
