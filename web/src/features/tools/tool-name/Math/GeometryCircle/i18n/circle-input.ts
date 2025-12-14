export const i18nCircleInput = {
  en: {
    title: "Circle Input",

    description:
      "Enter the radius of the circle in centimeters (cm). This value will be used to calculate the area and circumference.",

    radius: {
      label: "Radius (r)",
      helper: "Example: 5 cm, 7 cm, 14 cm",
    },
  },

  id: {
    title: "Input Nilai Lingkaran",

    description:
      "Masukkan nilai jari-jari lingkaran dalam satuan sentimeter (cm). Nilai ini akan digunakan untuk menghitung luas dan keliling.",

    radius: {
      label: "Jari-jari (r)",
      helper: "Contoh: 5 cm, 7 cm, 14 cm",
    },
  },
} as const;

export type I18nCircleInput = typeof i18nCircleInput;
