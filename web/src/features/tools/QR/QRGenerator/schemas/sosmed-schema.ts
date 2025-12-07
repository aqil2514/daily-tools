import z from "zod";

export const sosmedSchema = z.object({
  username: z.string().min(1),
});

export type SosmedSchemaType = z.infer<typeof sosmedSchema>