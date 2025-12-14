export const i18nCircleOutput = {
  en: {
    title: "Calculation Result",

    radiusInfo: {
      label: "Radius",
      description: "The distance from the center of the circle to its edge.",
    },

    formula: {
      title: "Formula",
      area: "Area",
      circumference: "Circumference",
    },

    result: {
      area: "Area",
      circumference: "Circumference",
    },
  },

  id: {
    title: "Hasil Perhitungan",

    radiusInfo: {
      label: "Jari-jari",
      description:
        "Jarak dari pusat lingkaran ke tepi lingkaran.",
    },

    formula: {
      title: "Rumus",
      area: "Luas",
      circumference: "Keliling",
    },

    result: {
      area: "Luas",
      circumference: "Keliling",
    },
  },
} as const;

export type I18nCircleOutput = typeof i18nCircleOutput;
