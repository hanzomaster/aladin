import { adminProcedure, router } from "../../trpc";
import { getUserHandler } from "./user.controller";
import { params } from "./user.schema";

export const userRouter2 = router({
  getUser: adminProcedure
    .input(params)
    .query(({ input }) => getUserHandler({ paramsInput: input })),
});
