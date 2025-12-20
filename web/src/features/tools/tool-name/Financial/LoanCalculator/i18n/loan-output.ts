export const i18nLoanOutput = {
  en: {
    title: "Output",
    monthlyInstallment: "Monthly Installment",
    totalInterest: "Total Interest",
    totalPayment: "Total Payment",
    summary: "Summary",
    installmentTable: "Installment Table",
  },

  id: {
    title: "Output",
    monthlyInstallment: "Cicilan Per Bulan",
    totalInterest: "Total Bunga",
    totalPayment: "Total Pembayaran Keseluruhan",
    summary: "Ringkasan",
    installmentTable: "Tabel Cicilan",
  },
} as const;

export type I18nLoanOutput = typeof i18nLoanOutput;
