import { LocalizedFAQ } from "@/@types/metadata";

export const jsonFormatterFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is JSON?",
      answer:
        "JSON (JavaScript Object Notation) is a lightweight data-interchange format commonly used for APIs and configuration files.\n\n" +
        "Learn more:\n" +
        "- [JSON.org](https://www.json.org/json-en.html)\n" +
        "- [RFC 8259 – JSON](https://www.rfc-editor.org/rfc/rfc8259)",
    },
    {
      question: "What does a JSON formatter do?",
      answer:
        "A JSON formatter formats JSON data with proper indentation and structure to make it easier to read and understand.",
    },
    {
      question: "What does JSON validation mean?",
      answer:
        "JSON validation checks whether JSON data follows correct syntax rules, such as proper brackets, commas, and quotes.\n\n" +
        "This tool validates JSON syntax, not JSON Schema.",
    },
    {
      question: "Can this tool detect JSON errors?",
      answer:
        "Yes. This tool highlights syntax errors so you can quickly fix invalid JSON.",
    },
    {
      question: "What is JSON minification?",
      answer:
        "JSON minification removes unnecessary spaces and line breaks to reduce file size, which can be useful for network transmission.",
    },
    {
      question: "Who should use a JSON formatter and validator?",
      answer:
        "This tool is useful for developers, QA engineers, and anyone working with APIs, configuration files, or JSON data.",
    },
    {
      question: "Is my JSON data sent to a server?",
      answer:
        "No. All formatting and validation happen locally in your browser. No data is uploaded or stored.",
    },
  ],

  id: [
    {
      question: "Apa itu JSON?",
      answer:
        "JSON (JavaScript Object Notation) adalah format pertukaran data ringan yang umum digunakan untuk API dan file konfigurasi.\n\n" +
        "Bacaan lanjutan:\n" +
        "- [JSON.org](https://www.json.org/json-en.html)\n" +
        "- [RFC 8259 – JSON](https://www.rfc-editor.org/rfc/rfc8259)",
    },
    {
      question: "Apa fungsi JSON formatter?",
      answer:
        "JSON formatter digunakan untuk merapikan struktur JSON dengan indentasi yang jelas agar lebih mudah dibaca dan dipahami.",
    },
    {
      question: "Apa yang dimaksud dengan validasi JSON?",
      answer:
        "Validasi JSON adalah proses memeriksa apakah struktur JSON sudah sesuai dengan aturan sintaks yang benar.\n\n" +
        "Alat ini hanya memvalidasi sintaks JSON, bukan JSON Schema.",
    },
    {
      question: "Apakah alat ini bisa mendeteksi error JSON?",
      answer:
        "Ya. Alat ini dapat mendeteksi dan menandai error sintaks JSON agar mudah diperbaiki.",
    },
    {
      question: "Apa itu minify JSON?",
      answer:
        "Minify JSON adalah proses menghapus spasi dan baris kosong untuk memperkecil ukuran data JSON.",
    },
    {
      question: "Siapa yang cocok menggunakan JSON Formatter & Validator?",
      answer:
        "Alat ini cocok untuk developer, QA, dan siapa pun yang bekerja dengan API, file konfigurasi, atau data JSON.",
    },
    {
      question: "Apakah data JSON saya disimpan atau dikirim ke server?",
      answer:
        "Tidak. Semua proses format dan validasi dilakukan langsung di browser tanpa menyimpan atau mengirim data ke server.",
    },
  ],
};

export default jsonFormatterFAQ;
