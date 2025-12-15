import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const percentageCalculatorJsonLdSEO: JsonLdSEO = {
  slug: "percentage-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-15",

  searchSnippet: {
    en: "Calculate percentages easily, including percentage of a value, increase, decrease, and percentage difference. Suitable for business and education.",
    id: "Hitung persentase dengan mudah, termasuk persentase dari nilai, kenaikan, penurunan, dan selisih persentase. Cocok untuk bisnis dan pendidikan.",
  },
};

export default percentageCalculatorJsonLdSEO;
