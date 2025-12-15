import dynamic from "next/dynamic";
import { ToolRegistryItem } from "@/@types/Tools";

import { UtilityToolName } from "@/@types/tools/utility";
import ageCalculatorJsonLdSEO from "../../tool-name/Utility/AgeCalculator/seo/jsonld";
import ageCalculatorMetadataSEO from "../../tool-name/Utility/AgeCalculator/seo/metadata";

export const utilityRegistry01: Partial<
  Record<UtilityToolName, ToolRegistryItem>
> = {
  "age-calculator": {
    Component: dynamic(
      () =>
        import(
          "@/features/tools/tool-name/Utility/AgeCalculator"
        )
    ),
    href: "/tools/age-calculator",
    category: "utility",

    title: {
      en: "Age Calculator",
      id: "Kalkulator Usia",
    },

    description: {
      en: "Calculate your exact age in years, months, and days instantly based on your date of birth.",
      id: "Hitung usia Anda secara akurat dalam tahun, bulan, dan hari berdasarkan tanggal lahir.",
    },

    keywords: {
      en: [
        "age calculator",
        "calculate age",
        "how old am i",
        "date of birth calculator",
        "age in years months days",
        "birthday calculator",
      ],
      id: [
        "kalkulator usia",
        "hitung umur",
        "umur saya",
        "kalkulator tanggal lahir",
        "usia tahun bulan hari",
        "kalkulator ulang tahun",
      ],
    },

    // relatedTools: ["date-difference", "countdown-timer"],

    seo: {
      jsonLd: ageCalculatorJsonLdSEO,
      metadata: ageCalculatorMetadataSEO,
    },
  },
};
