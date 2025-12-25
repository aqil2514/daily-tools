import { QuizMakerOutputData } from "../types/output";

export const quizSampleHTML: QuizMakerOutputData = {
  version: "1",
  metadata: {
    title: "HTML Fundamentals Quiz",
    description: "Dasar-dasar HTML untuk pemula",
    config: {
      shuffleQuestions: false,
      shuffleOptions: true,
      revealCorrectAnswer: true,
      timeLimitSeconds: 480,
    },
  },
  questions: [
    {
      questionId: "html-q1",
      text: "Tag untuk membuat paragraf?",
      options: [
        { optionId: "a", text: "<div>" },
        { optionId: "b", text: "<p>" },
        { optionId: "c", text: "<span>" },
        { optionId: "d", text: "<br>" },
      ],
      correctOptionId: "b",
      explanation: "<p> digunakan untuk paragraf.",
    },
    {
      questionId: "html-q2",
      text: "Tag heading terbesar?",
      options: [
        { optionId: "a", text: "<h6>" },
        { optionId: "b", text: "<h3>" },
        { optionId: "c", text: "<h1>" },
        { optionId: "d", text: "<header>" },
      ],
      correctOptionId: "c",
      explanation: "<h1> adalah heading terbesar.",
    },
    {
      questionId: "html-q3",
      text: "Atribut untuk link tujuan?",
      options: [
        { optionId: "a", text: "src" },
        { optionId: "b", text: "href" },
        { optionId: "c", text: "link" },
        { optionId: "d", text: "to" },
      ],
      correctOptionId: "b",
      explanation: "`href` menentukan URL tujuan.",
    },
    {
      questionId: "html-q4",
      text: "Tag untuk gambar?",
      options: [
        { optionId: "a", text: "<image>" },
        { optionId: "b", text: "<img>" },
        { optionId: "c", text: "<picture>" },
        { optionId: "d", text: "<src>" },
      ],
      correctOptionId: "b",
      explanation: "<img> digunakan menampilkan gambar.",
    },
    {
      questionId: "html-q5",
      text: "Atribut alternatif gambar?",
      options: [
        { optionId: "a", text: "title" },
        { optionId: "b", text: "desc" },
        { optionId: "c", text: "alt" },
        { optionId: "d", text: "label" },
      ],
      correctOptionId: "c",
      explanation: "`alt` untuk teks alternatif.",
    },
    {
      questionId: "html-q6",
      text: "Tag list tidak berurutan?",
      options: [
        { optionId: "a", text: "<ol>" },
        { optionId: "b", text: "<ul>" },
        { optionId: "c", text: "<li>" },
        { optionId: "d", text: "<list>" },
      ],
      correctOptionId: "b",
      explanation: "<ul> adalah unordered list.",
    },
    {
      questionId: "html-q7",
      text: "Tag untuk input form?",
      options: [
        { optionId: "a", text: "<form>" },
        { optionId: "b", text: "<input>" },
        { optionId: "c", text: "<button>" },
        { optionId: "d", text: "<label>" },
      ],
      correctOptionId: "b",
      explanation: "<input> menerima input user.",
    },
    {
      questionId: "html-q8",
      text: "Elemen inline?",
      options: [
        { optionId: "a", text: "<div>" },
        { optionId: "b", text: "<p>" },
        { optionId: "c", text: "<span>" },
        { optionId: "d", text: "<section>" },
      ],
      correctOptionId: "c",
      explanation: "<span> adalah inline element.",
    },
    {
      questionId: "html-q9",
      text: "Tag semantic untuk navigasi?",
      options: [
        { optionId: "a", text: "<menu>" },
        { optionId: "b", text: "<nav>" },
        { optionId: "c", text: "<header>" },
        { optionId: "d", text: "<aside>" },
      ],
      correctOptionId: "b",
      explanation: "<nav> untuk navigasi.",
    },
    {
      questionId: "html-q10",
      text: "Tag untuk tabel?",
      options: [
        { optionId: "a", text: "<table>" },
        { optionId: "b", text: "<grid>" },
        { optionId: "c", text: "<row>" },
        { optionId: "d", text: "<data>" },
      ],
      correctOptionId: "a",
      explanation: "<table> membuat tabel.",
    },
  ],
};
