import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const imageConverterJsonLdSEO: JsonLdSEO = {
  slug: "image-converter",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Convert images between JPG, PNG, WebP, AVIF, and other formats instantly without uploading files to a server.",
    id: "Konversi gambar antara JPG, PNG, WebP, AVIF, dan format lain secara instan tanpa mengunggah file ke server.",
  },
};

export default imageConverterJsonLdSEO;
