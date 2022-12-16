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
