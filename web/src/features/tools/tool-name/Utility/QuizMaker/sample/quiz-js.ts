import { QuizMakerOutputData } from "../types/output";

export const quizSampleJS: QuizMakerOutputData = {
  version: "1",
  metadata: {
    title: "JavaScript Basics Quiz",
    description: "Uji pemahaman dasar JavaScript",
    config: {
      shuffleQuestions: true,
      shuffleOptions: true,
      revealCorrectAnswer: true,
      timeLimitSeconds: 600,
    },
  },
  questions: [
    {
      questionId: "js-q1",
      text: "Apa kegunaan keyword `let` di JavaScript?",
      options: [
        { optionId: "a", text: "Mendeklarasikan variabel" },
        { optionId: "b", text: "Membuat fungsi" },
        { optionId: "c", text: "Mengimpor module" },
        { optionId: "d", text: "Menghapus variabel" },
      ],
      correctOptionId: "a",
      explanation: "`let` digunakan untuk mendeklarasikan variabel dengan block scope.",
    },
    {
      questionId: "js-q2",
      text: "Tipe data hasil dari `typeof null` adalah?",
      options: [
        { optionId: "a", text: "null" },
        { optionId: "b", text: "object" },
        { optionId: "c", text: "undefined" },
        { optionId: "d", text: "boolean" },
      ],
      correctOptionId: "b",
      explanation: "Ini adalah bug lama di JavaScript.",
    },
    {
      questionId: "js-q3",
      text: "Method array untuk menambah data di akhir?",
      options: [
        { optionId: "a", text: "push()" },
        { optionId: "b", text: "pop()" },
        { optionId: "c", text: "shift()" },
        { optionId: "d", text: "unshift()" },
      ],
      correctOptionId: "a",
      explanation: "`push()` menambah elemen di akhir array.",
    },
    {
      questionId: "js-q4",
      text: "Apa hasil dari `Boolean(0)`?",
      options: [
        { optionId: "a", text: "true" },
        { optionId: "b", text: "false" },
        { optionId: "c", text: "null" },
        { optionId: "d", text: "undefined" },
      ],
      correctOptionId: "b",
      explanation: "0 adalah falsy value.",
    },
    {
      questionId: "js-q5",
      text: "Simbol strict equality adalah?",
      options: [
        { optionId: "a", text: "==" },
        { optionId: "b", text: "!=" },
        { optionId: "c", text: "===" },
        { optionId: "d", text: "!==" },
      ],
      correctOptionId: "c",
      explanation: "`===` membandingkan nilai dan tipe.",
    },
    {
      questionId: "js-q6",
      text: "Function tanpa nama disebut?",
      options: [
        { optionId: "a", text: "Named function" },
        { optionId: "b", text: "Arrow function" },
        { optionId: "c", text: "Anonymous function" },
        { optionId: "d", text: "Async function" },
      ],
      correctOptionId: "c",
      explanation: "Function tanpa nama disebut anonymous function.",
    },
    {
      questionId: "js-q7",
      text: "Method untuk mengubah JSON string ke object?",
      options: [
        { optionId: "a", text: "JSON.parse()" },
        { optionId: "b", text: "JSON.stringify()" },
        { optionId: "c", text: "parseInt()" },
        { optionId: "d", text: "toObject()" },
      ],
      correctOptionId: "a",
      explanation: "`JSON.parse()` mengubah string JSON ke object.",
    },
    {
      questionId: "js-q8",
      text: "Scope `var` bersifat?",
      options: [
        { optionId: "a", text: "Block scope" },
        { optionId: "b", text: "Function scope" },
        { optionId: "c", text: "Global only" },
        { optionId: "d", text: "Module scope" },
      ],
      correctOptionId: "b",
      explanation: "`var` memiliki function scope.",
    },
    {
      questionId: "js-q9",
      text: "Apa kegunaan `Array.map()`?",
      options: [
        { optionId: "a", text: "Filter data" },
        { optionId: "b", text: "Mengubah setiap item array" },
        { optionId: "c", text: "Menghapus item" },
        { optionId: "d", text: "Menggabungkan array" },
      ],
      correctOptionId: "b",
      explanation: "`map()` mentransformasi setiap elemen array.",
    },
    {
      questionId: "js-q10",
      text: "`NaN === NaN` bernilai?",
      options: [
        { optionId: "a", text: "true" },
        { optionId: "b", text: "false" },
        { optionId: "c", text: "undefined" },
        { optionId: "d", text: "error" },
      ],
      correctOptionId: "b",
      explanation: "NaN tidak sama dengan dirinya sendiri.",
    },
  ],
};
