import { z } from "zod";

export const vcardSchema = z.object({
  firstName: z.string().min(1, "First name wajib diisi"),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  email: z.email("Email tidak valid").optional(),
  website: z.url("URL tidak valid").optional(),
  organization: z.string().optional(),
  title: z.string().optional(),
  address: z.string().optional(),
});

export type VCardSchemaType = z.infer<typeof vcardSchema>;
