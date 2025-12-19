import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const wordCounterJsonLdSEO: JsonLdSEO = {
  slug: "word-counter",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Count words and characters instantly with a free online word counter that works entirely in your browser.",
    id: "Hitung kata dan karakter secara instan dengan word counter online gratis yang berjalan langsung di browser.",
  },
};

export default wordCounterJsonLdSEO;
