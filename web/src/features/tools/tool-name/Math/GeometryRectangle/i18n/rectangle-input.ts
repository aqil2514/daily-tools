export const i18nRectangleInput = {
  en: {
    title: "Rectangle Input",

    description:
      "Enter the length and width of the rectangle in centimeters (cm). These values will be used to calculate the area and perimeter.",

    length: {
      label: "Length (p)",
      helper: "Example: 8 cm, 12 cm, 20 cm",
    },

    width: {
      label: "Width (l)",
      helper: "Example: 4 cm, 6 cm, 10 cm",
    },
  },

  id: {
    title: "Input Nilai Persegi Panjang",

    description:
      "Masukkan nilai panjang dan lebar persegi panjang dalam satuan sentimeter (cm). Nilai ini akan digunakan untuk menghitung luas dan keliling.",

    length: {
      label: "Panjang (p)",
      helper: "Contoh: 8 cm, 12 cm, 20 cm",
    },

    width: {
      label: "Lebar (l)",
      helper: "Contoh: 4 cm, 6 cm, 10 cm",
    },
  },
} as const;

export type I18nRectangleInput = typeof i18nRectangleInput;
