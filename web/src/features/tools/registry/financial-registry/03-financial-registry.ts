import { ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";


import { FinancialToolName } from "@/@types/tools/financial";
import compoundInterestMetadataSEO from "../../tool-name/Financial/CompoundInterestCalculator/seo/metadata";
import compoundInterestJsonLdSEO from "../../tool-name/Financial/CompoundInterestCalculator/seo/jsonld";

export const financialRegistry03: Partial<
  Record<FinancialToolName, ToolRegistryItem>
> = {
  "compound-interest-calculator": {
    Component: dynamic(
      () =>
        import(
          "@/features/tools/tool-name/Financial/CompoundInterestCalculator"
        )
    ),

    href: "/tools/compound-interest-calculator",
    category: "financial",

    title: {
      en: "Compound Interest Calculator",
      id: "Kalkulator Bunga Majemuk",
    },

    relatedTools: [
      "investment-return-calculator",
      "savings-goal-calculator",
      "retirement-savings-estimator",
      "asset-allocation-calculator",
    ],

    seo: {
      metadata: compoundInterestMetadataSEO,
      jsonLd: compoundInterestJsonLdSEO,
    },
  },
};
