import { ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import investmentReturnMetadataSEO from "../../tool-name/Financial/InvestmentReturnCalculator/seo/metadata";
import investmentReturnJsonLdSEO from "../../tool-name/Financial/InvestmentReturnCalculator/seo/jsonld";
import savingsGoalMetadataSEO from "../../tool-name/Financial/SavingsGoalCalculator/seo/metadata";
import savingsGoalJsonLdSEO from "../../tool-name/Financial/SavingsGoalCalculator/seo/jsonld";
import retirementSavingsMetadataSEO from "../../tool-name/Financial/RetirementSavingsEstimator/seo/metadata";
import retirementSavingsJsonLdSEO from "../../tool-name/Financial/RetirementSavingsEstimator/seo/jsonld";
import assetAllocationMetadataSEO from "../../tool-name/Financial/AssetAllocationCalculator/seo/metadata";
import assetAllocationJsonLdSEO from "../../tool-name/Financial/AssetAllocationCalculator/seo/jsonld";
import { FinancialToolName } from "@/@types/tools/financial";

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

    relatedTools: [
      "savings-goal-calculator",
      "retirement-savings-estimator",
      "asset-allocation-calculator",
    ],

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

    relatedTools: [
      "investment-return-calculator",
      "financial-simulator",
      "loan-calculator",
    ],

    seo: {
      jsonLd: savingsGoalJsonLdSEO,
      metadata: savingsGoalMetadataSEO,
    },
  },
  "retirement-savings-estimator": {
    Component: dynamic(
      () =>
        import(
          "@/features/tools/tool-name/Financial/RetirementSavingsEstimator"
        )
    ),

    href: "/tools/retirement-savings-estimator",
    category: "financial",

    relatedTools: [
      "savings-goal-calculator",
      "investment-return-calculator",
      "financial-simulator",
    ],

    title: {
      en: "Retirement Savings Estimator",
      id: "Estimator Tabungan Pensiun",
    },

    description: {
      en: "Estimate how much you need to save each month to reach your retirement goal based on your current age, target retirement age, existing savings, and expected annual return.",
      id: "Perkirakan berapa yang perlu Anda tabung setiap bulan untuk mencapai dana pensiun berdasarkan usia saat ini, target usia pensiun, tabungan yang sudah ada, dan estimasi return tahunan.",
    },

    keywords: {
      en: [
        "retirement savings estimator",
        "retirement calculator",
        "pension savings calculator",
        "retirement planning",
        "monthly retirement savings",
        "future retirement fund",
      ],
      id: [
        "kalkulator tabungan pensiun",
        "estimator dana pensiun",
        "perencanaan pensiun",
        "kalkulator pensiun",
        "tabungan pensiun bulanan",
        "target dana pensiun",
      ],
    },

    seo: {
      metadata: retirementSavingsMetadataSEO,
      jsonLd: retirementSavingsJsonLdSEO,
    },
  },
  "asset-allocation-calculator": {
    Component: dynamic(
      () =>
        import("@/features/tools/tool-name/Financial/AssetAllocationCalculator")
    ),

    href: "/tools/asset-allocation-calculator",
    category: "financial",

    relatedTools: [
      "investment-return-calculator",
      "savings-goal-calculator",
      "financial-simulator",
    ],

    title: {
      en: "Asset Allocation Calculator",
      id: "Kalkulator Alokasi Aset",
    },

    description: {
      en: "Visualize how your assets are distributed across categories and see their percentage composition based on your inputs.",
      id: "Visualisasikan pembagian aset Anda ke dalam berbagai kategori dan lihat komposisi persentasenya berdasarkan data yang Anda masukkan.",
    },

    keywords: {
      en: [
        "asset allocation calculator",
        "portfolio allocation",
        "asset distribution",
        "financial overview",
        "portfolio percentage",
      ],
      id: [
        "kalkulator alokasi aset",
        "pembagian aset",
        "komposisi aset",
        "ringkasan keuangan",
        "persentase aset",
      ],
    },

    seo: {
      metadata: assetAllocationMetadataSEO,
      jsonLd: assetAllocationJsonLdSEO,
    },
  },
};
