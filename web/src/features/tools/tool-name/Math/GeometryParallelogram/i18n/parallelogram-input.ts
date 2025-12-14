export const i18nParallelogramInput = {
  en: {
    title: "Parallelogram Input",

    description:
      "Enter the base, height, and side length of the parallelogram in centimeters (cm). These values will be used to calculate the area and perimeter.",

    a: {
      label: "Base (a)",
      helper: "The length of the base of the parallelogram.",
    },

    t: {
      label: "Height (t)",
      helper: "The perpendicular distance from the base.",
    },

    b: {
      label: "Side Length (b)",
      helper: "The length of the slanted side of the parallelogram.",
    },
  },

  id: {
    title: "Input Nilai Jajar Genjang",

    description:
      "Masukkan nilai alas, tinggi, dan sisi miring jajar genjang dalam satuan sentimeter (cm). Nilai ini akan digunakan untuk menghitung luas dan keliling.",

    a: {
      label: "Alas (a)",
      helper: "Panjang alas jajar genjang.",
    },

    t: {
      label: "Tinggi (t)",
      helper: "Jarak tegak lurus dari alas.",
    },

    b: {
      label: "Sisi Miring (b)",
      helper: "Panjang sisi miring jajar genjang.",
    },
  },
} as const;

export type I18nParallelogramInput =
  typeof i18nParallelogramInput;
