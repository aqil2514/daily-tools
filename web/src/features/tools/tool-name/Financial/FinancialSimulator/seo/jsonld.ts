import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const financialSimulatorJsonLdSEO: JsonLdSEO = {
  slug: "financial-simulator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Simulate income, expenses, and cashflow scenarios to understand how your financial balance changes over time.",
    id: "Simulasikan pemasukan, pengeluaran, dan arus kas untuk memahami perubahan saldo keuangan dari waktu ke waktu.",
  },
};

export default financialSimulatorJsonLdSEO;
