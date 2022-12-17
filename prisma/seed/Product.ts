import { Gender, Prisma, PrismaClient } from "@prisma/client";

const entries: Prisma.ProductCreateInput[] = [
  // 5 male hoodies
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
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1klRjwzBtBgzRM26qKjmjq7MIIeHvsuKn",
        colorCode: "b3c8da",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Hoodie 2",
    description: "Hoodie 2 description",
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
    buyPrice: 610,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1Z8Ix_wR9Ix9Yp6atQ3GR9yeut4sEaMyv",
        colorCode: "1e1b1f",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 106,
              },
              {
                size: "L",
                quantity: 210,
              },
              {
                size: "XL",
                quantity: 110,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Hoodie 3",
    description: "Hoodie 3 description",
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
    buyPrice: 430,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1MMOwnTgU9LljdBIQLMfhU6fWZk7TG-ZX",
        colorCode: "f0dfd5",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 80,
              },
              {
                size: "M",
                quantity: 60,
              },
              {
                size: "L",
                quantity: 30,
              },
              {
                size: "XL",
                quantity: 50,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Hoodie 4",
    description: "Hoodie 4 description",
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
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1DrT6D_kwkGVfQTJB_7rnmdgylpCYDimM",
        colorCode: "d3d6d2",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 90,
              },
              {
                size: "M",
                quantity: 89,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 70,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Hoodie 5",
    description: "Hoodie 5 description",
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
    buyPrice: 560,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1caz3SHVFzKNDsOzD0HAcjEAmncXbg-BU",
        colorCode: "e1d8d7",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 95,
              },
              {
                size: "M",
                quantity: 100,
              },
              {
                size: "L",
                quantity: 80,
              },
              {
                size: "XL",
                quantity: 70,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

  // 5 male Shirts
  {
    name: "Shirt 1",
    description: "Shirt 1 description",
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
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1YjnblL4SWMCa15YjCfcw1D88DBpRFxya",
        colorCode: "1d2f48",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 95,
              },
              {
                size: "M",
                quantity: 90,
              },
              {
                size: "L",
                quantity: 50,
              },
              {
                size: "XL",
                quantity: 60,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shirt 2",
    description: "Shirt 2 description",
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
    buyPrice: 350,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=117uFLk0tDId9sezTMmgEfOyZUWkMxNiF",
        colorCode: "5f5d69",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 100,
              },
              {
                size: "L",
                quantity: 80,
              },
              {
                size: "XL",
                quantity: 70,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shirt 3",
    description: "Shirt 3 description",
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
    buyPrice: 300,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1PufhDSVP4uWigpbytwThBAl7aSh8R6Hg",
        colorCode: "b5b5b9",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 90,
              },
              {
                size: "M",
                quantity: 95,
              },
              {
                size: "L",
                quantity: 80,
              },
              {
                size: "XL",
                quantity: 85,
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
    buyPrice: 330,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1l5COA5yvehApXPtN18ISufYGh4qdjwZr",
        colorCode: "c0c7d7",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 100,
              },
              {
                size: "L",
                quantity: 80,
              },
              {
                size: "XL",
                quantity: 70,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shirt 5",
    description: "Shirt 5 description",
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
    buyPrice: 350,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1-sH1baVUJ3shcG90R7wjy-4hJfZmUauQ",
        colorCode: "7a828f",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 80,
              },
              {
                size: "M",
                quantity: 90,
              },
              {
                size: "L",
                quantity: 80,
              },
              {
                size: "XL",
                quantity: 70,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },


  // male polo
  {
    name: "Polo 1",
    description: "Polo 1 description",
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
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1uTXDn22EwCs3EvIhceVBx5j5DdJL_Wgn",
        colorCode: "b5ad9b",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 100,
              },
              {
                size: "L",
                quantity: 110,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Polo 2",
    description: "Polo 2 description",
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
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1_WDLT6zszJEmE9T8tH5HlPBqSlt0yw74",
        colorCode: "ece9ec",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 100,
              },
              {
                size: "L",
                quantity: 110,
              },
              {
                size: "XL",
                quantity: 90,
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
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1ke-hC92JK4iq5yLlY507kulX65-7IJPg",
        colorCode: "d98e3a",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 100,
              },
              {
                size: "L",
                quantity: 110,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Polo 4",
    description: "Polo 4 description",
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
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1qRfXq6N99wCSOP8ZIGeLl-iJrFaj8gyt",
        colorCode: "6aa1aa",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 100,
              },
              {
                size: "L",
                quantity: 110,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Polo 5",
    description: "Polo 5 description",
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
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=19XOmURq2u7ql0bCzAGY6WSG_B8kYyy7z",
        colorCode: "1b1a1f",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 100,
              },
              {
                size: "L",
                quantity: 110,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },


// male jeans
  {
    name: "Jeans 1",
    description: "Jeans 1 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jeans",
            gender: Gender.M,
          },
        },
        create: {
          type: "Jeans",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1NNpDCh8doONQ5u_sNyx_nth4TyuOJvF5",
        colorCode: "465b6c",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 110,
              },
              {
                size: "XL",
                quantity: 100,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Jeans 2",
    description: "Jeans 2 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jeans",
            gender: Gender.M,
          },
        },
        create: {
          type: "Jeans",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=180zVcG0aRsPPrXp7FkEVBU-5ArGl_eUU",
        colorCode: "8faabd",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 110,
              },
              {
                size: "XL",
                quantity: 100,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Jeans 3",
    description: "Jeans 3 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jeans",
            gender: Gender.M,
          },
        },
        create: {
          type: "Jeans",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1LTUqCLja5yvGpiHgV0c6oyDa2cmf_E5S",
        colorCode: "162e4b",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 110,
              },
              {
                size: "XL",
                quantity: 100,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Jeans 4",
    description: "Jeans 4 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jeans",
            gender: Gender.M,
          },
        },
        create: {
          type: "Jeans",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1lTgktShApBYR8T1GeU_ZhF8DrN4qB7Fc",
        colorCode: "3e3b3f",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 110,
              },
              {
                size: "XL",
                quantity: 100,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Jeans 5",
    description: "Jeans 5 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jeans",
            gender: Gender.M,
          },
        },
        create: {
          type: "Jeans",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=129pUNacs3fbRvrA-4lFBAp5Yk55vrB54",
        colorCode: "1f3554",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 110,
              },
              {
                size: "XL",
                quantity: 100,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

// male pants
  {
    name: "Pants 1",
    description: "Pants 1 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pants",
            gender: Gender.M,
          },
        },
        create: {
          type: "Pants",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 450,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1_bPmwivVgPKFBUNNh21hTlcsj0MD1f8z",
        colorCode: "949899",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Pants 2",
    description: "Pants 2 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pants",
            gender: Gender.M,
          },
        },
        create: {
          type: "Pants",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 450,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1zUgEJqyDHIaIUrYT0SSM2-UQ62NufLpB",
        colorCode: "202126",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Pants 3",
    description: "Pants 3 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pants",
            gender: Gender.M,
          },
        },
        create: {
          type: "Pants",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 450,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1Cao0uLewuq6-fQ7pLYF0pfjMniae9NYS",
        colorCode: "242b34",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Pants 4",
    description: "Pants 4 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pants",
            gender: Gender.M,
          },
        },
        create: {
          type: "Pants",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 450,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1dCfIN8DdpgLVIvo1R76DUKE1T8Wr7eGs",
        colorCode: "323654",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Pants 5",
    description: "Pants 5 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pants",
            gender: Gender.M,
          },
        },
        create: {
          type: "Pants",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 450,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=16aanRVh5yOxz0LflFpg5yYmbvpWyESrS",
        colorCode: "1b324d",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

// male Shorts
  {
    name: "Shorts 1",
    description: "Shorts 1 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shorts",
            gender: Gender.M,
          },
        },
        create: {
          type: "Shorts",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=13MMwkAi700ZUfak9iOwGH0Iz160gqq8E",
        colorCode: "0f1115",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shorts 2",
    description: "Shorts 2 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shorts",
            gender: Gender.M,
          },
        },
        create: {
          type: "Shorts",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1gi2j-mMfUlC_5Jjgqw-Jnb1PIk9wuAnh",
        colorCode: "d9ddde",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shorts 3",
    description: "Shorts 3 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shorts",
            gender: Gender.M,
          },
        },
        create: {
          type: "Shorts",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1h-vw2Eaf2OQYNHl88EcTbfsnk9Y-e6qy",
        colorCode: "82a2b5",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shorts 4",
    description: "Shorts 4 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shorts",
            gender: Gender.M,
          },
        },
        create: {
          type: "Shorts",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1OETJ74EmEfybHSVGtFp1PbTvNjs-PWX0",
        colorCode: "222126",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shorts 5",
    description: "Shorts 5 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shorts",
            gender: Gender.M,
          },
        },
        create: {
          type: "Shorts",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1iv7L0BzCOQISblqY4IcXEN7w3oJJdqdP",
        colorCode: "272429",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

// male Sweater
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
    buyPrice: 480,
    productDetail: {
      // many color here for Sweater 1
      create: [
        {
          // brown
          image: "https://drive.google.com/uc?id=1u8JGEoRTdmVDO8u_glp2RP_YIlep7cOw",
          colorCode: "c29c87",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // black
          image: "https://drive.google.com/uc?id=1c4z4HipscpM0YxyOOq7KhO91_tVHL-YC",
          colorCode: "1c1c1e",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // blue
          image: "https://drive.google.com/uc?id=1I7mBse3KhLPVgP-u_RQYmtJfT3Ljyw11",
          colorCode: "2c3d63",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // red
          image: "https://drive.google.com/uc?id=1PRtPfLWIQ5wuQD4-coVTtV-6FDxt3gO2",
          colorCode: "d1361d",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Sweater 2",
    description: "Sweater 2 description",
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
    buyPrice: 480,
    productDetail: {
      // many color here for Sweater 2
      create: [
        {
          // brown
          image: "https://drive.google.com/uc?id=1n9aSOSLFqHTVRf1Hqm_6IK5BowmrxQlt",
          colorCode: "b7936c",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // blue
          image: "https://drive.google.com/uc?id=1aiLFKjYE4yGr9NYqDFLCRhC2y-v-BXmM",
          colorCode: "4982b1",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Sweater 3",
    description: "Sweater 3 description",
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
    buyPrice: 480,
    productDetail: {
      // many color here for Sweater 3
      create: [
        {
          // brown
          image: "https://drive.google.com/uc?id=1KPKJjY_JkO37NTqhElYrcA4cPnrgGVJK",
          colorCode: "945b3d",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // black
          image: "https://drive.google.com/uc?id=1bW-vkikq3xaXG2Y79zwYYEElfh7c8xyU",
          colorCode: "18171c",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // grey
          image: "https://drive.google.com/uc?id=1EzYEwK68iubDUX--ZjYb0ZuS7TWJSJrS",
          colorCode: "9a979c",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Sweater 4",
    description: "Sweater 4 description",
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
    buyPrice: 480,
    productDetail: {
      // many color here for Sweater 4
      create: [
        {
          // black
          image: "https://drive.google.com/uc?id=1tB0F2T-gW7RWF_Wd7jX2cEloWKDXcqB4",
          colorCode: "18171f",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // white
          image: "https://drive.google.com/uc?id=1yELoMzlCn9llweGrhArWxBu8zX_Kdcjq",
          colorCode: "e7dac8",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },

// male coats
  {
    name: "Coat 1",
    description: "Coat 1 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Coat",
            gender: Gender.M,
          },
        },
        create: {
          type: "Coat",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 670,
    productDetail: {
      // many color here for Coat 1
      create: [
        {
          // green
          image: "https://drive.google.com/uc?id=1WolE-3UOdNwptHi8H1XwzI4_fdDbuLE6",
          colorCode: "083941",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // black
          image: "https://drive.google.com/uc?id=1iIstztp_WDM9zc2t3AnyGwwaUo5TZu0x",
          colorCode: "434351",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // coffee
          image: "https://drive.google.com/uc?id=1e2mMUKKXVcENirv6Fr7UnApcpzMd7bXD",
          colorCode: "89635c",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Coat 2",
    description: "Coat 2 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Coat",
            gender: Gender.M,
          },
        },
        create: {
          type: "Coat",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 670,
    productDetail: {
      // many color here for Coat 2
      create: [
        {
          // black
          image: "https://drive.google.com/uc?id=1t6s40iNwcV5bkAN7HvmkFE3JB5pXyYBt",
          colorCode: "1e2225",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // white
          image: "https://drive.google.com/uc?id=1X9L7vMS8JO1gzjL2x2cXQ36n1_zoS1Zt",
          colorCode: "dacec2",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Coat 3",
    description: "Coat 3 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Coat",
            gender: Gender.M,
          },
        },
        create: {
          type: "Coat",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 670,
    productDetail: {
      // many color here for Coat 3
      create: [
        {
          // black
          image: "https://drive.google.com/uc?id=1D6ro46s7nQEgX32GEGNPmqpGZLSDqBGj",
          colorCode: "212025",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // blue
          image: "https://drive.google.com/uc?id=1F7-MZmSvEiGGyrTg8n6Yflor8VygWAAf",
          colorCode: "3f5e74",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Coat 4",
    description: "Coat 4 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Coat",
            gender: Gender.M,
          },
        },
        create: {
          type: "Coat",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 670,
    productDetail: {
      // many color here for Coat 4
      create: [
        {
          // black
          image: "https://drive.google.com/uc?id=1XDIvJEsXMERKoFWtb4uI882Ol92Z-dV5",
          colorCode: "2d2c33",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // blue
          image: "https://drive.google.com/uc?id=1Gb5F80EU3Fc227IcCxQUDMK1K1W1hNNR",
          colorCode: "213146",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // brown
          image: "https://drive.google.com/uc?id=1WQpIKbGVFhyL1KaycNvTQy0lJOFnbqZz",
          colorCode: "ca9168",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // grey
          image: "https://drive.google.com/uc?id=1oE7IpD-UWaQhMjVEyuYQXJQFido-mK2V",
          colorCode: "b6b4b4",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },

// male PJ
  {
    name: "PJ 1",
    description: "PJ 1 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "PJ",
            gender: Gender.M,
          },
        },
        create: {
          type: "PJ",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 550,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1Q1CQL0KW1WJFVw51u2LT_a7fFbqBz2cu",
        colorCode: "181d35",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "PJ 2",
    description: "PJ 2 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "PJ",
            gender: Gender.M,
          },
        },
        create: {
          type: "PJ",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 550,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1E_F4Ps1mD68dGgNi2UZ8sT3ECu8nUHGT",
        colorCode: "ccd0d5",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "PJ 3",
    description: "PJ 3 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "PJ",
            gender: Gender.M,
          },
        },
        create: {
          type: "PJ",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 550,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1BnVGCBM1YclitKOXdQevZwwhf72OiDiG",
        colorCode: "4b5043",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "PJ 4",
    description: "PJ 4 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "PJ",
            gender: Gender.M,
          },
        },
        create: {
          type: "PJ",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 550,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=19D4NlXAt0zqrpbAjn0yVqFAgBl1FG18A",
        colorCode: "c6d7ea",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "PJ 5",
    description: "PJ 5 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "PJ",
            gender: Gender.M,
          },
        },
        create: {
          type: "PJ",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 550,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=17gBH_7BnpnSKhSS1r-MtoMreyiDnWW12",
        colorCode: "214562",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

// male t-shirt
  {
    name: "T-Shirt 1",
    description: "T-Shirt 1 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "T-Shirt",
            gender: Gender.M,
          },
        },
        create: {
          type: "T-Shirt",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1Bsd6SEyo7ETcNiAHpf1ZQcGm1Lq2FH-_",
        colorCode: "151718",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "T-Shirt 2",
    description: "T-Shirt 2 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "T-Shirt",
            gender: Gender.M,
          },
        },
        create: {
          type: "T-Shirt",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1TA_dUE8bktLJMk-HEMh_JbY5PFB0Fdk-",
        colorCode: "14181b",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "T-Shirt 3",
    description: "T-Shirt 3 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "T-Shirt",
            gender: Gender.M,
          },
        },
        create: {
          type: "T-Shirt",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1ls2YvkdGKU4AEa1GHN9h4NdRH5B3i-nc",
        colorCode: "1a191e",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "T-Shirt 4",
    description: "T-Shirt 4 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "T-Shirt",
            gender: Gender.M,
          },
        },
        create: {
          type: "T-Shirt",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1vJDn2iWVUggqJRs2OcBsPwD2WdMqQSpO",
        colorCode: "181d34",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "T-Shirt 5",
    description: "T-Shirt 5 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "T-Shirt",
            gender: Gender.M,
          },
        },
        create: {
          type: "T-Shirt",
          gender: Gender.M,
        },
      },
    },
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=10LVypKwBXI5z_Ah4wladYfvzkAenALqH",
        colorCode: "f5f1ea",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

  // 5 female hoodies
  {
    name: "Hoodie 6",
    description: "Hoodie 6 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Hoodie",
            gender: Gender.F,
          },
        },
        create: {
          type: "Hoodie",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 420,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1f3oJUz9pOu9qp1LnUsMqPjfvh8_umW1_",
        colorCode: "d9d8de",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Hoodie 7",
    description: "Hoodie 7 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Hoodie",
            gender: Gender.F,
          },
        },
        create: {
          type: "Hoodie",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 610,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1cWSvHOumZL6xrniDRKDZmIrBp5q8hrXX",
        colorCode: "d7e3f3",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 106,
              },
              {
                size: "L",
                quantity: 210,
              },
              {
                size: "XL",
                quantity: 110,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Hoodie 8",
    description: "Hoodie 8 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Hoodie",
            gender: Gender.F,
          },
        },
        create: {
          type: "Hoodie",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 430,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1B8aMpQZZRu14sg2FTdxrbaVgbMeU_8sU",
        colorCode: "1a1a1a",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 80,
              },
              {
                size: "M",
                quantity: 60,
              },
              {
                size: "L",
                quantity: 30,
              },
              {
                size: "XL",
                quantity: 50,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Hoodie 9",
    description: "Hoodie 9 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Hoodie",
            gender: Gender.F,
          },
        },
        create: {
          type: "Hoodie",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1-KeHUV6hv_cCYMiAudTx7IO6BDvXcBDq",
        colorCode: "e2c2c7",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 90,
              },
              {
                size: "M",
                quantity: 89,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 70,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Hoodie 10",
    description: "Hoodie 10 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Hoodie",
            gender: Gender.F,
          },
        },
        create: {
          type: "Hoodie",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 560,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1d0NTMr7KYwas7A9RtsBaKMCrpeYnS33C",
        colorCode: "d2884b",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 95,
              },
              {
                size: "M",
                quantity: 100,
              },
              {
                size: "L",
                quantity: 80,
              },
              {
                size: "XL",
                quantity: 70,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

  // female shirts
  {
    name: "Shirt 6",
    description: "Shirt 6 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shirt",
            gender: Gender.F,
          },
        },
        create: {
          type: "Shirt",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1NLHI4HZGfPXNEelLNrhbr48m51IY2qV7",
        colorCode: "eedfe8",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shirt 7",
    description: "Shirt 7 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shirt",
            gender: Gender.F,
          },
        },
        create: {
          type: "Shirt",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1QSp_TX7a2xBWjN2wfwcM_VE1BYm4CKAB",
        colorCode: "ebb0c2",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shirt 8",
    description: "Shirt 8 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shirt",
            gender: Gender.F,
          },
        },
        create: {
          type: "Shirt",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1rQ38wXB6HISTq6mVwETOtKG6de-uXXNl",
        colorCode: "c28d61",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shirt 9",
    description: "Shirt 9 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shirt",
            gender: Gender.F,
          },
        },
        create: {
          type: "Shirt",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1utaQ1YuqVAsInfkyUP_rpCzZ6oAh93RV",
        colorCode: "131313",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shirt 10",
    description: "Shirt 10 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shirt",
            gender: Gender.F,
          },
        },
        create: {
          type: "Shirt",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1dtPAnNVkbTW_aAVtH_EIs-5XjhR4M7JZ",
        colorCode: "d7f5e0",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

  // female polo
  {
    name: "Polo 6",
    description: "Polo 6 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Polo",
            gender: Gender.F,
          },
        },
        create: {
          type: "Polo",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1SNzIrnvgFB0OHv-1bV3GCLaizyPXJmuW",
        colorCode: "f8f8f8",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Polo 7",
    description: "Polo 7 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Polo",
            gender: Gender.F,
          },
        },
        create: {
          type: "Polo",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1CB_I19iEQP6js74gahUcoCvzTVtg0ry2",
        colorCode: "f0e3e1",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Polo 8",
    description: "Polo 8 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Polo",
            gender: Gender.F,
          },
        },
        create: {
          type: "Polo",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1WUT7Nnngn72_2XUcYOuQKVy-x9KBRm2Y",
        colorCode: "f1f5f9",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Polo 9",
    description: "Polo 9 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Polo",
            gender: Gender.F,
          },
        },
        create: {
          type: "Polo",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=10isTcMA5oFi0ETxQ3SuybI07FhBN7KLR",
        colorCode: "191715",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Polo 10",
    description: "Polo 10 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Polo",
            gender: Gender.F,
          },
        },
        create: {
          type: "Polo",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 320,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1tXTq3uAs6zJFQVjVUgLGH7d6gNJqnWqM",
        colorCode: "f5f4f9",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

  //female jeans
  {
    name: "Jeans 6",
    description: "Jeans 6 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jeans",
            gender: Gender.F,
          },
        },
        create: {
          type: "Jeans",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1jMcdlHvqbKNhIic6RKklFi7ix0PXMzJK",
        colorCode: "4e5e7f",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Jeans 7",
    description: "Jeans 7 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jeans",
            gender: Gender.F,
          },
        },
        create: {
          type: "Jeans",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1XIYSBHOjYDPoAgHXiSd4YTP43cRs0-ai",
        colorCode: "566e94",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Jeans 8",
    description: "Jeans 8 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jeans",
            gender: Gender.F,
          },
        },
        create: {
          type: "Jeans",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1IOjWk4QkugEsM-krD71X4P1IMgyMq7D6",
        colorCode: "8c9fbc",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Jeans 9",
    description: "Jeans 9 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jeans",
            gender: Gender.F,
          },
        },
        create: {
          type: "Jeans",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1bpyeS8KGFAn9mkiH81Mo2prvActYkY_o",
        colorCode: "8c9fbc",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Jeans 10",
    description: "Jeans 10 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Jeans",
            gender: Gender.F,
          },
        },
        create: {
          type: "Jeans",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 520,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1Re9f0LOja1x1NYbG14qAJbof-KO-zTV4",
        colorCode: "8c9fbc",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

  // female pants
  {
    name: "Pants 6",
    description: "Pants 6 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pants",
            gender: Gender.F,
          },
        },
        create: {
          type: "Pants",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 470,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1BDA5Muksi8oFJzSXLfznH14LrNd8_d2_",
        colorCode: "efedec",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Pants 7",
    description: "Pants 7 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pants",
            gender: Gender.F,
          },
        },
        create: {
          type: "Pants",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 470,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1kE4JMWLNQhmqJATjP2vA49F6kwW6LQdh",
        colorCode: "c8cde2",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Pants 8",
    description: "Pants 8 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pants",
            gender: Gender.F,
          },
        },
        create: {
          type: "Pants",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 470,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1veRBmsLeajaKMtGV_xn4W6BLS73bLaYa",
        colorCode: "a2a3ae",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Pants 9",
    description: "Pants 9 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pants",
            gender: Gender.F,
          },
        },
        create: {
          type: "Pants",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 470,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1gB8krxmROIXLjDV0KdRhWIvQgZZj4AuW",
        colorCode: "1e1f25",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Pants 10",
    description: "Pants 10 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Pants",
            gender: Gender.F,
          },
        },
        create: {
          type: "Pants",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 470,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1C9QwytLzU7oGSDzZ6UqZ5WFCBdRoizZm",
        colorCode: "dfc4a9",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

  // female shorts
  {
    name: "Shorts 6",
    description: "Shorts 6 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shorts",
            gender: Gender.F,
          },
        },
        create: {
          type: "Shorts",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 330,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1DN1wO7tXODXdzGspfYTzRlbMbgqZBCGI",
        colorCode: "272a2e",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shorts 7",
    description: "Shorts 7 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shorts",
            gender: Gender.F,
          },
        },
        create: {
          type: "Shorts",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 330,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1K8wRP5NLqBZmJkchiGGliHWVGxDwOOeg",
        colorCode: "365c99",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shorts 8",
    description: "Shorts 8 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shorts",
            gender: Gender.F,
          },
        },
        create: {
          type: "Shorts",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 330,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=10aiHpzXNpi59NU4GANtH4SyE26gImlTw",
        colorCode: "a7a7a5",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shorts 9",
    description: "Shorts 9 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shorts",
            gender: Gender.F,
          },
        },
        create: {
          type: "Shorts",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 330,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1k_PvNIJl9fDkxD_1Ak7zYZHvNUE8G5cq",
        colorCode: "accdc9",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "Shorts 10",
    description: "Shorts 10 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Shorts",
            gender: Gender.F,
          },
        },
        create: {
          type: "Shorts",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 330,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1H7HyiJttsN1fWv1UB0YBqLRqFOu2Z724",
        colorCode: "baaedb",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 90,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

  // female sweater
  {
    name: "Sweater 6",
    description: "Sweater 6 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Sweater",
            gender: Gender.F,
          },
        },
        create: {
          type: "Sweater",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 460,
    productDetail: {
      // many color here for Sweater 6
      create: [
        {
          // pink
          image: "https://drive.google.com/uc?id=1ZXUKHO1FprYHD9-iRH1LB1WYfiI1EclS",
          colorCode: "f4ddde",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // black
          image: "https://drive.google.com/uc?id=1J5L-RV7HBvzKU6Mfop9JwSAGyvbBHsfG",
          colorCode: "020d1f",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // white
          image: "https://drive.google.com/uc?id=15GLVXW9-CP09GhefzdIwwHb5E9jatuAS",
          colorCode: "e9e3de",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Sweater 7",
    description: "Sweater 7 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Sweater",
            gender: Gender.F,
          },
        },
        create: {
          type: "Sweater",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 460,
    productDetail: {
      // many color here for Sweater 7
      create: [
        {
          // pink
          image: "https://drive.google.com/uc?id=1lyMv7ACOff_sYSR4u1-g9wJUfWO2Pnub",
          colorCode: "f1aeae",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // white
          image: "https://drive.google.com/uc?id=1-Sxk-6qRyFRMU99UOYLrMRcYVFE1zcE7",
          colorCode: "edece8",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },

  // female coat
  {
    name: "Coat 6",
    description: "Coat 6 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Coat",
            gender: Gender.F,
          },
        },
        create: {
          type: "Coat",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 600,
    productDetail: {
      // many color here for Coat 6
      create: [
        {
          // purple
          image: "https://drive.google.com/uc?id=1HGfSRKFxlOnYGewRlD_aYQg1wGN6iHAs",
          colorCode: "bda1c1",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // blue
          image: "https://drive.google.com/uc?id=1pXctVAjIZuRHZCGhaXS04doQ-dMNqzLe",
          colorCode: "c0d2dd",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // white
          image: "https://drive.google.com/uc?id=1rQcZHyaACkfEZoHCkdg_FGJVvw6Kc0jC",
          colorCode: "f7ece6",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Coat 7",
    description: "Coat 7 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Coat",
            gender: Gender.F,
          },
        },
        create: {
          type: "Coat",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 600,
    productDetail: {
      // many color here for Coat 7
      create: [
        {
          // purple
          image: "https://drive.google.com/uc?id=1q5bN6VDck_8b2XD6KxDfoViHnElytInU",
          colorCode: "a38399",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // grey
          image: "https://drive.google.com/uc?id=1VqVcKa4clmmFliuNtrm2BrG3UvQ9G1Tr",
          colorCode: "8f96a3",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Coat 8",
    description: "Coat 8 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Coat",
            gender: Gender.F,
          },
        },
        create: {
          type: "Coat",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 600,
    productDetail: {
      // many color here for Coat 8
      create: [
        {
          // white
          image: "https://drive.google.com/uc?id=1ji2lzZeveJwsR3BAvsLzMXLhoN3bOHWC",
          colorCode: "f2f5f1",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // mint
          image: "https://drive.google.com/uc?id=1XDFfYJz0oA2kw2c5NOh77tEYL4VDDISu",
          colorCode: "bacccd",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Coat 9",
    description: "Coat 9 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Coat",
            gender: Gender.F,
          },
        },
        create: {
          type: "Coat",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 600,
    productDetail: {
      // many color here for Coat 9
      create: [
        {
          // white
          image: "https://drive.google.com/uc?id=1Qr5G1wFsBtzt7nk2_v7jP9vz1EJdRQJF",
          colorCode: "edebe7",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // brown
          image: "https://drive.google.com/uc?id=1OgQsJs_3817CQOSTjpdlTKv6lVEOHKO6",
          colorCode: "d89668",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "Coat 10",
    description: "Coat 10 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "Coat",
            gender: Gender.F,
          },
        },
        create: {
          type: "Coat",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 600,
    productDetail: {
      // many color here for Coat 10
      create: [
        {
          // white
          image: "https://drive.google.com/uc?id=1X_eLZoN9GRkiVbiMMWAI7aJdE4eUyzZg",
          colorCode: "d9d5d2",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // black
          image: "https://drive.google.com/uc?id=1ohOEYxim4eENVV3-w77aOfHgrJap5chH",
          colorCode: "2f323a",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },

  // female pj
  {
    name: "PJ 6",
    description: "PJ 6 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "PJ",
            gender: Gender.F,
          },
        },
        create: {
          type: "PJ",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 550,
    productDetail: {
      // many color here for PJ 6
      create: [
        {
          // pink
          image: "https://drive.google.com/uc?id=17sn5aKxalNhAsDAoXvwgWbJ-69_NITZT",
          colorCode: "fcede9",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // black
          image: "https://drive.google.com/uc?id=1FuwN9Vo0BdmqageBAXfFo6NCM0ibZ5jU",
          colorCode: "272942",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "PJ 7",
    description: "PJ 7 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "PJ",
            gender: Gender.F,
          },
        },
        create: {
          type: "PJ",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 510,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=15Lm8aOios0hMBoYn7qcDQlm6pmLPEf9p",
        colorCode: "f2e2de",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 106,
              },
              {
                size: "L",
                quantity: 210,
              },
              {
                size: "XL",
                quantity: 110,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "PJ 8",
    description: "PJ 8 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "PJ",
            gender: Gender.F,
          },
        },
        create: {
          type: "PJ",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 530,
    productDetail: {
      // many color here for PJ 8
      create: [
        {
          // grey
          image: "https://drive.google.com/uc?id=1zzhKBsxpdtIfL9zDqPrpl6GbMLZiByvb",
          colorCode: "c0c6cb",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // black
          image: "https://drive.google.com/uc?id=1ABfVVD4LCemr4yJ_sfAQMR8dASlGX7rW",
          colorCode: "222339",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
        {
          // pink
          image: "https://drive.google.com/uc?id=1-_6mCyjmj-fn67LMXOdqiPUvYV97UcFW",
          colorCode: "ffdad2",
          productInStock: {
            createMany: {
              data: [
                {
                  size: "S",
                  quantity: 150,
                },
                {
                  size: "M",
                  quantity: 150,
                },
                {
                  size: "L",
                  quantity: 100,
                },
                {
                  size: "XL",
                  quantity: 110,
                },
              ],
              skipDuplicates: true,
            },
          },
        },
      ],
    },
  },
  {
    name: "PJ 9",
    description: "PJ 9 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "PJ",
            gender: Gender.F,
          },
        },
        create: {
          type: "PJ",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 510,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1kgaOo9WiGA0m57eemqqv-_wJ-NLcY3zh",
        colorCode: "131b31",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 106,
              },
              {
                size: "L",
                quantity: 210,
              },
              {
                size: "XL",
                quantity: 110,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "PJ 10",
    description: "PJ 10 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "PJ",
            gender: Gender.F,
          },
        },
        create: {
          type: "PJ",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 540,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1iFGTvQsglW_b_g_ITjijGXn5qLht1tmA",
        colorCode: "f6d1bb",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 100,
              },
              {
                size: "M",
                quantity: 106,
              },
              {
                size: "L",
                quantity: 210,
              },
              {
                size: "XL",
                quantity: 110,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },

  // female t-shirts
  {
    name: "T-Shirt 6",
    description: "T-Shirt 6 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "T-Shirt",
            gender: Gender.F,
          },
        },
        create: {
          type: "T-Shirt",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1yWYNMZINB4PeRFgRJ6c9Z7iCrRbRR074",
        colorCode: "eaece0",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "T-Shirt 7",
    description: "T-Shirt 7 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "T-Shirt",
            gender: Gender.F,
          },
        },
        create: {
          type: "T-Shirt",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1rirXKLJWeSkmIFvkBOIEsuW-APX4PNuM",
        colorCode: "f0f5f4",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "T-Shirt 8",
    description: "T-Shirt 8 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "T-Shirt",
            gender: Gender.F,
          },
        },
        create: {
          type: "T-Shirt",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1I1TTxqf9CWhJxQ5Q7toLT84rP7SKOeDR",
        colorCode: "edc707",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "T-Shirt 9",
    description: "T-Shirt 9 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "T-Shirt",
            gender: Gender.F,
          },
        },
        create: {
          type: "T-Shirt",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=10LWDrlNtvRHVI8CAQyCIYop3Hxk5tkB9",
        colorCode: "d5c5d8",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
              },
            ],
            skipDuplicates: true,
          },
        },
      },
    },
  },
  {
    name: "T-Shirt 10",
    description: "T-Shirt 10 description",
    line: {
      connectOrCreate: {
        where: {
          type_gender: {
            type: "T-Shirt",
            gender: Gender.F,
          },
        },
        create: {
          type: "T-Shirt",
          gender: Gender.F,
        },
      },
    },
    buyPrice: 360,
    productDetail: {
      create: {
        image: "https://drive.google.com/uc?id=1v1ZND4qQgF7hYY_LmHfB_slutT2wCVBa",
        colorCode: "161819",
        productInStock: {
          createMany: {
            data: [
              {
                size: "S",
                quantity: 110,
              },
              {
                size: "M",
                quantity: 120,
              },
              {
                size: "L",
                quantity: 95,
              },
              {
                size: "XL",
                quantity: 90,
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
  console.log(`\tCreated ${succeed} products out of ${entries.length}`);
}
