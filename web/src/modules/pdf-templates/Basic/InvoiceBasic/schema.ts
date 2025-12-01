import { identitySchema } from "../../_shared/schema/identity";
import { documentMetaSchema } from "../../_shared/schema/document-meta";
import { itemSchema } from "../../_shared/schema/items";
import { notesSchema } from "../../_shared/schema/notes";
import z from "zod";

export const invoiceBasicSchema = z.object({
  from: identitySchema,

  to: identitySchema,

  header: documentMetaSchema,

  items: z.array(itemSchema).min(1, "At least one item is required."),

  notes: notesSchema,

  terms: z.object({
    terms: z.string(),
    dueDate: z.string(),
  }),

  currency: z.enum(["USD", "IDR", "EUR", "JPY", "GBP"]),
  tax: z.number(),
});

export type InvoiceBasicSchemaType = z.infer<typeof invoiceBasicSchema>;

export const invoiceBasicSchemaDefault: InvoiceBasicSchemaType = {
  from: {
    name: "Company Name",
    email: "company@example.com",
    address1: "Street Address Line 1",
    address2: "City, Country",
  },

  to: {
    name: "Client Name",
    email: "client@example.com",
    address1: "Client Address Line 1",
    address2: "City, Country",
  },

  header: {
    date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
    documentNumber: "INV-0001",
  },

  items: [
    {
      description: "Product / Service description",
      quantity: 1,
      price: 100,
    },
  ],

  notes: "Enter additional notes or special considerations here.",

  terms: {
    terms: "Payment due within 7 days.",
    dueDate: new Date().toISOString().slice(0, 10),
  },

  currency: "IDR",
  tax: 0,
};
