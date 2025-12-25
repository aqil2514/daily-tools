import { Locale } from "next-intl";
import { QuizMakerOutputData } from "../types/output";

type SampleData = Record<Locale, QuizMakerOutputData>;

export const quizSampleJS: SampleData = {
  id: {
    version: "1",
    metadata: {
      title: "Kuis Dasar JavaScript",
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
        explanation:
          "`let` digunakan untuk mendeklarasikan variabel dengan cakupan block (block scope).",
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
        explanation:
          "Ini merupakan bug lama di JavaScript yang masih dipertahankan demi kompatibilitas.",
      },
      {
        questionId: "js-q3",
        text: "Method array untuk menambahkan data di akhir array adalah?",
        options: [
          { optionId: "a", text: "push()" },
          { optionId: "b", text: "pop()" },
          { optionId: "c", text: "shift()" },
          { optionId: "d", text: "unshift()" },
        ],
        correctOptionId: "a",
        explanation: "`push()` menambahkan satu atau lebih elemen ke akhir array.",
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
        explanation: "Angka 0 termasuk nilai falsy di JavaScript.",
      },
      {
        questionId: "js-q5",
        text: "Simbol untuk strict equality di JavaScript adalah?",
        options: [
          { optionId: "a", text: "==" },
          { optionId: "b", text: "!=" },
          { optionId: "c", text: "===" },
          { optionId: "d", text: "!==" },
        ],
        correctOptionId: "c",
        explanation: "`===` membandingkan nilai sekaligus tipe data.",
      },
      {
        questionId: "js-q6",
        text: "Function yang tidak memiliki nama disebut?",
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
        text: "Method untuk mengubah JSON string menjadi object JavaScript adalah?",
        options: [
          { optionId: "a", text: "JSON.parse()" },
          { optionId: "b", text: "JSON.stringify()" },
          { optionId: "c", text: "parseInt()" },
          { optionId: "d", text: "toObject()" },
        ],
        correctOptionId: "a",
        explanation:
          "`JSON.parse()` mengonversi string JSON menjadi object JavaScript.",
      },
      {
        questionId: "js-q8",
        text: "Scope dari keyword `var` bersifat?",
        options: [
          { optionId: "a", text: "Block scope" },
          { optionId: "b", text: "Function scope" },
          { optionId: "c", text: "Global only" },
          { optionId: "d", text: "Module scope" },
        ],
        correctOptionId: "b",
        explanation: "`var` memiliki cakupan function scope, bukan block scope.",
      },
      {
        questionId: "js-q9",
        text: "Apa kegunaan utama dari `Array.map()`?",
        options: [
          { optionId: "a", text: "Menyaring data" },
          { optionId: "b", text: "Mengubah setiap item array" },
          { optionId: "c", text: "Menghapus item array" },
          { optionId: "d", text: "Menggabungkan array" },
        ],
        correctOptionId: "b",
        explanation:
          "`map()` digunakan untuk mentransformasi setiap elemen dalam array.",
      },
      {
        questionId: "js-q10",
        text: "`NaN === NaN` akan menghasilkan nilai?",
        options: [
          { optionId: "a", text: "true" },
          { optionId: "b", text: "false" },
          { optionId: "c", text: "undefined" },
          { optionId: "d", text: "error" },
        ],
        correctOptionId: "b",
        explanation: "NaN tidak pernah sama dengan nilai apa pun, termasuk dirinya sendiri.",
      },
    ],
  },

  en: {
    version: "1",
    metadata: {
      title: "JavaScript Basics Quiz",
      description: "Test your basic understanding of JavaScript",
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
        text: "What is the purpose of the `let` keyword in JavaScript?",
        options: [
          { optionId: "a", text: "Declare variables" },
          { optionId: "b", text: "Create functions" },
          { optionId: "c", text: "Import modules" },
          { optionId: "d", text: "Delete variables" },
        ],
        correctOptionId: "a",
        explanation:
          "`let` is used to declare variables with block scope.",
      },
      {
        questionId: "js-q2",
        text: "What is the result of `typeof null`?",
        options: [
          { optionId: "a", text: "null" },
          { optionId: "b", text: "object" },
          { optionId: "c", text: "undefined" },
          { optionId: "d", text: "boolean" },
        ],
        correctOptionId: "b",
        explanation:
          "This is a long-standing bug in JavaScript kept for backward compatibility.",
      },
      {
        questionId: "js-q3",
        text: "Which array method adds an element to the end of an array?",
        options: [
          { optionId: "a", text: "push()" },
          { optionId: "b", text: "pop()" },
          { optionId: "c", text: "shift()" },
          { optionId: "d", text: "unshift()" },
        ],
        correctOptionId: "a",
        explanation: "`push()` adds one or more elements to the end of an array.",
      },
      {
        questionId: "js-q4",
        text: "What is the result of `Boolean(0)`?",
        options: [
          { optionId: "a", text: "true" },
          { optionId: "b", text: "false" },
          { optionId: "c", text: "null" },
          { optionId: "d", text: "undefined" },
        ],
        correctOptionId: "b",
        explanation: "0 is considered a falsy value in JavaScript.",
      },
      {
        questionId: "js-q5",
        text: "Which operator represents strict equality in JavaScript?",
        options: [
          { optionId: "a", text: "==" },
          { optionId: "b", text: "!=" },
          { optionId: "c", text: "===" },
          { optionId: "d", text: "!==" },
        ],
        correctOptionId: "c",
        explanation:
          "`===` compares both value and data type.",
      },
      {
        questionId: "js-q6",
        text: "A function without a name is called?",
        options: [
          { optionId: "a", text: "Named function" },
          { optionId: "b", text: "Arrow function" },
          { optionId: "c", text: "Anonymous function" },
          { optionId: "d", text: "Async function" },
        ],
        correctOptionId: "c",
        explanation: "A function without a name is called an anonymous function.",
      },
      {
        questionId: "js-q7",
        text: "Which method converts a JSON string into a JavaScript object?",
        options: [
          { optionId: "a", text: "JSON.parse()" },
          { optionId: "b", text: "JSON.stringify()" },
          { optionId: "c", text: "parseInt()" },
          { optionId: "d", text: "toObject()" },
        ],
        correctOptionId: "a",
        explanation:
          "`JSON.parse()` converts a JSON string into a JavaScript object.",
      },
      {
        questionId: "js-q8",
        text: "What is the scope of the `var` keyword?",
        options: [
          { optionId: "a", text: "Block scope" },
          { optionId: "b", text: "Function scope" },
          { optionId: "c", text: "Global only" },
          { optionId: "d", text: "Module scope" },
        ],
        correctOptionId: "b",
        explanation: "`var` has function scope, not block scope.",
      },
      {
        questionId: "js-q9",
        text: "What is the main purpose of `Array.map()`?",
        options: [
          { optionId: "a", text: "Filter data" },
          { optionId: "b", text: "Transform each array item" },
          { optionId: "c", text: "Remove array items" },
          { optionId: "d", text: "Merge arrays" },
        ],
        correctOptionId: "b",
        explanation:
          "`map()` transforms each element in an array.",
      },
      {
        questionId: "js-q10",
        text: "What is the result of `NaN === NaN`?",
        options: [
          { optionId: "a", text: "true" },
          { optionId: "b", text: "false" },
          { optionId: "c", text: "undefined" },
          { optionId: "d", text: "error" },
        ],
        correctOptionId: "b",
        explanation:
          "NaN is never equal to any value, including itself.",
      },
    ],
  },
};
