import { object, string } from "zod"

export const params = object({
  code: string().length(25),
});

export const createProductSchema = object({
  params,
  body: object({
    name: string().max(50),
    image: string(),
    price: string().max(50),
  }).partial(),
});
