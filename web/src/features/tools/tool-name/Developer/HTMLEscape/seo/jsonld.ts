import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const htmlEscapeJsonLdSEO: JsonLdSEO = {
  slug: "html-escape",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Escape or unescape HTML characters to safely display text and prevent XSS vulnerabilities.",
    id: "Escape atau unescape karakter HTML untuk menampilkan teks dengan aman dan membantu mencegah celah XSS.",
  },
};

export default htmlEscapeJsonLdSEO;
