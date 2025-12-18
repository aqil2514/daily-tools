import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const pdfMergeJsonLdSEO: JsonLdSEO = {
  slug: "pdf-merge",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Merge multiple PDF files into one document without uploading files to a server.",
    id: "Gabungkan beberapa file PDF menjadi satu dokumen tanpa mengunggah file ke server.",
  },
};

export default pdfMergeJsonLdSEO;
