import { z } from "zod";
import { protectedProcedure, router } from "../trpc";
import {
  createProductLineSchema,
  getAllSchema,
  getManyProductLineSchema,
  getOneProductLineSchema,
} from "./dto";

export const productLineRouter = router({
  getAll: protectedProcedure.input(getAllSchema).query(({ ctx, input }) =>
    ctx.prisma.productLine.findMany({
      skip: input?.skip,
      take: input?.take,
    })
  ),
  getOneWhere: protectedProcedure.input(getOneProductLineSchema).query(({ ctx, input }) =>
    ctx.prisma.productLine.findUnique({
      where: input,
      include: {
        products: true,
      },
    })
  ),
  getManyWhere: protectedProcedure.input(getManyProductLineSchema).query(({ ctx, input }) =>
    ctx.prisma.productLine.findMany({
      where: input,
    })
  ),
  create: protectedProcedure.input(createProductLineSchema).mutation(({ ctx, input }) =>
    ctx.prisma.productLine.create({
      data: input,
    })
  ),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        dto: createProductLineSchema.partial(),
      })
    )
    .mutation(({ ctx, input }) =>
      ctx.prisma.productLine.update({
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
    .mutation(({ ctx, input }) =>
      ctx.prisma.productLine.delete({
        where: {
          id: input.id,
        },
      })
    ),
});
