export const i18nSemicircleOutput = {
  en: {
    title: "Calculation Result",

    radiusInfo: {
      label: "Radius",
      description: "Distance from the center to the edge of the semicircle.",
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

    radiusInfo: {
      label: "Jari-jari",
      description: "Jarak dari pusat ke tepi setengah lingkaran.",
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

export type I18nSemicircleOutput = typeof i18nSemicircleOutput;