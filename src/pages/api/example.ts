import { TRPCError } from "@trpc/server";
import { getHTTPStatusCodeFromError } from "@trpc/server/http";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { createContext } from "../../server/trpc/context";
import { createProductSchema, updateProductSchema } from "../../server/trpc/router/dto";
import { appRouter } from "../../server/trpc/router/_app";

interface CreateNextApiRequest extends NextApiRequest {
  body: z.infer<typeof createProductSchema>;
}

interface UpdateNextApiRequest extends NextApiRequest {
  body: {
    code: string;
    dto: z.infer<typeof updateProductSchema>;
  };
}

interface DeleteNextApiRequest extends NextApiRequest {
  query: {
    code: string;
  };
}
const example = async (req: UpdateNextApiRequest, res: NextApiResponse) => {
  const ctx = await createContext({ req, res });
  const caller = appRouter.createCaller(ctx);

  try {
    const result = await caller.product.update(req.body);
    const data = await caller.product.getAll();
    res.status(200).json(data);
  } catch (cause) {
    if (cause instanceof TRPCError) {
      // An error from tRPC occured
      const httpCode = getHTTPStatusCodeFromError(cause);
      return res.status(httpCode).json(cause);
    }
    // Another error occured
    console.error(cause);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default example;
