import z from "zod";

export const itemSchema = z.object({
  description: z.string(),
  quantity: z.number(),
  price: z.number(),
});
