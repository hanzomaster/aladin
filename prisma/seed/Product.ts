import { Gender, Prisma, PrismaClient } from "@prisma/client";

const entries: Prisma.ProductCreateInput[] = [
  {
    name: "Hoodie 1",
    description: "Hoodie 1 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Hoodie",
            gender: Gender.M,
          },
        },
        create: {
          type: "Hoodie",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 10,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1klRjwzBtBgzRM26qKjmjq7MIIeHvsuKn",
        colorCode: "b3c8da",
        ProductInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 10,
              },
              {
                size: "M",
                quantity: 10,
              },
              {
                size: "L",
                quantity: 10,
              },
              {
                size: "XL",
                quantity: 10,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shirt 4",
    description: "Shirt 4 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shirt",
            gender: Gender.M,
          },
        },
        create: {
          type: "Shirt",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 10,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1l5COA5yvehApXPtN18ISufYGh4qdjwZr",
        colorCode: "c0c7d7",
        ProductInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 10,
              },
              {
                size: "M",
                quantity: 10,
              },
              {
                size: "L",
                quantity: 10,
              },
              {
                size: "XL",
                quantity: 10,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Polo 3",
    description: "Polo 3 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Polo",
            gender: Gender.M,
          },
        },
        create: {
          type: "Polo",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 10,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1ke-hC92JK4iq5yLlY507kulX65-7IJPg",
        colorCode: "d98e3a",
        ProductInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 10,
              },
              {
                size: "M",
                quantity: 10,
              },
              {
                size: "L",
                quantity: 10,
              },
              {
                size: "XL",
                quantity: 10,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Jean 4",
    description: "Jean 4 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jean",
            gender: Gender.M,
          },
        },
        create: {
          type: "Jean",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 10,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1lTgktShApBYR8T1GeU_ZhF8DrN4qB7Fc",
        colorCode: "3e3b3f",
        ProductInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 10,
              },
              {
                size: "M",
                quantity: 10,
              },
              {
                size: "L",
                quantity: 10,
              },
              {
                size: "XL",
                quantity: 10,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Pant 1",
    description: "Pant 1 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pant",
            gender: Gender.M,
          },
        },
        create: {
          type: "Pant",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 10,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1_bPmwivVgPKFBUNNh21hTlcsj0MD1f8z",
        colorCode: "949899",
        ProductInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 10,
              },
              {
                size: "M",
                quantity: 10,
              },
              {
                size: "L",
                quantity: 10,
              },
              {
                size: "XL",
                quantity: 10,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Short 5",
    description: "Short 5 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Short",
            gender: Gender.M,
          },
        },
        create: {
          type: "Short",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 10,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1iv7L0BzCOQISblqY4IcXEN7w3oJJdqdP",
        colorCode: "272429",
        ProductInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 10,
              },
              {
                size: "M",
                quantity: 10,
              },
              {
                size: "L",
                quantity: 10,
              },
              {
                size: "XL",
                quantity: 10,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Sweater 1",
    description: "Sweater 1 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Sweater",
            gender: Gender.M,
          },
        },
        create: {
          type: "Sweater",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 10,
    productDetail: {
      // many color here for Sweater 1
      create: {
        image: "https://drive.google.com/uc?id=1u8JGEoRTdmVDO8u_glp2RP_YIlep7cOw",
        colorCode: "c29c87",
        ProductInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 10,
              },
              {
                size: "M",
                quantity: 10,
              },
              {
                size: "L",
                quantity: 10,
              },
              {
                size: "XL",
                quantity: 10,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
];

export default async function createProducts(prisma: PrismaClient) {
  console.log(`\tCreating products`);
  let succeed = 0;
  for (const data of entries) {
    await prisma.product.upsert({
      where: {
        name: data.name,
      },
      create: data,
      update: {},
    });
    succeed++;
  }
  console.log(`\tCreated ${succeed} products of ${entries.length}`);
}
