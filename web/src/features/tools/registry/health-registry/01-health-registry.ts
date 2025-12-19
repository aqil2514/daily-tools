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

    seo: {
      jsonLd: bmiCalculatorJsonLdSEO,
      metadata: bmiCalculatorMetadataSEO,
    },
  },
};
