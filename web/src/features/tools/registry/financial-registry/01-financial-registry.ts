import { ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import loanCalculatorJsonLdSEO from "../../tool-name/Financial/LoanCalculator/seo/jsonld";
import loanCalculatorMetadataSEO from "../../tool-name/Financial/LoanCalculator/seo/metadata";
import cashCounterJsonLdSEO from "../../tool-name/Financial/CashCounter/seo/jsonld";
import cashCounterMetadataSEO from "../../tool-name/Financial/CashCounter/seo/metadata";
import cogsMarginJsonLdSEO from "../../tool-name/Financial/COGSMargin/seo/jsonld";
import cogsMarginMetadataSEO from "../../tool-name/Financial/COGSMargin/seo/metadata";
import productHPPMetadataSEO from "../../tool-name/Financial/ProductHPP/seo/metadata";
import productHPPJsonLdSEO from "../../tool-name/Financial/ProductHPP/seo/jsonld";
import financialSimulatorMetadataSEO from "../../tool-name/Financial/FinancialSimulator/seo/metadata";
import financialSimulatorJsonLdSEO from "../../tool-name/Financial/FinancialSimulator/seo/jsonld";
import { FinancialToolName } from "@/@types/tools/financial";

export const financialRegistry01: Partial<
  Record<FinancialToolName, ToolRegistryItem>
> = {
  "cash-counter": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Financial/CashCounter")
    ),
    href: "/tools/cash-counter",
    category: "financial",

    title: {
      en: "Cash Counter",
      id: "Penghitung Uang Tunai",
    },

    seo: {
      jsonLd: cashCounterJsonLdSEO,
      metadata: cashCounterMetadataSEO,
    },

    relatedTools: [
      "financial-simulator",
      "loan-calculator",
      "product-hpp-calculator",
    ],
  },
  "cogs-margin-tool": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Financial/COGSMargin")
    ),
    href: "/tools/cogs-margin-tool",
    category: "financial",

    title: {
      en: "COGS Calculator",
      id: "Profit Margin Kalkulator",
    },

    relatedTools: [
      "product-hpp-calculator",
      "cash-counter",
      "financial-simulator",
    ],

    seo: {
      jsonLd: cogsMarginJsonLdSEO,
      metadata: cogsMarginMetadataSEO,
    },
  },
  "product-hpp-calculator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Financial/ProductHPP")
    ),
    href: "/tools/product-hpp-calculator",
    category: "financial",

    title: {
      en: "Product HPP Calculator",
      id: "Kalkulator HPP Produk",
    },

    relatedTools: [
      "cogs-margin-tool",
      "financial-simulator",
      "loan-calculator",
    ],

    seo: {
      metadata: productHPPMetadataSEO,
      jsonLd: productHPPJsonLdSEO,
    },
  },
  "financial-simulator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Financial/FinancialSimulator")
    ),
    href: "/tools/financial-simulator",
    category: "financial",

    title: {
      en: "Financial Simulator",
      id: "Simulasi Keuangan",
    },

    relatedTools: [
      "product-hpp-calculator",
      "loan-calculator",
      "cogs-margin-tool",
    ],

    seo: {
      metadata: financialSimulatorMetadataSEO,
      jsonLd: financialSimulatorJsonLdSEO,
    },
  },
  "loan-calculator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Financial/LoanCalculator")
    ),
    href: "/tools/loan-calculator",
    category: "financial",

    title: {
      en: "Loan Calculator",
      id: "Kalkulator Pinjaman",
    },

    relatedTools: [
      "financial-simulator",
      "case-converter",
      "product-hpp-calculator",
    ],

    seo: {
      jsonLd: loanCalculatorJsonLdSEO,
      metadata: loanCalculatorMetadataSEO,
    },
  },
};
