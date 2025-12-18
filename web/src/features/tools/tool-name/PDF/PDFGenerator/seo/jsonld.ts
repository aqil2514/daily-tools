import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const pdfGeneratorJsonLdSEO: JsonLdSEO = {
  slug: "pdf-generator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Generate invoices, certificates, and structured PDF documents instantly without uploading data to a server.",
    id: "Buat faktur, sertifikat, dan dokumen PDF terstruktur secara instan tanpa mengunggah data ke server.",
  },
};

export default pdfGeneratorJsonLdSEO;
