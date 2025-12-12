export const i18nSavingsInput = {
  en: {
    title: "Input Data",

    targetAmount: {
      label: "Target Amount",
      placeholder: "e.g. 50,000,000",
    },

    monthlyContribution: {
      label: "Monthly Contribution (optional)",
      placeholder: "e.g. 1,000,000",
    },

    duration: {
      label: "Duration (months)",
      placeholder: "e.g. 12",
    },

    interest: {
      label: "Annual Interest Rate (%)",
      placeholder: "e.g. 5",
    },
  },

  id: {
    title: "Input Data",

    targetAmount: {
      label: "Target Tabungan",
      placeholder: "Misal: 50.000.000",
    },

    monthlyContribution: {
      label: "Tabungan Per Bulan (opsional)",
      placeholder: "Misal: 1.000.000",
    },

    duration: {
      label: "Durasi (bulan)",
      placeholder: "Misal: 12",
    },

    interest: {
      label: "Bunga Tahunan (%)",
      placeholder: "Misal: 5",
    },
  },
} as const;

export type I18nSavingsInput = typeof i18nSavingsInput;
