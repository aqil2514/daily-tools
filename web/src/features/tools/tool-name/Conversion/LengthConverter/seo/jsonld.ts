import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const lengthConverterJsonLdSEO: JsonLdSEO = {
  slug: "length-converter",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-15",

  searchSnippet: {
    en: "Convert length units such as meter, centimeter, kilometer, inch, foot, yard, and mile instantly. Includes explanations and reference tables.",
    id: "Konversi satuan panjang seperti meter, sentimeter, kilometer, inci, kaki, yard, dan mil secara instan. Dilengkapi penjelasan dan tabel referensi.",
  },
};

export default lengthConverterJsonLdSEO;
