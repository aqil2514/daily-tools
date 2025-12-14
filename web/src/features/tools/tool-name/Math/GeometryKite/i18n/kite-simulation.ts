export const i18nKiteSimulation = {
  en: {
    header: {
      title: "Kite Practice",
      badge: "Practice",
    },

    settings: {
      title: "Value Range Settings",
      minPlaceholder: "Minimum value (cm)",
      maxPlaceholder: "Maximum value (cm)",
      helperPrefix:
        "Diagonal lengths and side lengths will be randomized between",
    },

    question: {
      intro: "Given a kite with:",
      d1: "Diagonal 1",
      d2: "Diagonal 2",
      a: "Equal side (a)",
      b: "Equal side (b)",
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
      title: "Latihan Layang-layang",
      badge: "Latihan",
    },

    settings: {
      title: "Pengaturan Rentang Nilai",
      minPlaceholder: "Nilai minimum (cm)",
      maxPlaceholder: "Nilai maksimum (cm)",
      helperPrefix:
        "Nilai diagonal dan sisi akan diacak antara",
    },

    question: {
      intro: "Diketahui sebuah layang-layang dengan:",
      d1: "Diagonal 1",
      d2: "Diagonal 2",
      a: "Sisi sama (a)",
      b: "Sisi sama (b)",
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

export type I18nKiteSimulation = typeof i18nKiteSimulation;
