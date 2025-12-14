export const i18nTriangleInput = {
  en: {
    title: "Triangle Input",

    description:
      "Enter the base and height of a right triangle in centimeters (cm). These values will be used to calculate the area and perimeter.",

    base: {
      label: "Base (a)",
      helper: "Example: 6 cm, 10 cm, 15 cm",
    },

    height: {
      label: "Height (t)",
      helper: "Example: 4 cm, 8 cm, 12 cm",
    },
  },

  id: {
    title: "Input Nilai Segitiga",

    description:
      "Masukkan nilai alas dan tinggi segitiga siku-siku dalam satuan sentimeter (cm). Nilai ini akan digunakan untuk menghitung luas dan keliling.",

    base: {
      label: "Alas (a)",
      helper: "Contoh: 6 cm, 10 cm, 15 cm",
    },

    height: {
      label: "Tinggi (t)",
      helper: "Contoh: 4 cm, 8 cm, 12 cm",
    },
  },
} as const;

export type I18nTriangleInput = typeof i18nTriangleInput;
