import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure, router } from "../../trpc";

export const addressRouter = router({
  getAll: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.address.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    })
  ),
  create: protectedProcedure
    .input(
      z.object({
        dto: z.object({
          receiver: z.string(),
          phone: z.string(),
          city: z.string(),
          district: z.string(),
          ward: z.string().optional(),
          detail: z.string().optional(),
        }),
      })
    )
    .mutation(async ({ ctx, input }) =>
      ctx.prisma.address.create({
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
        dto: z
          .object({
            receiver: z.string(),
            phone: z.string(),
            city: z.string(),
            district: z.string(),
            ward: z.string(),
            detail: z.string(),
          })
          .partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const address = await ctx.prisma.address.findUnique({
        where: {
          id: input.id,
        },
      });
      if (!address) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }
      if (address.userId !== ctx.session.user.id) {
        throw new TRPCError({
          code: "BAD_REQUEST",
        });
      }
      return ctx.prisma.address.update({
        where: {
          id: input.id,
        },
        data: input.dto,
      });
    }),
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const address = await ctx.prisma.address.findUnique({
        where: {
          id: input.id,
        },
      });
      if (!address) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }
      if (address.userId !== ctx.session.user.id) {
        throw new TRPCError({
          code: "BAD_REQUEST",
        });
      }
      return ctx.prisma.address.delete({
        where: {
          id: input.id,
        },
      });
    }),
});