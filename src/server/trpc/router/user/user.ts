import { z } from "zod";
import { adminProcedure, protectedProcedure, router } from "../../trpc";

export const userRouter = router({
  me: protectedProcedure.query(async ({ ctx }) => {
    const userResponse = await ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        isAdmin: true,
      },
    });
    return userResponse?.isAdmin;
  }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  getOneWhere: adminProcedure
    .input(
      z
        .object({
          id: z.string().length(25),
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
        id: z.string().length(25),
        dto: z
          .object({
            name: z.string(),
            phone: z.string().max(50),
          })
          .partial(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: input.dto,
      });
    }),
  delete: adminProcedure
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
  toggleStatus: adminProcedure
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
        status: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          status: !input.status,
        },
      });
    }),
});
