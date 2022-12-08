import { Prisma } from "@prisma/client";
import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import {
  createProductSchema,
  getAllSchema,
  getManyProductSchema,
  updateProductSchema,
} from "./dto";

const includeProductLineAndProductDetail: Prisma.ProductSelect & Prisma.ProductDetailSelect = {
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
      id: true,
      colorCode: true,
      image: true,
      productInStock: true,
    },
  },
};

export const productRouter = router({
  /**
   * Search for products by name
   *
   * @param name The name of the product to search for (max 50 characters)
   *
   * @returns List of products that match the search
   */
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
            contains: input.name,
          },
        },
        include: includeProductLineAndProductDetail,
      })
    ),
  /**
   * Get all products (paginated)
   *
   * @param skip The number of products to skip
   * @param take The number of products to take
   *
   * @returns List of products
   */
  getAll: publicProcedure.input(getAllSchema).query(({ ctx, input }) =>
    ctx.prisma.product.findMany({
      skip: input?.skip,
      take: input?.take,
      include: includeProductLineAndProductDetail,
    })
  ),
  /**
   * Get one product by code
   *
   * @param code The code of the product to get
   *
   * @returns The product
   */
  getOneWhere: publicProcedure
    .input(
      z.object({
        code: z.string().cuid(),
      })
    )
    .query(({ ctx, input }) =>
      ctx.prisma.product.findUnique({
        where: input,
        include: includeProductLineAndProductDetail,
      })
    ),
  /**
   * Get many products filter by name, description, productLine, buyPrice and line
   */
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
      include: includeProductLineAndProductDetail,
    })
  ),
  /**
   * Create a new product
   */
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
  /**
   * Update a product
   *
   * @param code The code of the product to update
   * @param dto The data to update
   *
   * @returns The updated product
   */
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
          include: includeProductLineAndProductDetail,
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
          include: includeProductLineAndProductDetail,
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
  /**
   * Delete a product
   *
   * @param code The code of the product to delete
   *
   * @returns The deleted product
   */
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
