export const i18nCompoundOutput = {
  en: {
    title: "Output",

    futureValue: "Future Value",
    totalInvested: "Total Invested",
    interestEarned: "Interest Earned",
    returnPercentage: "Return (%)",
    avgMonthlyGain: "Avg. Monthly Gain",
  },

  id: {
    title: "Output",

    futureValue: "Nilai Akhir",
    totalInvested: "Total Investasi",
    interestEarned: "Total Bunga",
    returnPercentage: "Imbal Hasil (%)",
    avgMonthlyGain: "Rata-rata Kenaikan Bulanan",
  },
} as const;

export type I18nCompoundOutput = typeof i18nCompoundOutput;
