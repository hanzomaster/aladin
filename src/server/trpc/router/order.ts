import { z } from "zod";
import { adminProcedure, protectedProcedure, router } from "../trpc";

export const orderRouter = router({
  getAll: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.order.findMany({
      include: {
        orderdetail: true,
      },
    });
  }),
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
    //TODO - Finish this
    .query(({ ctx, input }) => {
      return ctx.prisma.order.findUnique({
        where: {},
        include: {
          orderdetail: true,
        },
      });
    }),
});
