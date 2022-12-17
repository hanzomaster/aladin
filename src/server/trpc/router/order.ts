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
      z.object({
        requireDate: z.date(),
        comments: z.string().optional(),
        orderdetail: z.array(
          z.object({
            productDetailId: z.string().cuid(),
            quantityInOrdered: z.number().int(),
            priceEach: z.number(),
          })
        ),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.order.create({
        data: {
          customerNumber: ctx.session.user.id,
          requiredDate: input.requireDate,
          comments: input.comments,
          orderdetail: {
            create: input.orderdetail.map((item) => ({
              productDetailId: item.productDetailId,
              quantityInOrdered: item.quantityInOrdered,
              priceEach: item.priceEach,
            })),
          },
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
