export const i18nInvestmentOutput = {
  en: {
    title: "Output",

    cagr: {
      label: "CAGR (Annual Growth Rate)",
      description: "Average yearly growth rate of your investment",
    },

    growthMultiple: {
      label: "Growth Multiple",
      description: "Final value divided by initial value",
    },

    finalValue: {
      label: "Final Value",
    },

    summary: {
      title: "Summary",
      initialValue: "Initial Value",
      finalValue: "Final Value",
      years: "Duration",
      multiple: "Growth Multiple",
      cagr: "CAGR",
            year:"Years"

    },
  },

  id: {
    title: "Output",

    cagr: {
      label: "CAGR (Tingkat Pertumbuhan Tahunan)",
      description: "Rata-rata pertumbuhan tahunan dari investasi Anda",
    },

    growthMultiple: {
      label: "Growth Multiple",
      description: "Nilai akhir dibagi nilai awal",
    },

    finalValue: {
      label: "Nilai Akhir",
    },

    summary: {
      title: "Ringkasan",
      initialValue: "Nilai Awal",
      finalValue: "Nilai Akhir",
      years: "Durasi",
      multiple: "Growth Multiple",
      cagr: "CAGR",
      year:"Tahun"
    },
  },
} as const;

export type I18nInvestmentOutput = typeof i18nInvestmentOutput;
