import { FinancialToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import investmentReturnMetadataSEO from "../../tool-name/Financial/InvestmentReturnCalculator/seo/metadata";
import investmentReturnJsonLdSEO from "../../tool-name/Financial/InvestmentReturnCalculator/seo/jsonld";
import savingsGoalMetadataSEO from "../../tool-name/Financial/SavingsGoalCalculator/seo/metadata";
import savingsGoalJsonLdSEO from "../../tool-name/Financial/SavingsGoalCalculator/seo/jsonld";

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
  "savings-goal-calculator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Financial/SavingsGoalCalculator")
    ),

    href: "/tools/savings-goal-calculator",
    category: "financial",

    relatedTools: [
      "investment-return-calculator",
      "financial-simulator",
      "loan-calculator",
    ],

    title: {
      en: "Savings Goal Calculator",
      id: "Kalkulator Tujuan Tabungan",
    },

    description: {
      en: "Calculate how much you need to save each month to reach your financial goal. Supports optional interest growth for more accurate planning.",
      id: "Hitung berapa yang perlu Anda tabung setiap bulan untuk mencapai tujuan keuangan Anda. Mendukung perhitungan bunga opsional untuk perencanaan yang lebih akurat.",
    },

    keywords: {
      en: [
        "savings goal calculator",
        "monthly savings calculator",
        "financial planning",
        "saving calculator",
        "goal calculator",
        "compound savings calculator",
        "future value calculator",
      ],
      id: [
        "kalkulator tujuan tabungan",
        "kalkulator tabungan bulanan",
        "perencanaan keuangan",
        "kalkulator menabung",
        "kalkulator target tabungan",
        "kalkulator tabungan majemuk",
        "kalkulator nilai masa depan",
      ],
    },

    seo: {
      jsonLd: savingsGoalJsonLdSEO,
      metadata: savingsGoalMetadataSEO,
    },
  },
};
