export const i18nRectangleSimulation = {
  en: {
    header: {
      title: "Rectangle Practice",
      badge: "Practice",
    },

    settings: {
      title: "Value Range Settings",
      minPlaceholder: "Minimum value (cm)",
      maxPlaceholder: "Maximum value (cm)",
      helperPrefix:
        "Length and width will be randomized between",
    },

    question: {
      intro: "Given a rectangle with:",
      length: "Length",
      width: "Width",
      calculate: "Calculate:",
      area: "Area",
      perimeter: "Perimeter",
    },

    input: {
      areaPlaceholder: "Area answer (cm²)",
      perimeterPlaceholder: "Perimeter answer (cm)",
    },

    feedback: {
      correct: "correct",
      wrong: "wrong",
    },

    explanation: {
      title: "Short Explanation",
      known: "Known:",
      areaIntro: "Area formula:",
      perimeterIntro: "Perimeter formula:",
    },

    actions: {
      check: "Check Answer",
      next: "Next Question",
    },
  },

  id: {
    header: {
      title: "Latihan Persegi Panjang",
      badge: "Latihan",
    },

    settings: {
      title: "Pengaturan Rentang Nilai",
      minPlaceholder: "Nilai minimum (cm)",
      maxPlaceholder: "Nilai maksimum (cm)",
      helperPrefix:
        "Panjang dan lebar akan diacak antara",
    },

    question: {
      intro: "Diketahui sebuah persegi panjang dengan:",
      length: "Panjang",
      width: "Lebar",
      calculate: "Hitung:",
      area: "Luas",
      perimeter: "Keliling",
    },

    input: {
      areaPlaceholder: "Jawaban luas (cm²)",
      perimeterPlaceholder: "Jawaban keliling (cm)",
    },

    feedback: {
      correct: "benar",
      wrong: "salah",
    },

    explanation: {
      title: "Pembahasan Singkat",
      known: "Diketahui:",
      areaIntro: "Rumus luas:",
      perimeterIntro: "Rumus keliling:",
    },

    actions: {
      check: "Periksa Jawaban",
      next: "Soal Berikutnya",
    },
  },
} as const;

export type I18nRectangleSimulation =
  typeof i18nRectangleSimulation;
