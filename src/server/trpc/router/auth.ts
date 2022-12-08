import { adminProcedure, protectedProcedure, publicProcedure, router } from "../trpc";

export const authRouter = router({
  /**
   * Return the current state of the user (logged in or not)
   */
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "You are logged in and can see this secret message!";
  }),
  getAdminMessage: adminProcedure.query(() => {
    return "You are logged in as admin and can see this secret message!";
  }),
});
