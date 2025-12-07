import z from "zod";

export const urlSchema = z.object({
  url: z.url().min(1),
});

export type URLSchemaType = z.infer<typeof urlSchema>;