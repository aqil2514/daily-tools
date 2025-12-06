import dynamic from "next/dynamic";
import { FinancialToolName, ToolRegistryItem } from "@/@types/Tools"; // Asumsi path

export const financialRegistry: Record<FinancialToolName, ToolRegistryItem> = {
  "cash-counter": {
    Component: dynamic(() => import("@/features/tools/Financial/CashCounter")),
    href: "/tools/cash-counter",
    category: "financial",

    title: {
      en: "Cash Counter",
      id: "Penghitung Uang Tunai",
    },
    description: {
      en: "Quickly calculate cash totals, verify denominations, and check for discrepancies in your daily balance.",
      id: "Hitung total uang tunai dengan cepat, verifikasi denominasi, dan periksa adanya selisih dalam saldo harian Anda.",
    },
    keywords: {
      en: [
        "cash counter",
        "cash calculator",
        "cash reconciliation",
        "count money",
        "denomination calculator",
      ],
      id: [
        "penghitung uang tunai",
        "kalkulator uang tunai",
        "rekonsiliasi uang tunai",
        "hitung uang",
        "kalkulator denominasi",
      ],
    },
  },
  "cogs-margin-tool": {
    Component: dynamic(() => import("@/features/tools/Financial/COGSMargin")),
    href: "/tools/cogs-margin-tool",
    category: "financial",

    title: {
      en: "COGS Calculator",
      id: "Profit Margin Kalkulator",
    },
    description: {
      en: "Calculate your Cost of Goods Sold (COGS) and determine your Gross Profit Margin and Markup percentage for pricing strategy.",
      id: "Hitung Harga Pokok Penjualan (HPP) Anda dan tentukan Margin Keuntungan Kotor serta persentase Markup untuk strategi penetapan harga.",
    },
    keywords: {
      en: [
        "cogs calculator",
        "profit margin",
        "gross margin",
        "markup calculator",
        "pricing strategy",
        "cost of goods sold",
      ],
      id: [
        "kalkulator hpp",
        "margin keuntungan",
        "margin kotor",
        "kalkulator markup",
        "strategi harga",
        "harga pokok penjualan",
      ],
    },
  },
  "financial-simulator": {
    Component: dynamic(
      () => import("@/features/tools/Financial/FinancialSimulator")
    ),
    href: "/tools/financial-simulator",
    category: "financial",

    title: {
      en: "Financial Simulator",
      id: "Simulasi Keuangan",
    },
    description: {
      en: "Simulate income, expenses, and financial scenarios starting from an initial balance. Track how money grows or decreases over time based on your actions.",
      id: "Simulasikan pemasukan, pengeluaran, dan berbagai skenario keuangan mulai dari saldo awal. Lihat bagaimana uang bertambah atau berkurang seiring aktivitas yang Anda lakukan.",
    },
    keywords: {
      en: [
        "financial simulator",
        "money simulation",
        "income tracker",
        "expense simulator",
        "budget planning",
        "financial tool",
        "money management",
      ],
      id: [
        "simulasi keuangan",
        "simulator uang",
        "pelacak pemasukan",
        "simulasi pengeluaran",
        "perencanaan anggaran",
        "alat keuangan",
        "manajemen uang",
      ],
    },
  },
};

export const financialToolNames = Object.keys(
  financialRegistry
) as FinancialToolName[];
