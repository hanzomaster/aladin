import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const userRouter = router({
  me: protectedProcedure.query(async ({ ctx }) => {
    const userResponse = await ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        isAdmin: true,
      },
    });
    return userResponse?.isAdmin;
  }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  getOneWhere: protectedProcedure
    .input(
      z
        .object({
          id: z.string().length(25),
          name: z.string(),
          email: z.string().email(),
        })
        .partial()
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: input,
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string().length(25),
        dto: z
          .object({
            name: z.string(),
            email: z.string().email(),
          })
          .partial(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: input.dto,
      });
    }),
  delete: protectedProcedure.input(z.string().length(25)).query(({ ctx, input }) => {
    return ctx.prisma.user.delete({
      where: {
        id: input,
      },
    });
  }),
});
