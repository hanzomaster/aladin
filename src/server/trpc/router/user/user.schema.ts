import { number, object, string, TypeOf } from "zod"

export const params = object({
  id: string().length(25),
});

export const updateUserSchema = object({
  params,
  body: object({
    name: string(),
    image: string(),
    phone: string().max(50),
  }).partial(),
});

export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10),
});

export type FilterQuery = TypeOf<typeof filterQuery>;
export type UpdateUserSchema = TypeOf<typeof updateUserSchema>["body"];
export type ParamsInput = TypeOf<typeof params>;
