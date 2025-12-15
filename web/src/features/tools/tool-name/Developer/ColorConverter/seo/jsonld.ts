import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const colorConverterJsonLdSEO: JsonLdSEO = {
  slug: "color-converter",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-15",

  searchSnippet: {
    en: "Convert colors between HEX, RGB, and HSL instantly. Includes color picker, live preview, and copy-ready outputs for developers.",
    id: "Konversi warna antara HEX, RGB, dan HSL secara instan. Dilengkapi color picker, pratinjau warna, dan hasil siap salin.",
  },
};

export default colorConverterJsonLdSEO;
