import { TRPCError } from "@trpc/server";
import { ParamsInput } from "./user.schema";
import { findUser } from "./user.service";

export const getUserHandler = async ({ paramsInput }: { paramsInput: ParamsInput }) => {
  const user = await findUser({ id: paramsInput.id });

  if (!user) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "User ID not found",
    });
  }

  return {
    status: "success",
    data: {
      user,
    },
  };
};
