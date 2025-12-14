export const i18nTrapezoidSimulation = {
  en: {
    header: {
      title: "Trapezoid Practice",
      badge: "Practice",
    },

    settings: {
      title: "Value Range Settings",
      minPlaceholder: "Minimum value (cm)",
      maxPlaceholder: "Maximum value (cm)",
      helperPrefix:
        "All sides and height will be randomized between",
    },

    question: {
      intro: "Given a trapezoid with:",
      a: "Top base",
      b: "Bottom base",
      t: "Height",
      c: "Left side",
      d: "Right side",
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
      title: "Latihan Trapesium",
      badge: "Latihan",
    },

    settings: {
      title: "Pengaturan Rentang Nilai",
      minPlaceholder: "Nilai minimum (cm)",
      maxPlaceholder: "Nilai maksimum (cm)",
      helperPrefix:
        "Semua sisi dan tinggi akan diacak antara",
    },

    question: {
      intro: "Diketahui sebuah trapesium dengan:",
      a: "Alas atas",
      b: "Alas bawah",
      t: "Tinggi",
      c: "Sisi miring kiri",
      d: "Sisi miring kanan",
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

export type I18nTrapezoidSimulation =
  typeof i18nTrapezoidSimulation;
