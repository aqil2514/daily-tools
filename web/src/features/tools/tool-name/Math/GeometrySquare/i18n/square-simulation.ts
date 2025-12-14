export const i18nSquareSimulation = {
  en: {
    header: {
      title: "Square Practice",
      badge: "Practice",
    },

    settings: {
      title: "Problem Settings",
      minPlaceholder: "Minimum side (cm)",
      maxPlaceholder: "Maximum side (cm)",
      helperPrefix: "Problems will be generated with side length between",
    },

    question: {
      prefix: "If the side length of the square is",
      calculate: "calculate:",
      area: "Area",
      perimeter: "Perimeter",
    },

    input: {
      areaPlaceholder: "Area (cm²)",
      perimeterPlaceholder: "Perimeter (cm)",
    },

    feedback: {
      correct: "Correct",
      wrong: "Incorrect",
    },

    explanation: {
      title: "Short Explanation",
      knownPrefix: "Given the side length of the square is",
      areaIntro:
        "The area of a square is calculated using the formula L = s × s, resulting in:",
      perimeterIntro:
        "The perimeter of a square is calculated using the formula K = 4 × s, resulting in:",
    },

    actions: {
      check: "Check Answer",
      next: "New Problem",
    },
  },

  id: {
    header: {
      title: "Simulasi Soal Persegi",
      badge: "Latihan",
    },

    settings: {
      title: "Pengaturan Soal",
      minPlaceholder: "Sisi minimum (cm)",
      maxPlaceholder: "Sisi maksimum (cm)",
      helperPrefix: "Soal akan dibuat dengan panjang sisi antara",
    },

    question: {
      prefix: "Jika panjang sisi persegi adalah",
      calculate: "hitunglah:",
      area: "Luas",
      perimeter: "Keliling",
    },

    input: {
      areaPlaceholder: "Luas (cm²)",
      perimeterPlaceholder: "Keliling (cm)",
    },

    feedback: {
      correct: "Benar",
      wrong: "Salah",
    },

    explanation: {
      title: "Pembahasan Singkat",
      knownPrefix: "Diketahui panjang sisi persegi adalah",
      areaIntro:
        "Luas persegi dihitung menggunakan rumus L = s × s, sehingga diperoleh:",
      perimeterIntro:
        "Keliling persegi dihitung menggunakan rumus K = 4 × s, sehingga diperoleh:",
    },

    actions: {
      check: "Cek Jawaban",
      next: "Soal Baru",
    },
  },
} as const;

export type I18nSquareSimulation = typeof i18nSquareSimulation;
