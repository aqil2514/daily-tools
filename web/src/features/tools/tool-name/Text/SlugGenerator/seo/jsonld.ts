import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const slugGeneratorJsonLdSEO: JsonLdSEO = {
  slug: "slug-generator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Generate clean, SEO-friendly URL slugs from any text instantly with full privacy.",
    id: "Buat slug URL yang bersih dan ramah SEO dari teks apa pun secara instan dengan privasi penuh.",
  },
};

export default slugGeneratorJsonLdSEO;
