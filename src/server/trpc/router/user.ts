import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const userRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  getOneWhere: publicProcedure
    .input(
      z.object({
        id: z.string().length(25).optional(),
        name: z.string().optional(),
        email: z.string().email().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: input,
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        whereId: z.string().length(25),
        name: z.string().optional(),
        email: z.string().email().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: {
          id: input.whereId,
        },
        data: input,
      });
    }),
  delete: publicProcedure.input(z.string().length(25)).query(({ ctx, input }) => {
    return ctx.prisma.user.delete({
      where: {
        id: input,
      },
    });
  }),
});
