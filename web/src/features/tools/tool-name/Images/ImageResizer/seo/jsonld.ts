import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const imageResizerJsonLdSEO: JsonLdSEO = {
  slug: "image-resizer",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Resize images to exact pixel dimensions quickly and securely in your browser.",
    id: "Ubah ukuran gambar ke dimensi piksel tertentu dengan cepat dan aman langsung di browser.",
  },
};

export default imageResizerJsonLdSEO;
