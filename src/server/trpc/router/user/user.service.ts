import { prisma } from "@db/client"
import { Prisma, User } from "@prisma/client"

export const findUser = async (
  where: Partial<Prisma.UserWhereInput>,
  select?: Prisma.UserSelect
) => {
  return (await prisma.user.findFirst({
    where,
    select,
  })) as User;
};
