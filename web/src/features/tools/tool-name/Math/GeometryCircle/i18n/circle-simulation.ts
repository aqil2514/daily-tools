export const i18nCircleSimulation = {
  en: {
    header: {
      title: "Circle Practice",
      badge: "Practice",
    },

    settings: {
      title: "Value Range Settings",
      minPlaceholder: "Minimum radius (cm)",
      maxPlaceholder: "Maximum radius (cm)",
      helperPrefix: "Radius will be randomized between",
    },

    question: {
      intro: "Given a circle with:",
      radius: "Radius",
      calculate: "Calculate:",
      area: "Area",
      circumference: "Circumference",
    },

    input: {
      areaPlaceholder: "Area answer (cm²)",
      circumferencePlaceholder: "Circumference answer (cm)",
    },

    feedback: {
      correct: "correct",
      wrong: "wrong",
    },

    explanation: {
      title: "Short Explanation",
      known: "Known:",
      areaIntro: "Area formula:",
      circumferenceIntro: "Circumference formula:",
    },

    actions: {
      check: "Check Answer",
      next: "Next Question",
    },
  },

  id: {
    header: {
      title: "Latihan Lingkaran",
      badge: "Latihan",
    },

    settings: {
      title: "Pengaturan Rentang Nilai",
      minPlaceholder: "Jari-jari minimum (cm)",
      maxPlaceholder: "Jari-jari maksimum (cm)",
      helperPrefix: "Jari-jari akan diacak antara",
    },

    question: {
      intro: "Diketahui sebuah lingkaran dengan:",
      radius: "Jari-jari",
      calculate: "Hitung:",
      area: "Luas",
      circumference: "Keliling",
    },

    input: {
      areaPlaceholder: "Jawaban luas (cm²)",
      circumferencePlaceholder: "Jawaban keliling (cm)",
    },

    feedback: {
      correct: "benar",
      wrong: "salah",
    },

    explanation: {
      title: "Pembahasan Singkat",
      known: "Diketahui:",
      areaIntro: "Rumus luas:",
      circumferenceIntro: "Rumus keliling:",
    },

    actions: {
      check: "Periksa Jawaban",
      next: "Soal Berikutnya",
    },
  },
} as const;

export type I18nCircleSimulation =
  typeof i18nCircleSimulation;
