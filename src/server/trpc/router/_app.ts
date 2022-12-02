// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { productRouter } from "./product";
import { productDetailRouter } from "./productDetail";
import { productLineRouter } from "./productLine";
import { userRouter } from "./user";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  user: userRouter,
  product: productRouter,
  productLine: productLineRouter,
  productDetail: productDetailRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
