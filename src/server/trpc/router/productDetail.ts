import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import {
  createProductDetailSchema,
  deleteProductDetailSchema,
  getAllSchema,
  updateProductDetailSchema,
} from "./dto";

export const productDetailRouter = router({
  getAll: publicProcedure.input(getAllSchema).query(({ ctx, input }) =>
    ctx.prisma.productDetail.findMany({
      skip: input?.skip,
      take: input?.take,
    })
  ),
  getAllOfProduct: publicProcedure
    .input(
      z.object({
        productCode: z.string().cuid(),
      })
    )
    .query(({ ctx, input }) =>
      ctx.prisma.productDetail.findMany({
        where: {
          productCode: input.productCode,
        },
      })
    ),
  create: protectedProcedure.input(createProductDetailSchema).query(({ ctx, input }) =>
    ctx.prisma.productDetail.create({
      data: {
        product: {
          connect: {
            code: input.productCode,
          },
        },
        colorCode: input.colorCode,
        image: input.image,
      },
    })
  ),
  update: protectedProcedure.input(updateProductDetailSchema).query(({ ctx, input }) =>
    ctx.prisma.productDetail.update({
      where: {
        productCode_colorCode: {
          colorCode: input.colorCode,
          productCode: input.productCode,
        },
      },
      data: {
        colorCode: input.dto.colorCode,
        image: input.dto.image,
      },
    })
  ),
  delete: protectedProcedure.input(deleteProductDetailSchema).query(({ ctx, input }) => {
    if (!input.id && input.product_color) {
      return ctx.prisma.productDetail.delete({
        where: {
          productCode_colorCode: {
            productCode: input.product_color.productCode,
            colorCode: input.product_color.colorCode,
          },
        },
      });
    } else {
      return ctx.prisma.productDetail.delete({
        where: {
          id: input.id,
        },
      });
    }
  }),
});
