export const i18nParallelogramSimulation = {
  en: {
    header: {
      title: "Parallelogram Practice",
      badge: "Practice",
    },

    settings: {
      title: "Value Range Settings",
      minPlaceholder: "Minimum value (cm)",
      maxPlaceholder: "Maximum value (cm)",
      helperPrefix:
        "Base, height, and side length will be randomized between",
    },

    question: {
      intro: "Given a parallelogram with:",
      a: "Base",
      t: "Height",
      b: "Side length",
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
      title: "Latihan Jajar Genjang",
      badge: "Latihan",
    },

    settings: {
      title: "Pengaturan Rentang Nilai",
      minPlaceholder: "Nilai minimum (cm)",
      maxPlaceholder: "Nilai maksimum (cm)",
      helperPrefix:
        "Nilai alas, tinggi, dan sisi miring akan diacak antara",
    },

    question: {
      intro: "Diketahui sebuah jajar genjang dengan:",
      a: "Alas",
      t: "Tinggi",
      b: "Sisi miring",
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

export type I18nParallelogramSimulation =
  typeof i18nParallelogramSimulation;
