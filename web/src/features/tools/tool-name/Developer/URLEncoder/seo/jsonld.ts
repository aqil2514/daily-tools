import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const urlEncoderJsonLdSEO: JsonLdSEO = {
  slug: "url-encoder",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Encode or decode URLs using percent-encoding for web development, APIs, and debugging query strings.",
    id: "Encode atau decode URL dengan percent-encoding untuk pengembangan web, API, dan debugging query string.",
  },
};

export default urlEncoderJsonLdSEO;
