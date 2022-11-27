import { ColorLine, Gender, Prisma, PrismaClient } from "@prisma/client";
import createColors from "./Color";
const prisma = new PrismaClient();

const productLines: Prisma.ProductLineCreateInput[] = [
  {
    type: "Shirt",
    gender: Gender.M,
    products: {
      create: [
        {
          name: "T-Shirt",
          buyPrice: 10,
          productDetail: {
            create: [
              {
                image: "https://www.google.com",
                color: {
                  connect: {},
                  create: {
                    code: "12345",
                    colorLine: ColorLine.RED,
                    colorName: "Red",
                  },
                },
              },
            ],
          },
        },
        {
          name: "Long Sleeve",
          buyPrice: 15,
        },
      ],
    },
  },
  {
    type: "Jean",
    gender: Gender.M,
    products: {
      create: [
        {
          name: "Slim Fit",
          buyPrice: 20,
        },
        {
          name: "Regular Fit",
          buyPrice: 20,
        },
      ],
    },
  },
];

const seeds = [createColors];

async function main() {
  console.log(`Start seeding ...`);
  seeds.forEach((seed) => async () => await seed(prisma));
  for (const productLine of productLines) {
    const createdProductLine = await prisma.productLine.create({
      data: productLine,
    });
    console.log(`Created productLine with id: ${createdProductLine.id}`);
  }
  console.log("Finished seeding!");
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
