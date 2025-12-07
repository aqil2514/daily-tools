import { z } from "zod";

// ==========================
// EMAIL SCHEMA
// ==========================
const emailSchema = z.object({
  mode: z.literal("email"),
  email: z.email("Email tidak valid"),
  subject: z.string().optional(),
  body: z.string().optional(),
});

// ==========================
// SMS SCHEMA
// ==========================
const smsSchema = z.object({
  mode: z.literal("sms"),
  phone: z.string().min(1, "Nomor telepon wajib diisi"),
  body: z.string().optional(),
});

// ==========================
// FINAL UNION SCHEMA
// ==========================
export const emailSmsSchema = z.discriminatedUnion("mode", [
  emailSchema,
  smsSchema,
]);

export type EmailSmsSchemaType = z.infer<typeof emailSmsSchema>;
