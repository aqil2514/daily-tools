export const i18nRectangleOutput = {
  en: {
    title: "Calculation Result",

    lengthInfo: {
      label: "Length",
      description: "The longer side of the rectangle.",
    },

    widthInfo: {
      label: "Width",
      description: "The side perpendicular to the length.",
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

    lengthInfo: {
      label: "Panjang",
      description: "Sisi terpanjang dari persegi panjang.",
    },

    widthInfo: {
      label: "Lebar",
      description: "Sisi yang tegak lurus terhadap panjang.",
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

export type I18nRectangleOutput = typeof i18nRectangleOutput;
