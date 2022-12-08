import { z } from "zod";
import { adminProcedure, protectedProcedure, router } from "../trpc";

export const userRouter = router({
  getAll: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  getOneWhere: protectedProcedure
    .input(
      z
        .object({
          id: z.string().cuid(),
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
        id: z.string().cuid(),
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
  delete: protectedProcedure
    .input(
      z.object({
        id: z
          .string({
            required_error: "The id of the user is required",
            invalid_type_error: "The id of the user must be a string",
          })
          .cuid({
            message: "The id of the user must be a valid cuid",
          }),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.delete({
        where: {
          id: input.id,
        },
      });
    }),
  /**
   * Make an user inactive
   *
   * @param id The id of the user to make inactive
   */
  makeInactive: protectedProcedure
    .input(
      z.object({
        id: z
          .string({
            required_error: "The id of the user is required",
            invalid_type_error: "The id of the user must be a string",
          })
          .cuid({
            message: "The id of the user must be a valid cuid",
          }),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          status: false,
        },
      });
    }),
});
