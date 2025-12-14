export const i18nSemicircleSimulation = {
  en: {
    header: {
      title: "Semicircle Practice",
      badge: "Practice",
    },

    settings: {
      title: "Value Range Settings",
      minPlaceholder: "Minimum radius (cm)",
      maxPlaceholder: "Maximum radius (cm)",
      helperPrefix:
        "The radius value will be randomized between",
    },

    question: {
      intro: "Given a semicircle with:",
      radius: "Radius",
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
      title: "Latihan Setengah Lingkaran",
      badge: "Latihan",
    },

    settings: {
      title: "Pengaturan Rentang Nilai",
      minPlaceholder: "Jari-jari minimum (cm)",
      maxPlaceholder: "Jari-jari maksimum (cm)",
      helperPrefix:
        "Nilai jari-jari akan diacak antara",
    },

    question: {
      intro: "Diketahui sebuah setengah lingkaran dengan:",
      radius: "Jari-jari",
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

export type I18nSemicircleSimulation =
  typeof i18nSemicircleSimulation;
