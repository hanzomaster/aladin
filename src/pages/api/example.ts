import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { env } from "../../env/server.mjs";
import { createProductSchema, updateProductSchema } from "../../server/trpc/router/dto";

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
const example = async (req: NextApiRequest, res: NextApiResponse) => {
  const test = env.ADMIN_EMAILS.split(",");
  res.json(test);
};
export default example;
