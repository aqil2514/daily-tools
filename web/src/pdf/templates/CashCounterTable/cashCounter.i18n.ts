import { Denomination } from "@/features/tools/tool-name/Financial/CashCounter/types/interface";

export type Locale = "en" | "id";

export const CASH_COUNTER_I18N = {
  en: {
    intro:
      "The table below shows a detailed breakdown of the total cash calculated based on each denomination and grouped by type.",
    denomination: "Denomination",
    quantity: "Qty",
    subtotal: "Subtotal",
    total: "Grand Total",
    note: "This document is generated automatically by Flowtooly. Please verify all cash amounts before final use.",
    typeLabel: {
      coin: "Coins",
      sheet: "Banknotes",
      other: "Other",
    } satisfies Record<Denomination["type"], string>,
    summaryTitle: "Summary",
    cashInData: "Cash In Data",
    receivables: "Receivables",
    otherPeopleCash: "Other People's Cash",
    finalDifference: "Final Difference",
  },

  id: {
    intro:
      "Tabel berikut menampilkan rincian total uang tunai berdasarkan pecahan dan dikelompokkan menurut jenisnya.",
    denomination: "Pecahan",
    quantity: "Jumlah",
    subtotal: "Subtotal",
    total: "Total Keseluruhan",
    note: "Dokumen ini dibuat secara otomatis oleh Flowtooly. Harap periksa kembali jumlah uang sebelum digunakan.",
    typeLabel: {
      coin: "Koin",
      sheet: "Uang Kertas",
      other: "Lainnya",
    } satisfies Record<Denomination["type"], string>,
    summaryTitle: "Ringkasan",
    cashInData: "Data Kas",
    receivables: "Piutang",
    otherPeopleCash: "Uang Orang Lain",
    finalDifference: "Selisih Akhir",
  },
} as const;
