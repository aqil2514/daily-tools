import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const caseConverterJsonLdSEO: JsonLdSEO = {
  slug: "case-converter",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Convert text to uppercase, lowercase, Title Case, or Sentence case instantly with full privacy.",
    id: "Ubah format huruf teks ke huruf besar, kecil, Judul Kapital, atau Kalimat Kapital secara instan dengan privasi penuh.",
  },
};

export default caseConverterJsonLdSEO;
