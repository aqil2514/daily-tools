import z from "zod";

export const documentMetaSchema = z.object({
  date: z.string(),
  documentNumber: z.string(),
});
