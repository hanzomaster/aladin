import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import {
  createProductSchema,
  getAllSchema,
  getManyProductSchema,
  updateProductSchema,
} from "./dto";

export const productRouter = router({
  search: publicProcedure
    .input(
      z.object({
        name: z.string().max(50),
      })
    )
    .query(({ ctx, input }) =>
      ctx.prisma.product.findMany({
        where: {
          name: {
            search: input.name,
          },
        },
      })
    ),
  getAll: publicProcedure.input(getAllSchema).query(({ ctx, input }) =>
    ctx.prisma.product.findMany({
      skip: input?.skip,
      take: input?.take,
      include: {
        line: {
          select: {
            type: true,
            gender: true,
            textDescription: true,
            htmlDescription: true,
          },
        },
        productDetail: {
          select: {
            colorCode: true,
            image: true,
          },
        },
      },
    })
  ),
  getOneWhere: publicProcedure
    .input(
      z.object({
        code: z.string().cuid(),
      })
    )
    .query(({ ctx, input }) =>
      ctx.prisma.product.findUnique({
        where: input,
        include: {
          line: {
            select: {
              type: true,
              gender: true,
              textDescription: true,
              htmlDescription: true,
            },
          },
          productDetail: {
            select: {
              colorCode: true,
              image: true,
            },
          },
        },
      })
    ),
  getManyWhere: publicProcedure.input(getManyProductSchema).query(({ ctx, input }) =>
    ctx.prisma.product.findMany({
      where: {
        name: input.name,
        description: input.description,
        productLine: input.productLine,
        buyPrice: input.buyPrice,
        line: {
          type: input.type,
          gender: input.gender,
        },
      },
      include: {
        line: {
          select: {
            type: true,
            gender: true,
            textDescription: true,
            htmlDescription: true,
          },
        },
        productDetail: {
          select: {
            colorCode: true,
            image: true,
          },
        },
      },
    })
  ),
  create: protectedProcedure.input(createProductSchema).mutation(async ({ ctx, input }) =>
    ctx.prisma.product.create({
      data: {
        name: input.name,
        description: input.description,
        buyPrice: input.buyPrice,
        line: {
          connectOrCreate: {
            where: {
              type_gender: {
                type: input.type,
                gender: input.gender,
              },
            },
            create: {
              type: input.type,
              gender: input.gender,
            },
          },
        },
        productDetail: {
          create: input.productDetail.map((detail) => ({
            colorCode: detail.colorCode,
            image: detail.image,
          })),
        },
      },
    })
  ),
  update: protectedProcedure
    .input(
      z.object({
        code: z.string().cuid(),
        dto: updateProductSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (!input.dto.productDetail) {
        return ctx.prisma.product.update({
          include: {
            line: true,
            productDetail: true,
          },
          where: {
            code: input.code,
          },
          data: {
            name: input.dto.name,
            description: input.dto.description,
            buyPrice: input.dto.buyPrice,
            line: {
              update: {
                type: input.dto.type,
                gender: input.dto.gender,
              },
            },
          },
        });
      } else {
        return ctx.prisma.product.update({
          include: {
            line: true,
            productDetail: true,
          },
          where: {
            code: input.code,
          },
          data: {
            name: input.dto.name,
            description: input.dto.description,
            buyPrice: input.dto.buyPrice,
            line: {
              update: {
                type: input.dto.type,
                gender: input.dto.gender,
              },
            },
            productDetail: {
              deleteMany: {},
              createMany: {
                skipDuplicates: true,
                data: input.dto.productDetail.map((detail) => ({
                  colorCode: detail.colorCode,
                  image: detail.image,
                })),
              },
            },
          },
        });
      }
    }),
  delete: protectedProcedure
    .input(
      z.object({
        code: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      ctx.prisma.product.delete({
        where: {
          code: input.code,
        },
      })
    ),
});
