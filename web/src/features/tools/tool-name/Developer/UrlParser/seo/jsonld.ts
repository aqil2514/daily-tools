import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const urlParserJsonLdSEO: JsonLdSEO = {
  slug: "url-parser",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Parse a URL into components, query parameters, and fragments to better understand URL structure.",
    id: "Uraikan URL menjadi komponen, parameter query, dan fragmen untuk memahami struktur URL.",
  },
};

export default urlParserJsonLdSEO;
