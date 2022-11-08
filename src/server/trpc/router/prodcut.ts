import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const productRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
  getOneWhere: publicProcedure
    .input(
      z.object({
        code: z.string().length(25),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findUnique({
        where: input,
      });
    }),
  getWhere: publicProcedure
    .input(
      z.object({
        code: z.string().length(25).optional(),
        name: z.string().optional(),
        description: z.string().optional(),
        price: z.number().optional(),
        stock: z.number().optional(),
        image: z.string().optional(),
        category: z.string().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findMany({
        where: input,
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        code: z.string().length(25),
        dto: z.object({
          name: z.string().optional(),
          description: z.string().optional(),
          price: z.number().optional(),
          stock: z.number().optional(),
          image: z.string().optional(),
          category: z.string().optional(),
        }),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.product.update({
        where: {
          code: input.code,
        },
        data: input.dto,
      });
    }),
  delete: publicProcedure.input(z.string().length(25)).query(({ ctx, input }) => {
    return ctx.prisma.product.delete({
      where: {
        code: input,
      },
    });
  }),
});
