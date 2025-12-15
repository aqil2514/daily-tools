import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const temperatureConverterJsonLdSEO: JsonLdSEO = {
  slug: "temperature-converter",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-15",

  searchSnippet: {
    en: "Convert temperatures between Celsius, Fahrenheit, and Kelvin instantly. Includes formulas, examples, and reference tables.",
    id: "Konversi suhu antara Celsius, Fahrenheit, dan Kelvin secara instan. Dilengkapi rumus, contoh, dan tabel referensi.",
  },
};

export default temperatureConverterJsonLdSEO;
