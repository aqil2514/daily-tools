export const i18nKiteOutput = {
  en: {
    title: "Calculation Result",

    d1Info: {
      label: "Diagonal 1",
      description: "The length of the first diagonal of the kite.",
    },
    d2Info: {
      label: "Diagonal 2",
      description: "The length of the second diagonal of the kite.",
    },
    aInfo: {
      label: "Equal Side (a)",
      description: "Length of the first pair of equal sides.",
    },
    bInfo: {
      label: "Equal Side (b)",
      description: "Length of the second pair of equal sides.",
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
      description: "Panjang diagonal pertama layang-layang.",
    },
    d2Info: {
      label: "Diagonal 2",
      description: "Panjang diagonal kedua layang-layang.",
    },
    aInfo: {
      label: "Sisi Sama (a)",
      description: "Panjang pasangan sisi sama pertama.",
    },
    bInfo: {
      label: "Sisi Sama (b)",
      description: "Panjang pasangan sisi sama kedua.",
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

export type I18nKiteOutput = typeof i18nKiteOutput;
