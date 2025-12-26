export const quizPlayerReadyI18n = {
  en: {
    headerTitle: "Quiz Ready to Play",
    headerSubtitle:
      "Quiz data has been loaded successfully. You can start playing now.",

    quizInfo: {
      questionCount: (count: number) => `${count} Questions`,
      multipleChoice: "Multiple Choice",
      noLogin: "No Login Required",
    },

    config: {
      title: "Quiz Settings",
      shuffleQuestions: "Shuffled Questions",
      shuffleOptions: "Shuffled Options",
      revealAnswer: "Show Correct Answers",
      timeLimit: (minutes: number) => `Time Limit: ${minutes} minutes`,
      note:
        "These settings are defined when the quiz is created and cannot be changed during play.",
    },

    actions: {
      start: "Start Quiz",
      change: "Change Quiz Data",
    },

    toast: {
      start: "Quiz started. Good luck!",
      change: "Quiz data has been changed.",
    },
  },

  id: {
    headerTitle: "Quiz Siap Dimainkan",
    headerSubtitle:
      "Data quiz berhasil dimuat. Anda dapat mulai mengerjakan quiz.",

    quizInfo: {
      questionCount: (count: number) => `${count} Soal`,
      multipleChoice: "Pilihan Ganda",
      noLogin: "Tanpa Login",
    },

    config: {
      title: "Pengaturan Quiz",
      shuffleQuestions: "Soal Diacak",
      shuffleOptions: "Opsi Diacak",
      revealAnswer: "Jawaban Ditampilkan",
      timeLimit: (minutes: number) => `Batas Waktu: ${minutes} menit`,
      note:
        "Pengaturan ini ditentukan saat quiz dibuat dan tidak dapat diubah saat bermain.",
    },

    actions: {
      start: "Mulai Quiz",
      change: "Ganti Data Quiz",
    },

    toast: {
      start: "Quiz dimulai. Selamat mengerjakan!",
      change: "Data quiz diganti.",
    },
  },
};
