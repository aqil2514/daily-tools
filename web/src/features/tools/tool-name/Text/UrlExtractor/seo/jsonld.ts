import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const urlExtractorJsonLdSEO: JsonLdSEO = {
  slug: "url-extractor",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Extract all URLs from text instantly with a free online URL extractor that runs entirely in your browser.",
    id: "Ekstrak semua URL dari teks secara instan dengan URL extractor online gratis yang berjalan langsung di browser.",
  },
};

export default urlExtractorJsonLdSEO;
