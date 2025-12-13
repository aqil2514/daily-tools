import { LocalizedFAQ } from "@/@types/metadata";

export const uuidGeneratorFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is a UUID?",
      answer:
        "UUID (Universally Unique Identifier) is a 128-bit identifier used to uniquely identify information in distributed systems.\n\n" +
        "Learn more:\n" +
        "- [Wikipedia – Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)\n" +
        "- [RFC 4122 – UUID](https://www.rfc-editor.org/rfc/rfc4122)",
    },
    {
      question: "What is the difference between UUID v1, v4, and v7?",
      answer:
        "UUID v1 is time-based, UUID v4 is randomly generated, and UUID v7 is time-ordered with better database index performance.\n\n" +
        "UUID v7 is designed to be sortable while maintaining randomness.",
    },
    {
      question: "When should I use UUID v4?",
      answer:
        "UUID v4 is commonly used when you need a simple, random, and collision-resistant identifier without exposing time or system information.",
    },
    {
      question: "When should I use UUID v7?",
      answer:
        "UUID v7 is suitable for databases and systems that benefit from time-ordered identifiers, such as logs or high-write tables.",
    },
    {
      question: "Are UUIDs secure or encrypted?",
      answer:
        "No. UUIDs are not encrypted and should not be used as security tokens or secrets. They are identifiers, not authentication mechanisms.",
    },
    {
      question: "Is this UUID generator safe to use?",
      answer:
        "Yes. UUIDs are generated locally in your browser. No data is sent to or stored on any server.",
    },
    {
      question: "Who should use a UUID generator?",
      answer:
        "UUID generators are widely used by developers for database primary keys, testing, API identifiers, and distributed systems.",
    },
  ],

  id: [
    {
      question: "Apa itu UUID?",
      answer:
        "UUID (Universally Unique Identifier) adalah pengenal 128-bit yang digunakan untuk mengidentifikasi data secara unik dalam sistem terdistribusi.\n\n" +
        "Bacaan lanjutan:\n" +
        "- [Wikipedia – Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)\n" +
        "- [RFC 4122 – UUID](https://www.rfc-editor.org/rfc/rfc4122)",
    },
    {
      question: "Apa perbedaan UUID v1, v4, dan v7?",
      answer:
        "UUID v1 berbasis waktu, UUID v4 bersifat acak, dan UUID v7 memiliki urutan waktu yang lebih ramah untuk performa database.\n\n" +
        "UUID v7 dirancang agar tetap acak namun bisa diurutkan.",
    },
    {
      question: "Kapan sebaiknya menggunakan UUID v4?",
      answer:
        "UUID v4 cocok digunakan ketika Anda membutuhkan ID acak yang sederhana tanpa mengekspose informasi waktu atau sistem.",
    },
    {
      question: "Kapan sebaiknya menggunakan UUID v7?",
      answer:
        "UUID v7 cocok untuk database atau sistem yang membutuhkan ID berurutan berdasarkan waktu, seperti log atau tabel dengan banyak penulisan data.",
    },
    {
      question: "Apakah UUID aman atau terenkripsi?",
      answer:
        "Tidak. UUID bukan data terenkripsi dan tidak boleh digunakan sebagai token keamanan atau rahasia.",
    },
    {
      question: "Apakah UUID Generator ini aman digunakan?",
      answer:
        "Ya. UUID dihasilkan langsung di browser tanpa mengirim atau menyimpan data ke server.",
    },
    {
      question: "Siapa yang cocok menggunakan UUID Generator?",
      answer:
        "UUID Generator umum digunakan oleh developer untuk primary key database, testing, API identifier, dan sistem terdistribusi.",
    },
  ],
};

export default uuidGeneratorFAQ;
