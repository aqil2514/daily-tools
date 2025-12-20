export const i18nCompoundInput = {
  en: {
    title: "Input",

    mode: {
      once: "One-Time Investment",
      monthly: "Monthly Contribution",
    },

    principal: {
      label: "Initial Capital",
    },

    rate: {
      label: "Interest Rate (%)",
    },

    periods: {
      label: "Periods",
      helper: "Number of compounding periods",
    },

    frequency: {
      label: "Compounding Frequency (per year)",
      helper:
        "Disabled when monthly contribution mode is selected",
    },
  },

  id: {
    title: "Input",

    mode: {
      once: "Sekali Nabung",
      monthly: "Nabung Tiap Bulan",
    },

    principal: {
      label: "Modal Awal",
    },

    rate: {
      label: "Suku Bunga (%)",
    },

    periods: {
      label: "Periode",
      helper: "Jumlah periode penggandaan",
    },

    frequency: {
      label: "Frekuensi Penggandaan (per tahun)",
      helper:
        "Tidak dapat diubah pada mode nabung bulanan",
    },
  },
} as const;

export type I18nCompoundInput = typeof i18nCompoundInput;
