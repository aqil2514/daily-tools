// 📦 CompoundInterestCalculator/i18n/compound-breakdown.ts
export const i18nCompoundBreakdown = {
  en: {
    once: {
      year: "Year",
      startValue: "Start Value",
      interestEarned: "Interest Earned",
      value: "Value",
    },

    monthly: {
      month: "Month",
      totalInvested: "Total Invested",
      monthlyInterest: "Monthly Interest",
      interestEarned: "Total Interest",
      value: "Value",
    },
  },

  id: {
    once: {
      year: "Tahun",
      startValue: "Nilai Awal",
      interestEarned: "Bunga",
      value: "Nilai Akhir",
    },

    monthly: {
      month: "Bulan",
      totalInvested: "Total Investasi",
      monthlyInterest: "Bunga Bulanan",
      interestEarned: "Total Bunga",
      value: "Nilai Akhir",
    },
  },
} as const;

export type I18nCompoundBreakdown =
  typeof i18nCompoundBreakdown;
