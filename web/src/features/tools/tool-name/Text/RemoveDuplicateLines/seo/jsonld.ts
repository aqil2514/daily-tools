import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const removeDuplicateLinesJsonLdSEO: JsonLdSEO = {
  slug: "remove-duplicate-lines",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Remove duplicate lines from text instantly and keep only unique lines with full privacy.",
    id: "Hapus baris duplikat dari teks secara instan dan sisakan baris unik dengan privasi penuh.",
  },
};

export default removeDuplicateLinesJsonLdSEO;
