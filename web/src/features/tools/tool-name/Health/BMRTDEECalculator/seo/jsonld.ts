import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const bmrTdeeCalculatorJsonLdSEO: JsonLdSEO = {
  slug: "bmr-tdee-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-15",

  searchSnippet: {
    en: "Calculate your daily calorie needs using a BMR and TDEE calculator. Estimate maintenance, weight loss, or weight gain calories based on activity level.",
    id: "Hitung kebutuhan kalori harian Anda menggunakan kalkulator BMR dan TDEE. Estimasi kalori untuk menjaga, menurunkan, atau menaikkan berat badan berdasarkan aktivitas.",
  },
};

export default bmrTdeeCalculatorJsonLdSEO;
