export const i18nSquareOutput = {
  en: {
    title: "Square Calculation Result",

    sideInfo: {
      label: "Side length (s)",
      description:
        "The side is the length of one edge of the square.",
    },

    formula: {
      title: "Square Formulas",
      area: "Area Formula",
      perimeter: "Perimeter Formula",
    },

    result: {
      area: "Area",
      perimeter: "Perimeter",
    },
  },

  id: {
    title: "Hasil Perhitungan Persegi",

    sideInfo: {
      label: "Panjang sisi (s)",
      description:
        "Sisi adalah panjang salah satu tepi persegi.",
    },

    formula: {
      title: "Rumus Bangunan Persegi",
      area: "Rumus Luas",
      perimeter: "Rumus Keliling",
    },

    result: {
      area: "Luas",
      perimeter: "Keliling",
    },
  },
} as const;

export type I18nSquareOutput = typeof i18nSquareOutput;
