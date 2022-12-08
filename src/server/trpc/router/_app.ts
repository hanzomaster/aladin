// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { cartItemRouter } from "./carItem";
import { cartRouter } from "./cart";
import { exampleRouter } from "./example";
import { orderRouter } from "./order";
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
  cart: cartRouter,
  cartItem: cartItemRouter,
  order: orderRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
