export const i18nLoanSummary = {
  en: {
    amount: "Loan Amount",
    annualInterestRate: "Annual Interest Rate",
    tenorMonths: "Tenor",
    loanType: "Interest Type",
    monthlyInstallment: "Monthly Installment",
    totalInterest: "Total Interest",
    totalPayment: "Total Payment",
  },

  id: {
    amount: "Jumlah Pinjaman",
    annualInterestRate: "Bunga Tahunan",
    tenorMonths: "Tenor",
    loanType: "Tipe Bunga",
    monthlyInstallment: "Cicilan / Bulan",
    totalInterest: "Total Bunga",
    totalPayment: "Total Pembayaran",
  },
} as const;

export type I18nLoanSummary = typeof i18nLoanSummary;
