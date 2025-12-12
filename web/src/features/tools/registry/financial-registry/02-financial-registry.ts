import { FinancialToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import investmentReturnMetadataSEO from "../../tool-name/Financial/InvestmentReturnCalculator/seo/metadata";
import investmentReturnJsonLdSEO from "../../tool-name/Financial/InvestmentReturnCalculator/seo/jsonld";

export const financialRegistry02: Partial<
  Record<FinancialToolName, ToolRegistryItem>
> = {
  "investment-return-calculator": {
    Component: dynamic(
      () =>
        import(
          "@/features/tools/tool-name/Financial/InvestmentReturnCalculator"
        )
    ),

    href: "/tools/investment-return-calculator",
    category: "financial",

    title: {
      en: "Investment Return Calculator (CAGR)",
      id: "Kalkulator Return Investasi (CAGR)",
    },

    description: {
      en: "Calculate your investment's annual growth rate using the CAGR formula. Understand how fast your investment grows based on initial value, final value, and duration.",
      id: "Hitung tingkat pertumbuhan tahunan investasi Anda menggunakan rumus CAGR. Ketahui seberapa cepat investasi Anda berkembang berdasarkan nilai awal, nilai akhir, dan durasinya.",
    },

    keywords: {
      en: [
        "cagr calculator",
        "investment return calculator",
        "annual growth rate",
        "compound annual growth rate",
        "investment calculator",
        "roi calculator",
        "growth rate calculator",
      ],
      id: [
        "kalkulator cagr",
        "kalkulator return investasi",
        "pertumbuhan tahunan investasi",
        "compound annual growth rate",
        "kalkulator investasi",
        "kalkulator roi",
        "kalkulator tingkat pertumbuhan",
      ],
    },

    seo: {
      metadata: investmentReturnMetadataSEO,
      jsonLd: investmentReturnJsonLdSEO,
    },
  },
};
