export const i18nRhombusInput = {
  en: {
    title: "Rhombus Input",

    description:
      "Enter the lengths of the diagonals and side of the rhombus in centimeters (cm). These values will be used to calculate the area and perimeter.",

    d1: {
      label: "Diagonal 1 (d₁)",
      helper: "Length of the first diagonal of the rhombus.",
    },

    d2: {
      label: "Diagonal 2 (d₂)",
      helper: "Length of the second diagonal of the rhombus.",
    },

    s: {
      label: "Side Length (s)",
      helper: "Length of one side of the rhombus.",
    },
  },

  id: {
    title: "Input Nilai Belah Ketupat",

    description:
      "Masukkan panjang diagonal dan sisi belah ketupat dalam satuan sentimeter (cm). Nilai ini akan digunakan untuk menghitung luas dan keliling.",

    d1: {
      label: "Diagonal 1 (d₁)",
      helper: "Panjang diagonal pertama belah ketupat.",
    },

    d2: {
      label: "Diagonal 2 (d₂)",
      helper: "Panjang diagonal kedua belah ketupat.",
    },

    s: {
      label: "Panjang Sisi (s)",
      helper: "Panjang salah satu sisi belah ketupat.",
    },
  },
} as const;

export type I18nRhombusInput = typeof i18nRhombusInput;
