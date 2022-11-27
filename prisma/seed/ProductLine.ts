import { Gender, Prisma, PrismaClient } from "@prisma/client";

const entries: Prisma.ProductLineCreateInput[] = [
  {
    type: "Shirt",
    gender: Gender.M,
  },
  {
    type: "Jean",
    gender: Gender.M,
  },
  {
    type: "Dress",
    gender: Gender.F,
  },
];

export default async function createProductLines(prisma: PrismaClient) {
  console.log(`\tCreating product lines`);
  let succeed = 0;
  for (const data of entries) {
    await prisma.productLine.create({
      data,
    });
    succeed++;
  }
  console.log(`\tCreated ${succeed} product lines of ${entries.length}`);
}
