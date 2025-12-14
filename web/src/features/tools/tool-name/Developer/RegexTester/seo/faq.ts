import { LocalizedFAQ } from "@/@types/metadata";

export const regexTesterFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is a regular expression (regex)?",
      answer:
        "A regular expression (regex) is a sequence of characters that defines a search pattern, commonly used for string matching and text processing.\n\n" +
        "Learn more:\n" +
        "- [Wikipedia – Regular expression](https://en.wikipedia.org/wiki/Regular_expression)\n" +
        "- [MDN – Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)",
    },
    {
      question: "What does a regex tester do?",
      answer:
        "A regex tester allows you to test and debug regular expressions by showing which parts of the text match a given pattern in real time.",
    },
    {
      question: "What regex flags are commonly supported?",
      answer:
        "Common regex flags include `g` (global), `i` (case-insensitive), and `m` (multiline). These flags modify how the regex engine processes matches.",
    },
    {
      question: "Why should I use a regex tester?",
      answer:
        "Regex testers help you quickly verify patterns, debug matching issues, and learn how regular expressions behave with different inputs.",
    },
    {
      question: "Is this regex tester language-specific?",
      answer:
        "This tool follows JavaScript-style regular expressions, which are widely used in web development.",
    },
    {
      question: "Is my text sent to a server?",
      answer:
        "No. All regex testing is performed locally in your browser. No data is uploaded or stored.",
    },
  ],

  id: [
    {
      question: "Apa itu regular expression (regex)?",
      answer:
        "Regular expression (regex) adalah rangkaian karakter yang digunakan untuk mendefinisikan pola pencarian, umumnya dipakai untuk pencocokan dan pemrosesan teks.\n\n" +
        "Bacaan lanjutan:\n" +
        "- [Wikipedia – Regular expression](https://en.wikipedia.org/wiki/Regular_expression)\n" +
        "- [MDN – Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)",
    },
    {
      question: "Apa fungsi Regex Tester?",
      answer:
        "Regex Tester digunakan untuk menguji dan melakukan debug pola regex dengan menampilkan hasil pencocokan secara langsung.",
    },
    {
      question: "Apa saja flags regex yang umum digunakan?",
      answer:
        "Flags regex yang umum antara lain `g` (global), `i` (case-insensitive), dan `m` (multiline). Flags ini memengaruhi cara regex memproses teks.",
    },
    {
      question: "Mengapa saya perlu menggunakan Regex Tester?",
      answer:
        "Regex Tester membantu memverifikasi pola, menemukan kesalahan pencocokan, dan mempelajari perilaku regex dengan cepat.",
    },
    {
      question: "Apakah Regex Tester ini spesifik untuk bahasa tertentu?",
      answer:
        "Alat ini mengikuti gaya regular expression JavaScript yang umum digunakan dalam pengembangan web.",
    },
    {
      question: "Apakah teks saya dikirim ke server?",
      answer:
        "Tidak. Semua proses pengujian regex dilakukan langsung di browser tanpa menyimpan atau mengirim data ke server.",
    },
  ],
};

export default regexTesterFAQ;
