import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const passwordGeneratorJsonLdSEO: JsonLdSEO = {
  slug: "password-generator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Generate strong and random passwords in your browser. No data is stored or sent to any server.",
    id: "Buat password kuat dan acak langsung di browser tanpa menyimpan atau mengirim data ke server.",
  },
};

export default passwordGeneratorJsonLdSEO;
