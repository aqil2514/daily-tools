export const i18nLoanOutput = {
  en: {
    title: "Output",
    monthlyInstallment: "Monthly Installment",
    totalInterest: "Total Interest",
    totalPayment: "Total Payment",
    summary: "Summary",
  },

  id: {
    title: "Output",
    monthlyInstallment: "Cicilan Per Bulan",
    totalInterest: "Total Bunga",
    totalPayment: "Total Pembayaran Keseluruhan",
    summary: "Ringkasan",
  },
} as const;

export type I18nLoanOutput = typeof i18nLoanOutput;
