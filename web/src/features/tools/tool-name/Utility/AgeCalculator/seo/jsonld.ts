import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const ageCalculatorJsonLdSEO: JsonLdSEO = {
  slug: "age-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-15",

  searchSnippet: {
    en: "Calculate your exact age in years, months, and days instantly. Includes next birthday and total days alive calculation.",
    id: "Hitung usia Anda secara akurat dalam tahun, bulan, dan hari. Dilengkapi info ulang tahun berikutnya dan total hari hidup.",
  },
};

export default ageCalculatorJsonLdSEO;
