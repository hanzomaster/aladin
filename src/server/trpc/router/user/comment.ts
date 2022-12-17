import { z } from "zod";
import { protectedProcedure, router } from "../../trpc";

export const commentRouter = router({
  getAll: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.comment.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    })
  ),
  create: protectedProcedure
    .input(
      z.object({
        dto: z.object({
          content: z.string(),
          productId: z.string().cuid(),
          rating: z.number().int().min(1).max(5),
        }),
      })
    )
    .mutation(async ({ ctx, input }) =>
      ctx.prisma.comment.create({
        data: {
          ...input.dto,
          userId: ctx.session.user.id,
        },
      })
    ),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        dto: z.object({
          content: z.string(),
        }),
      })
    )
    .mutation(async ({ ctx, input }) =>
      ctx.prisma.comment.update({
        where: {
          id: input.id,
        },
        data: input.dto,
      })
    ),
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      ctx.prisma.comment.delete({
        where: {
          id: input.id,
        },
      })
    ),
});
