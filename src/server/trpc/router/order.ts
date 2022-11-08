import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const orderRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.order.findMany();
  }),

  getOneWhere: publicProcedure
    .input(
      z.object({
        orderNumber: z.string().length(25),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.order.findUnique({
        where: input,
      });
    }),
});
