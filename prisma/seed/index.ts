import { PrismaClient } from "@prisma/client";
import createProducts from "./Product";
import createProductLines from "./ProductLine";
const prisma = new PrismaClient();

const seeds = [createProductLines, createProducts];

async function main() {
  console.log("Start seeding ...");
  seeds.forEach((seed) => seed(prisma));
  // createProductLines(prisma);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });