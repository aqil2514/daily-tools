export const i18nTrapezoidOutput = {
  en: {
    title: "Calculation Result",

    aInfo: {
      label: "Top Base",
      description: "The upper parallel side of the trapezoid.",
    },
    bInfo: {
      label: "Bottom Base",
      description: "The lower parallel side of the trapezoid.",
    },
    tInfo: {
      label: "Height",
      description: "The perpendicular distance between the two bases.",
    },
    cInfo: {
      label: "Left Side",
      description: "The left non-parallel side of the trapezoid.",
    },
    dInfo: {
      label: "Right Side",
      description: "The right non-parallel side of the trapezoid.",
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
      label: "Alas Atas",
      description: "Sisi sejajar bagian atas trapesium.",
    },
    bInfo: {
      label: "Alas Bawah",
      description: "Sisi sejajar bagian bawah trapesium.",
    },
    tInfo: {
      label: "Tinggi",
      description: "Jarak tegak lurus antara dua sisi sejajar.",
    },
    cInfo: {
      label: "Sisi Miring Kiri",
      description: "Sisi tidak sejajar di sebelah kiri trapesium.",
    },
    dInfo: {
      label: "Sisi Miring Kanan",
      description: "Sisi tidak sejajar di sebelah kanan trapesium.",
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

export type I18nTrapezoidOutput = typeof i18nTrapezoidOutput;
