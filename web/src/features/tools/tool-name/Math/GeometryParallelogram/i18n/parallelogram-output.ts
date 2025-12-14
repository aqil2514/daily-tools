export const i18nParallelogramOutput = {
  en: {
    title: "Calculation Result",

    aInfo: {
      label: "Base",
      description: "The base length of the parallelogram.",
    },

    tInfo: {
      label: "Height",
      description: "The perpendicular distance from the base.",
    },

    bInfo: {
      label: "Side Length",
      description: "The slanted side of the parallelogram.",
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

    aInfo: {
      label: "Alas",
      description: "Panjang alas jajar genjang.",
    },

    tInfo: {
      label: "Tinggi",
      description: "Jarak tegak lurus dari alas.",
    },

    bInfo: {
      label: "Sisi Miring",
      description: "Sisi miring jajar genjang.",
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

export type I18nParallelogramOutput =
  typeof i18nParallelogramOutput;
