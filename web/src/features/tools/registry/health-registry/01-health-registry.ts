import { ToolRegistryItem } from "@/@types/Tools";
import { HealthToolName } from "@/@types/tools/health";
import dynamic from "next/dynamic";
import bmiCalculatorJsonLdSEO from "../../tool-name/Health/BMICalculator/seo/jsonld";
import bmiCalculatorMetadataSEO from "../../tool-name/Health/BMICalculator/seo/metadata";

export const healthRegistry01: Record<HealthToolName, ToolRegistryItem> = {
  "bmi-calculator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Health/BMICalculator")
    ),

    href: "/tools/bmi-calculator",

    category: "health",

    title: {
      en: "BMI Calculator",
      id: "Kalkulator BMI",
    },

    description: {
      en: "Calculate your Body Mass Index (BMI) based on your height and weight. Includes BMI categories and health insights for general awareness.",
      id: "Hitung Body Mass Index (BMI) berdasarkan tinggi dan berat badan Anda. Dilengkapi kategori BMI dan wawasan kesehatan untuk pemahaman umum.",
    },

    keywords: {
      en: [
        "bmi calculator",
        "body mass index",
        "bmi chart",
        "bmi categories",
        "healthy weight bmi",
        "calculate bmi online",
      ],
      id: [
        "kalkulator bmi",
        "indeks massa tubuh",
        "tabel bmi",
        "kategori bmi",
        "berat badan ideal bmi",
        "hitung bmi online",
      ],
    },

    seo: {
      jsonLd: bmiCalculatorJsonLdSEO,
      metadata: bmiCalculatorMetadataSEO,
    },
  },
};
