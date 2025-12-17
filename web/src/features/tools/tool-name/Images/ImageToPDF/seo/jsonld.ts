import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const imageToPdfJsonLdSEO: JsonLdSEO = {
  slug: "image-to-pdf",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Convert images into a single PDF file quickly and securely without uploading files to a server.",
    id: "Konversi gambar menjadi satu file PDF dengan cepat dan aman tanpa mengunggah file ke server.",
  },
};

export default imageToPdfJsonLdSEO;
