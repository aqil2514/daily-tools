export const i18nTriangleOutput = {
  en: {
    title: "Calculation Result",

    baseInfo: {
      label: "Base",
      description: "The base side of the right triangle.",
    },

    heightInfo: {
      label: "Height",
      description: "The height perpendicular to the base.",
    },

    hypotenuseInfo: {
      label: "Hypotenuse",
      description: "The longest side calculated using the Pythagorean theorem.",
    },

    formula: {
      title: "Formula",
      area: "Area",
      perimeter: "Perimeter",
      hypotenuse: "Hypotenuse",
    },

    result: {
      area: "Area",
      perimeter: "Perimeter",
      hypotenuse: "Hypotenuse",
    },
  },

  id: {
    title: "Hasil Perhitungan",

    baseInfo: {
      label: "Alas",
      description: "Sisi alas segitiga siku-siku.",
    },

    heightInfo: {
      label: "Tinggi",
      description: "Sisi tinggi yang tegak lurus terhadap alas.",
    },

    hypotenuseInfo: {
      label: "Sisi Miring",
      description: "Sisi terpanjang yang dihitung menggunakan teorema Pythagoras.",
    },

    formula: {
      title: "Rumus",
      area: "Luas",
      perimeter: "Keliling",
      hypotenuse: "Sisi miring",
    },

    result: {
      area: "Luas",
      perimeter: "Keliling",
      hypotenuse: "Sisi miring",
    },
  },
} as const;

export type I18nTriangleOutput = typeof i18nTriangleOutput;
