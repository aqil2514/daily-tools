export const i18nSemicircleInput = {
  en: {
    title: "Semicircle Input",

    description:
      "Enter the radius of the semicircle in centimeters (cm). This value will be used to calculate the area and perimeter.",

    radius: {
      label: "Radius (r)",
      helper: "Distance from the center to the edge of the semicircle.",
    },
  },

  id: {
    title: "Input Nilai Setengah Lingkaran",

    description:
      "Masukkan nilai jari-jari setengah lingkaran dalam satuan sentimeter (cm). Nilai ini akan digunakan untuk menghitung luas dan keliling.",

    radius: {
      label: "Jari-jari (r)",
      helper: "Jarak dari pusat ke tepi setengah lingkaran.",
    },
  },
} as const;

export type I18nSemicircleInput = typeof i18nSemicircleInput;
