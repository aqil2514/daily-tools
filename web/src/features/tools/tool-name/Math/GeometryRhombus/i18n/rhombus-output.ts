export const i18nRhombusOutput = {
  en: {
    title: "Calculation Result",

    d1Info: {
      label: "Diagonal 1",
      description: "The length of the first diagonal of the rhombus.",
    },

    d2Info: {
      label: "Diagonal 2",
      description: "The length of the second diagonal of the rhombus.",
    },

    sInfo: {
      label: "Side Length",
      description: "The length of one side of the rhombus.",
    },

    formula: {
      title: "Formula",
      area: "Area",
      perimeter: "Perimeter",
    },

    result: {
      area: "Area",
      perimeter: "Perimeter",
    },
  },

  id: {
    title: "Hasil Perhitungan",

    d1Info: {
      label: "Diagonal 1",
      description: "Panjang diagonal pertama belah ketupat.",
    },

    d2Info: {
      label: "Diagonal 2",
      description: "Panjang diagonal kedua belah ketupat.",
    },

    sInfo: {
      label: "Panjang Sisi",
      description: "Panjang salah satu sisi belah ketupat.",
    },

    formula: {
      title: "Rumus",
      area: "Luas",
      perimeter: "Keliling",
    },

    result: {
      area: "Luas",
      perimeter: "Keliling",
    },
  },
} as const;

export type I18nRhombusOutput = typeof i18nRhombusOutput;
