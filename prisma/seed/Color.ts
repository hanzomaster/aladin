import { ColorLine, Prisma, PrismaClient } from "@prisma/client";

const entries: Prisma.ColorCreateInput[] = [
  {
    code: "12345",
    colorLine: ColorLine.RED,
    colorName: "Red",
  },
  {
    code: "12346",
    colorLine: ColorLine.BLUE,
    colorName: "Blue",
  },
];

export default async function createColors(prisma: PrismaClient) {
  console.log(`\tCreating colors`);
  let succeed = 0;
  for (const data of entries) {
    await prisma.color.create({
      data,
    });
    succeed++;
  }
  console.log(`\tCreated ${succeed} colors of ${entries.length}`);
}
