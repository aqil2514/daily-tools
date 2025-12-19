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
import percentageCalculatorJsonLdSEO from "../../tool-name/Financial/PercentageCalculator/seo/jsonld";
import percentageCalculatorMetadataSEO from "../../tool-name/Financial/PercentageCalculator/seo/metadata";

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

    seo: {
      metadata: assetAllocationMetadataSEO,
      jsonLd: assetAllocationJsonLdSEO,
    },
  },
  "percentage-calculator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Financial/PercentageCalculator")
    ),

    href: "/tools/percentage-calculator",

    category: "financial",

    title: {
      en: "Percentage Calculator",
      id: "Kalkulator Persentase",
    },

    seo: {
      jsonLd: percentageCalculatorJsonLdSEO,
      metadata: percentageCalculatorMetadataSEO,
    },

    relatedTools: [
      "cogs-margin-tool",
      "financial-simulator",
      // "discount-calculator", // future
    ],
  },
};
