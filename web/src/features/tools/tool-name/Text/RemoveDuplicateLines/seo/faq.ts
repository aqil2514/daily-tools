import { LocalizedFAQ } from "@/@types/metadata";

export const removeDuplicateLinesFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What does remove duplicate lines mean?",
      answer:
        "Removing duplicate lines means deleting repeated lines of text and keeping only unique lines.\n\n" +
        "Related concept:\n" +
        "- [Wikipedia – Duplicate data](https://en.wikipedia.org/wiki/Data_deduplication)",
    },
    {
      question: "When should I remove duplicate lines?",
      answer:
        "You may need to remove duplicate lines when cleaning lists, logs, datasets, keywords, or copied text.",
    },
    {
      question: "How does this tool detect duplicate lines?",
      answer:
        "The tool compares each line of text and removes lines that are exactly the same.",
    },
    {
      question: "Does line order stay the same?",
      answer:
        "Yes. The original order of the first occurrence of each line is preserved.",
    },
    {
      question: "Who should use this tool?",
      answer:
        "This tool is useful for writers, developers, SEO practitioners, data cleaners, and anyone working with text lists.",
    },
    {
      question: "Is my text sent to a server?",
      answer:
        "No. All text processing is done locally in your browser. No text is uploaded or stored.",
    },
  ],

  id: [
    {
      question: "Apa arti menghapus baris duplikat?",
      answer:
        "Menghapus baris duplikat berarti menghilangkan baris teks yang berulang dan hanya menyisakan baris yang unik.\n\n" +
        "Konsep terkait:\n" +
        "- [Wikipedia – Duplicate data](https://en.wikipedia.org/wiki/Data_deduplication)",
    },
    {
      question: "Kapan saya perlu menghapus baris duplikat?",
      answer:
        "Penghapusan baris duplikat berguna saat membersihkan daftar, log, dataset, keyword, atau teks hasil salinan.",
    },
    {
      question: "Bagaimana alat ini mendeteksi baris duplikat?",
      answer:
        "Alat ini membandingkan setiap baris teks dan menghapus baris yang sama persis.",
    },
    {
      question: "Apakah urutan baris tetap dipertahankan?",
      answer:
        "Ya. Urutan kemunculan pertama dari setiap baris tetap dipertahankan.",
    },
    {
      question: "Siapa yang cocok menggunakan alat ini?",
      answer:
        "Alat ini cocok untuk penulis, developer, praktisi SEO, pengolah data, dan siapa pun yang bekerja dengan daftar teks.",
    },
    {
      question: "Apakah teks saya dikirim ke server?",
      answer:
        "Tidak. Semua proses dilakukan langsung di browser tanpa menyimpan atau mengirim teks.",
    },
  ],
};

export default removeDuplicateLinesFAQ;
