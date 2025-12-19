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
      () => import("@/features/tools/tool-name/Utility/AgeCalculator")
    ),
    href: "/tools/age-calculator",
    category: "utility",

    title: {
      en: "Age Calculator",
      id: "Kalkulator Usia",
    },

    // relatedTools: ["date-difference", "countdown-timer"],

    seo: {
      jsonLd: ageCalculatorJsonLdSEO,
      metadata: ageCalculatorMetadataSEO,
    },
  },
};
