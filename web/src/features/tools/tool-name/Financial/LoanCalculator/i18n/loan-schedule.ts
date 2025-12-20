export const i18nLoanSchedule = {
  id: {
    tabTitle: "Tabel Cicilan",
    columns: {
      month: "Bulan",
      installment: "Cicilan",
      principal: "Pokok",
      interest: "Bunga",
      totalPaid: "Total Bayar",
      remainingBalance: "Sisa Pinjaman",
    },
    empty: "Belum ada data cicilan.",
  },

  en: {
    tabTitle: "Amortization Schedule",
    columns: {
      month: "Month",
      installment: "Installment",
      principal: "Principal",
      interest: "Interest",
      totalPaid: "Total Paid",
      remainingBalance: "Remaining Balance",
    },
    empty: "No amortization data available.",
  },
} as const;
