import { Locale } from "next-intl";
import { QuizMakerOutputData } from "../types/output";

type SampleData = Record<Locale, QuizMakerOutputData>;

export const quizSampleHTML: SampleData = {
  id: {
    version: "1",
    metadata: {
      title: "Kuis Dasar HTML",
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
        explanation: "<p> digunakan untuk membuat paragraf.",
      },
      {
        questionId: "html-q2",
        text: "Tag heading terbesar adalah?",
        options: [
          { optionId: "a", text: "<h6>" },
          { optionId: "b", text: "<h3>" },
          { optionId: "c", text: "<h1>" },
          { optionId: "d", text: "<header>" },
        ],
        correctOptionId: "c",
        explanation: "<h1> merupakan heading dengan ukuran terbesar.",
      },
      {
        questionId: "html-q3",
        text: "Atribut untuk menentukan tujuan link adalah?",
        options: [
          { optionId: "a", text: "src" },
          { optionId: "b", text: "href" },
          { optionId: "c", text: "link" },
          { optionId: "d", text: "to" },
        ],
        correctOptionId: "b",
        explanation: "`href` digunakan untuk menentukan URL tujuan.",
      },
      {
        questionId: "html-q4",
        text: "Tag yang digunakan untuk menampilkan gambar adalah?",
        options: [
          { optionId: "a", text: "<image>" },
          { optionId: "b", text: "<img>" },
          { optionId: "c", text: "<picture>" },
          { optionId: "d", text: "<src>" },
        ],
        correctOptionId: "b",
        explanation: "<img> digunakan untuk menampilkan gambar.",
      },
      {
        questionId: "html-q5",
        text: "Atribut alternatif pada gambar adalah?",
        options: [
          { optionId: "a", text: "title" },
          { optionId: "b", text: "desc" },
          { optionId: "c", text: "alt" },
          { optionId: "d", text: "label" },
        ],
        correctOptionId: "c",
        explanation: "`alt` berfungsi sebagai teks alternatif gambar.",
      },
      {
        questionId: "html-q6",
        text: "Tag untuk membuat daftar tidak berurutan adalah?",
        options: [
          { optionId: "a", text: "<ol>" },
          { optionId: "b", text: "<ul>" },
          { optionId: "c", text: "<li>" },
          { optionId: "d", text: "<list>" },
        ],
        correctOptionId: "b",
        explanation: "<ul> digunakan untuk unordered list.",
      },
      {
        questionId: "html-q7",
        text: "Tag yang digunakan untuk menerima input dari pengguna adalah?",
        options: [
          { optionId: "a", text: "<form>" },
          { optionId: "b", text: "<input>" },
          { optionId: "c", text: "<button>" },
          { optionId: "d", text: "<label>" },
        ],
        correctOptionId: "b",
        explanation: "<input> digunakan untuk menerima input pengguna.",
      },
      {
        questionId: "html-q8",
        text: "Elemen HTML yang bersifat inline adalah?",
        options: [
          { optionId: "a", text: "<div>" },
          { optionId: "b", text: "<p>" },
          { optionId: "c", text: "<span>" },
          { optionId: "d", text: "<section>" },
        ],
        correctOptionId: "c",
        explanation: "<span> merupakan elemen inline.",
      },
      {
        questionId: "html-q9",
        text: "Tag semantik yang digunakan untuk navigasi adalah?",
        options: [
          { optionId: "a", text: "<menu>" },
          { optionId: "b", text: "<nav>" },
          { optionId: "c", text: "<header>" },
          { optionId: "d", text: "<aside>" },
        ],
        correctOptionId: "b",
        explanation: "<nav> digunakan untuk area navigasi.",
      },
      {
        questionId: "html-q10",
        text: "Tag utama untuk membuat tabel adalah?",
        options: [
          { optionId: "a", text: "<table>" },
          { optionId: "b", text: "<grid>" },
          { optionId: "c", text: "<row>" },
          { optionId: "d", text: "<data>" },
        ],
        correctOptionId: "a",
        explanation: "<table> digunakan untuk membuat tabel.",
      },
    ],
  },

  en: {
    version: "1",
    metadata: {
      title: "HTML Fundamentals Quiz",
      description: "Basic HTML fundamentals for beginners",
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
        text: "Which tag is used to create a paragraph?",
        options: [
          { optionId: "a", text: "<div>" },
          { optionId: "b", text: "<p>" },
          { optionId: "c", text: "<span>" },
          { optionId: "d", text: "<br>" },
        ],
        correctOptionId: "b",
        explanation: "<p> is used to create paragraphs.",
      },
      {
        questionId: "html-q2",
        text: "Which is the largest heading tag?",
        options: [
          { optionId: "a", text: "<h6>" },
          { optionId: "b", text: "<h3>" },
          { optionId: "c", text: "<h1>" },
          { optionId: "d", text: "<header>" },
        ],
        correctOptionId: "c",
        explanation: "<h1> represents the largest heading.",
      },
      {
        questionId: "html-q3",
        text: "Which attribute defines the destination of a link?",
        options: [
          { optionId: "a", text: "src" },
          { optionId: "b", text: "href" },
          { optionId: "c", text: "link" },
          { optionId: "d", text: "to" },
        ],
        correctOptionId: "b",
        explanation: "`href` specifies the target URL.",
      },
      {
        questionId: "html-q4",
        text: "Which tag is used to display an image?",
        options: [
          { optionId: "a", text: "<image>" },
          { optionId: "b", text: "<img>" },
          { optionId: "c", text: "<picture>" },
          { optionId: "d", text: "<src>" },
        ],
        correctOptionId: "b",
        explanation: "<img> is used to display images.",
      },
      {
        questionId: "html-q5",
        text: "Which attribute provides alternative text for images?",
        options: [
          { optionId: "a", text: "title" },
          { optionId: "b", text: "desc" },
          { optionId: "c", text: "alt" },
          { optionId: "d", text: "label" },
        ],
        correctOptionId: "c",
        explanation: "`alt` provides alternative text for images.",
      },
      {
        questionId: "html-q6",
        text: "Which tag creates an unordered list?",
        options: [
          { optionId: "a", text: "<ol>" },
          { optionId: "b", text: "<ul>" },
          { optionId: "c", text: "<li>" },
          { optionId: "d", text: "<list>" },
        ],
        correctOptionId: "b",
        explanation: "<ul> is used for unordered lists.",
      },
      {
        questionId: "html-q7",
        text: "Which tag is used to receive user input?",
        options: [
          { optionId: "a", text: "<form>" },
          { optionId: "b", text: "<input>" },
          { optionId: "c", text: "<button>" },
          { optionId: "d", text: "<label>" },
        ],
        correctOptionId: "b",
        explanation: "<input> is used to receive user input.",
      },
      {
        questionId: "html-q8",
        text: "Which HTML element is inline?",
        options: [
          { optionId: "a", text: "<div>" },
          { optionId: "b", text: "<p>" },
          { optionId: "c", text: "<span>" },
          { optionId: "d", text: "<section>" },
        ],
        correctOptionId: "c",
        explanation: "<span> is an inline element.",
      },
      {
        questionId: "html-q9",
        text: "Which semantic tag is used for navigation?",
        options: [
          { optionId: "a", text: "<menu>" },
          { optionId: "b", text: "<nav>" },
          { optionId: "c", text: "<header>" },
          { optionId: "d", text: "<aside>" },
        ],
        correctOptionId: "b",
        explanation: "<nav> defines navigation links.",
      },
      {
        questionId: "html-q10",
        text: "Which tag is used to create a table?",
        options: [
          { optionId: "a", text: "<table>" },
          { optionId: "b", text: "<grid>" },
          { optionId: "c", text: "<row>" },
          { optionId: "d", text: "<data>" },
        ],
        correctOptionId: "a",
        explanation: "<table> is used to create tables.",
      },
    ],
  },
};
