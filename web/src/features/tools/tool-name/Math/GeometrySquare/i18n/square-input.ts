export const i18nSquareInput = {
  en: {
    title: "Square Input",

    description:
      "Enter the side length of the square in centimeters (cm). This value will be used to calculate the area and perimeter.",

    side: {
      label: "Side Length (s)",
      helper: "Example: 5 cm, 10 cm, 20 cm",
    },
  },

  id: {
    title: "Input Nilai Persegi",

    description:
      "Masukkan panjang sisi persegi dalam satuan sentimeter (cm). Nilai ini akan digunakan untuk menghitung luas dan keliling.",

    side: {
      label: "Panjang Sisi (s)",
      helper: "Contoh: 5 cm, 10 cm, 20 cm",
    },
  },
} as const;

export type I18nSquareInput = typeof i18nSquareInput;
