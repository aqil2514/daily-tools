import z from "zod";

export const whatsAppMessengerSchema = z.object({
  phone: z.string(),
  username: z.string(),
  message: z.string(),
});

export type WhatsAppMessengerSchemaType = z.infer<typeof whatsAppMessengerSchema>