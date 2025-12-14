export const i18nTriangleSimulation = {
  en: {
    header: {
      title: "Triangle Practice",
      badge: "Practice",
    },

    settings: {
      title: "Value Range Settings",
      minPlaceholder: "Minimum value (cm)",
      maxPlaceholder: "Maximum value (cm)",
      helperPrefix:
        "Base and height will be randomized between",
    },

    question: {
      intro: "Given a right triangle with:",
      base: "Base",
      height: "Height",
      calculate: "Calculate:",
      area: "Area",
      hypotenuse: "Hypotenuse",
      perimeter: "Perimeter",
    },

    input: {
      areaPlaceholder: "Area answer (cm²)",
      hypotenusePlaceholder: "Hypotenuse answer (cm)",
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
      hypotenuseIntro: "Hypotenuse formula:",
      perimeterIntro: "Perimeter formula:",
    },

    actions: {
      check: "Check Answer",
      next: "Next Question",
    },
  },

  id: {
    header: {
      title: "Latihan Segitiga",
      badge: "Latihan",
    },

    settings: {
      title: "Pengaturan Rentang Nilai",
      minPlaceholder: "Nilai minimum (cm)",
      maxPlaceholder: "Nilai maksimum (cm)",
      helperPrefix:
        "Alas dan tinggi akan diacak antara",
    },

    question: {
      intro: "Diketahui sebuah segitiga siku-siku dengan:",
      base: "Alas",
      height: "Tinggi",
      calculate: "Hitung:",
      area: "Luas",
      hypotenuse: "Sisi miring",
      perimeter: "Keliling",
    },

    input: {
      areaPlaceholder: "Jawaban luas (cm²)",
      hypotenusePlaceholder: "Jawaban sisi miring (cm)",
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
      hypotenuseIntro: "Rumus sisi miring:",
      perimeterIntro: "Rumus keliling:",
    },

    actions: {
      check: "Periksa Jawaban",
      next: "Soal Berikutnya",
    },
  },
} as const;

export type I18nTriangleSimulation =
  typeof i18nTriangleSimulation;
