// src/features/tools/registry/financialRegistry.ts

import dynamic from "next/dynamic";
import { FinancialToolName, ToolRegistryItem } from "@/@types/Tools"; // Asumsi path

export const financialRegistry: Record<FinancialToolName, ToolRegistryItem> = {
  "cash-counter": {
    Component: dynamic(() => import("@/features/tools/Financial/CashCounter")),
    href: "/tools/cash-counter",
    category: "financial",

    // --- Lokalisasi Langsung ---
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
};

export const financialToolNames = Object.keys(
  financialRegistry
) as FinancialToolName[];
