import { FinancialToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const financialRegistry01: Partial<Record<FinancialToolName, ToolRegistryItem>> = {
  "cash-counter": {
    Component: dynamic(() => import("@/features/tools/tool-name/Financial/CashCounter")),
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
    Component: dynamic(() => import("@/features/tools/tool-name/Financial/COGSMargin")),
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
  "product-hpp-calculator": {
  Component: dynamic(() =>
    import("@/features/tools/tool-name/Financial/ProductHPP")
  ),
  href: "/tools/product-hpp-calculator",
  category: "financial",

  title: {
    en: "Product HPP Calculator",
    id: "Kalkulator HPP Produk",
  },

  description: {
    en: "Calculate product cost of goods sold (COGS) based on materials, packaging, labor, and overhead. Ideal for SMEs, food businesses, and handmade creators.",
    id: "Hitung HPP suatu produk berdasarkan bahan baku, kemasan, tenaga kerja, dan biaya overhead. Cocok untuk UMKM, bisnis makanan, dan produk handmade.",
  },

  keywords: {
    en: [
      "product hpp calculator",
      "cogs calculator",
      "product cost calculator",
      "cost of goods sold tool",
      "calculate production cost",
      "pricing calculator",
      "food cost calculator",
      "handmade cost calculator",
    ],
    id: [
      "kalkulator HPP produk",
      "kalkulator modal usaha",
      "hitung HPP makanan",
      "hitung biaya produksi",
      "kalkulator harga pokok produksi",
      "kalkulator modal produk handmade",
      "harga pokok penjualan",
      "kalkulator biaya bahan baku",
    ],
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