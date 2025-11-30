import { z } from "zod";

export const identitySchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().min(1, "Required"),
  address1: z.string().min(1, "Required"),
  address2: z.string().min(1, "Required"),
});
