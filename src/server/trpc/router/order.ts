import { OrderStatus, Prisma } from "@prisma/client";
import { z } from "zod";
import { adminProcedure, protectedProcedure, publicProcedure, router } from "../trpc";

const orderInclude: Prisma.OrderInclude = {
  orderdetail: {
    include: {
      productDetail: {
        include: {
          product: true,
        },
      },
    },
  },
};

export const orderRouter = router({
  getAll: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.order.findMany({
      include: {
        orderdetail: true,
      },
    });
  }),
  get: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.order.findMany({
      where: {
        customerNumber: ctx.session.user.id,
      },
      include: orderInclude,
    });
  }),
  getById: protectedProcedure
    .input(
      z.object({
        orderNumber: z.string().cuid(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.order.findUnique({
        where: {
          orderNumber: input.orderNumber,
        },
        include: orderInclude,
      });
    }),
  create: protectedProcedure
    .input(
      z
        .object({
          comment: z.string(),
          address: z.object({
            receiver: z.string(),
            phone: z.string(),
            city: z.string(),
            district: z.string(),
            ward: z.string(),
            detail: z.string(),
          }),
          addressId: z.string(),
        })
        .partial()
    )
    .mutation(async ({ ctx, input }) => {
      const userCart = await ctx.prisma.cart.findUnique({
        where: {
          userId: ctx.session.user.id,
        },
        include: {
          cartItem: {
            select: {
              numberOfItems: true,
              size: true,
              productDetail: {
                select: {
                  id: true,
                  product: {
                    select: {
                      buyPrice: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      if (!userCart) {
        throw new Error("Cart not found");
      }
      if (!userCart.cartItem.length) {
        throw new Error("Cart is empty");
      }
      if (!input.address && !input.addressId) {
        throw new Error("Address is required");
      }
      if (input.address && !input.addressId)
        return ctx.prisma.order.create({
          data: {
            customer: {
              connect: {
                id: ctx.session.user.id,
              },
            },
            address: {
              create: {
                receiver: input.address.receiver,
                phone: input.address.phone,
                city: input.address.city,
                district: input.address.district,
                ward: input.address.ward,
                detail: input.address.detail,
                userId: ctx.session.user.id,
              },
            },
            orderdetail: {
              create: userCart.cartItem.map((cartItem) => ({
                quantityInOrdered: cartItem.numberOfItems,
                priceEach: cartItem.productDetail.product.buyPrice,
                size: cartItem.size,
                productDetailId: cartItem.productDetail.id,
              })),
            },
            comments: input.comment,
          },
        });
      if (!input.address && input.addressId)
        return ctx.prisma.order.create({
          data: {
            customer: {
              connect: {
                id: ctx.session.user.id,
              },
            },
            address: {
              connect: {
                id: input.addressId,
              },
            },
            orderdetail: {
              create: userCart.cartItem.map((cartItem) => ({
                quantityInOrdered: cartItem.numberOfItems,
                priceEach: cartItem.productDetail.product.buyPrice,
                size: cartItem.size,
                productDetailId: cartItem.productDetail.id,
              })),
            },
            comments: input.comment,
          },
        });
    }),
  updateStatus: publicProcedure
    .input(
      z.object({
        orderNumber: z.string().cuid(),
        dto: z.object({
          status: z.nativeEnum(OrderStatus),
        }),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.order.update({
        where: {
          orderNumber: input.orderNumber,
        },
        data: {
          status: input.dto.status,
        },
      });
    }),
  delete: protectedProcedure
    .input(
      z.object({
        orderNumber: z.string().cuid(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.order.delete({
        where: {
          orderNumber: input.orderNumber,
        },
      });
    }),
});
