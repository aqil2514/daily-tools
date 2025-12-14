export const i18nKiteInput = {
  en: {
    title: "Kite Input",

    description:
      "Enter the diagonal lengths and the two pairs of equal sides of the kite in centimeters (cm). These values will be used to calculate the area and perimeter.",

    d1: {
      label: "Diagonal 1 (d₁)",
      helper: "Length of the first diagonal of the kite.",
    },

    d2: {
      label: "Diagonal 2 (d₂)",
      helper: "Length of the second diagonal of the kite.",
    },

    a: {
      label: "Equal Side (a)",
      helper: "Length of the first pair of equal sides.",
    },

    b: {
      label: "Equal Side (b)",
      helper: "Length of the second pair of equal sides.",
    },
  },

  id: {
    title: "Input Nilai Layang-layang",

    description:
      "Masukkan panjang diagonal dan dua pasang sisi sama panjang layang-layang dalam satuan sentimeter (cm). Nilai ini akan digunakan untuk menghitung luas dan keliling.",

    d1: {
      label: "Diagonal 1 (d₁)",
      helper: "Panjang diagonal pertama layang-layang.",
    },

    d2: {
      label: "Diagonal 2 (d₂)",
      helper: "Panjang diagonal kedua layang-layang.",
    },

    a: {
      label: "Sisi Sama (a)",
      helper: "Panjang pasangan sisi sama pertama.",
    },

    b: {
      label: "Sisi Sama (b)",
      helper: "Panjang pasangan sisi sama kedua.",
    },
  },
} as const;

export type I18nKiteInput = typeof i18nKiteInput;
