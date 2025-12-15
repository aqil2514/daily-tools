import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const bmiCalculatorJsonLdSEO: JsonLdSEO = {
  slug: "bmi-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-15",

  searchSnippet: {
    en: "Calculate your Body Mass Index (BMI) easily using your height and weight. Includes BMI categories and health explanations based on WHO standards.",
    id: "Hitung Indeks Massa Tubuh (BMI) dengan mudah menggunakan tinggi dan berat badan. Dilengkapi kategori BMI dan penjelasan kesehatan berdasarkan standar WHO.",
  },
};

export default bmiCalculatorJsonLdSEO;
