export const i18nTrapezoidInput = {
  en: {
    title: "Trapezoid Input",

    description:
      "Enter the values of the parallel sides, height, and non-parallel sides of the trapezoid in centimeters (cm). These values will be used to calculate the area and perimeter.",

    a: {
      label: "Top Base (a)",
      helper: "Example: 6 cm, 8 cm, 10 cm",
    },

    b: {
      label: "Bottom Base (b)",
      helper: "Example: 10 cm, 14 cm, 20 cm",
    },

    t: {
      label: "Height (t)",
      helper: "The perpendicular distance between the two bases.",
    },

    c: {
      label: "Left Side (c)",
      helper: "Non-parallel left side of the trapezoid.",
    },

    d: {
      label: "Right Side (d)",
      helper: "Non-parallel right side of the trapezoid.",
    },
  },

  id: {
    title: "Input Nilai Trapesium",

    description:
      "Masukkan nilai sisi sejajar, tinggi, dan sisi miring trapesium dalam satuan sentimeter (cm). Nilai ini akan digunakan untuk menghitung luas dan keliling.",

    a: {
      label: "Alas Atas (a)",
      helper: "Contoh: 6 cm, 8 cm, 10 cm",
    },

    b: {
      label: "Alas Bawah (b)",
      helper: "Contoh: 10 cm, 14 cm, 20 cm",
    },

    t: {
      label: "Tinggi (t)",
      helper: "Jarak tegak lurus antara dua sisi sejajar.",
    },

    c: {
      label: "Sisi Miring Kiri (c)",
      helper: "Sisi tidak sejajar di sebelah kiri trapesium.",
    },

    d: {
      label: "Sisi Miring Kanan (d)",
      helper: "Sisi tidak sejajar di sebelah kanan trapesium.",
    },
  },
} as const;

export type I18nTrapezoidInput = typeof i18nTrapezoidInput;
