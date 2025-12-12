export const i18nInvestmentInput = {
  en: {
    title: "Input Data",

    initialValue: {
      label: "Initial Value",
      placeholder: "e.g. 10,000,000",
    },

    finalValue: {
      label: "Final Value",
      placeholder: "e.g. 25,000,000",
    },

    years: {
      label: "Years",
      placeholder: "e.g. 5",
    },
  },

  id: {
    title: "Input Data",

    initialValue: {
      label: "Nilai Awal",
      placeholder: "Misal: 10.000.000",
    },

    finalValue: {
      label: "Nilai Akhir",
      placeholder: "Misal: 25.000.000",
    },

    years: {
      label: "Durasi (Tahun)",
      placeholder: "Misal: 5",
    },
  },
} as const;

export type I18nInvestmentInput = typeof i18nInvestmentInput;
