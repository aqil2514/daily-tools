import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const pdfSplitJsonLdSEO: JsonLdSEO = {
  slug: "pdf-split",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Split PDF documents into separate pages or files without uploading your PDFs to a server.",
    id: "Pisahkan dokumen PDF menjadi halaman atau file terpisah tanpa mengunggah PDF ke server.",
  },
};

export default pdfSplitJsonLdSEO;
