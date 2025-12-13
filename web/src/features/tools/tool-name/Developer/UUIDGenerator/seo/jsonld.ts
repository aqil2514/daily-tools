import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const uuidGeneratorJsonLdSEO: JsonLdSEO = {
  slug: "uuid-generator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Generate UUID v1, v4, and v7 instantly in your browser for databases, testing, and unique identifiers.",
    id: "Buat UUID v1, v4, dan v7 langsung di browser untuk database, testing, dan ID unik.",
  },
};

export default uuidGeneratorJsonLdSEO;
