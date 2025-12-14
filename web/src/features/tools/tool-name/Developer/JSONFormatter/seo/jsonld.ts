import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const jsonFormatterJsonLdSEO: JsonLdSEO = {
  slug: "json-formatter",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Format, validate, and minify JSON to improve readability and quickly detect syntax errors.",
    id: "Format, validasi, dan minify JSON untuk merapikan struktur dan mendeteksi error dengan cepat.",
  },
};

export default jsonFormatterJsonLdSEO;
