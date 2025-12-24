import { QuizPreviewData } from "../types/preview";

export const quizSampleIPA: QuizPreviewData = {
  version: "1",
  metadata: {
    title: "Kuis IPA Dasar",
    description: "Uji pemahaman dasar Ilmu Pengetahuan Alam",
    config: {
      shuffleQuestions: true,
      shuffleOptions: true,
      revealCorrectAnswer: true,
      timeLimitSeconds: 600,
    },
  },
  questions: [
    {
      questionId: "ipa-q1",
      text: "Proses tumbuhan membuat makanan sendiri disebut?",
      options: [
        { optionId: "a", text: "Respirasi" },
        { optionId: "b", text: "Fotosintesis" },
        { optionId: "c", text: "Fermentasi" },
        { optionId: "d", text: "Transpirasi" },
      ],
      correctOptionId: "b",
      explanation: "Fotosintesis adalah proses tumbuhan membuat makanan dengan bantuan cahaya.",
    },
    {
      questionId: "ipa-q2",
      text: "Planet terdekat dengan Matahari adalah?",
      options: [
        { optionId: "a", text: "Venus" },
        { optionId: "b", text: "Bumi" },
        { optionId: "c", text: "Merkurius" },
        { optionId: "d", text: "Mars" },
      ],
      correctOptionId: "c",
      explanation: "Merkurius adalah planet terdekat dari Matahari.",
    },
    {
      questionId: "ipa-q3",
      text: "Alat pernapasan manusia yang berfungsi menukar oksigen dan karbon dioksida adalah?",
      options: [
        { optionId: "a", text: "Bronkus" },
        { optionId: "b", text: "Trakea" },
        { optionId: "c", text: "Alveolus" },
        { optionId: "d", text: "Laring" },
      ],
      correctOptionId: "c",
      explanation: "Alveolus berfungsi sebagai tempat pertukaran gas.",
    },
    {
      questionId: "ipa-q4",
      text: "Perubahan wujud dari cair menjadi gas disebut?",
      options: [
        { optionId: "a", text: "Membeku" },
        { optionId: "b", text: "Menguap" },
        { optionId: "c", text: "Mengembun" },
        { optionId: "d", text: "Mencair" },
      ],
      correctOptionId: "b",
      explanation: "Menguap adalah perubahan dari cair ke gas.",
    },
    {
      questionId: "ipa-q5",
      text: "Bagian tumbuhan yang berfungsi menyerap air adalah?",
      options: [
        { optionId: "a", text: "Daun" },
        { optionId: "b", text: "Batang" },
        { optionId: "c", text: "Akar" },
        { optionId: "d", text: "Bunga" },
      ],
      correctOptionId: "c",
      explanation: "Akar menyerap air dan mineral dari tanah.",
    },
    {
      questionId: "ipa-q6",
      text: "Sumber energi utama bagi kehidupan di Bumi adalah?",
      options: [
        { optionId: "a", text: "Angin" },
        { optionId: "b", text: "Air" },
        { optionId: "c", text: "Matahari" },
        { optionId: "d", text: "Listrik" },
      ],
      correctOptionId: "c",
      explanation: "Matahari adalah sumber energi utama.",
    },
    {
      questionId: "ipa-q7",
      text: "Hewan pemakan tumbuhan disebut?",
      options: [
        { optionId: "a", text: "Karnivora" },
        { optionId: "b", text: "Herbivora" },
        { optionId: "c", text: "Omnivora" },
        { optionId: "d", text: "Insektivora" },
      ],
      correctOptionId: "b",
      explanation: "Herbivora memakan tumbuhan.",
    },
    {
      questionId: "ipa-q8",
      text: "Gaya yang membuat benda jatuh ke bumi adalah?",
      options: [
        { optionId: "a", text: "Gaya magnet" },
        { optionId: "b", text: "Gaya listrik" },
        { optionId: "c", text: "Gaya gesek" },
        { optionId: "d", text: "Gaya gravitasi" },
      ],
      correctOptionId: "d",
      explanation: "Gravitasi menarik benda ke pusat bumi.",
    },
    {
      questionId: "ipa-q9",
      text: "Zat yang tidak dapat larut dalam air disebut?",
      options: [
        { optionId: "a", text: "Larutan" },
        { optionId: "b", text: "Gas" },
        { optionId: "c", text: "Padatan" },
        { optionId: "d", text: "Zat tidak larut" },
      ],
      correctOptionId: "d",
      explanation: "Zat tidak larut tidak bercampur dengan air.",
    },
    {
      questionId: "ipa-q10",
      text: "Bagian mata yang berfungsi mengatur cahaya masuk adalah?",
      options: [
        { optionId: "a", text: "Retina" },
        { optionId: "b", text: "Lensa" },
        { optionId: "c", text: "Iris" },
        { optionId: "d", text: "Kornea" },
      ],
      correctOptionId: "c",
      explanation: "Iris mengatur besar kecilnya pupil.",
    },
  ],
};
