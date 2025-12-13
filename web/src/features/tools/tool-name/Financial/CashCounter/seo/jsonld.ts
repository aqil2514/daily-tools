import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const cashCounterJsonLdSEO: JsonLdSEO = {
  slug: "cash-counter",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Calculate total cash instantly by entering denominations. Ideal for daily cash closing and reconciliation.",
    id: "Hitung total uang tunai secara instan berdasarkan denominasi. Cocok untuk tutup kas dan rekonsiliasi harian.",
  },
};

export default cashCounterJsonLdSEO;
