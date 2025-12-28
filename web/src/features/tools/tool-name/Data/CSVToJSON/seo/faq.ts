import { LocalizedFAQ } from "@/@types/metadata";

export const csvToJsonFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is CSV?",
      answer:
        "CSV (Comma-Separated Values) is a simple text format used to store tabular data, such as spreadsheets or database exports.\n\n" +
        "Learn more:\n" +
        "- [Wikipedia – CSV](https://en.wikipedia.org/wiki/Comma-separated_values)",
    },
    {
      question: "What is JSON?",
      answer:
        "JSON (JavaScript Object Notation) is a lightweight data format commonly used for APIs, configuration files, and data exchange.\n\n" +
        "Learn more:\n" +
        "- [Wikipedia – JSON](https://en.wikipedia.org/wiki/JSON)",
    },
    {
      question: "What does this CSV to JSON converter do?",
      answer:
        "This tool converts CSV data into structured JSON format, making it easier to use in APIs, applications, or data processing workflows.",
    },
    {
      question: "Does this tool support headers in CSV?",
      answer:
        "Yes. If your CSV contains headers, they will be used as object keys in the resulting JSON output.",
    },
    {
      question: "Is my data uploaded to a server?",
      answer:
        "No. All CSV to JSON conversion is performed entirely in your browser. Your data is never uploaded or stored.",
    },
    {
      question: "Who should use a CSV to JSON converter?",
      answer:
        "This tool is useful for developers, data analysts, and anyone who needs to convert spreadsheet or database exports into JSON format.",
    },
    {
      question: "When should I not use this tool?",
      answer:
        "If you are working with extremely large datasets, a dedicated desktop or backend data processing tool may be more suitable.",
    },
  ],

  id: [
    {
      question: "Apa itu CSV?",
      answer:
        "CSV (Comma-Separated Values) adalah format teks sederhana untuk menyimpan data berbentuk tabel, seperti spreadsheet atau hasil ekspor database.\n\n" +
        "Bacaan lanjutan:\n" +
        "- [Wikipedia – CSV](https://en.wikipedia.org/wiki/Comma-separated_values)",
    },
    {
      question: "Apa itu JSON?",
      answer:
        "JSON (JavaScript Object Notation) adalah format data ringan yang umum digunakan untuk API, file konfigurasi, dan pertukaran data.\n\n" +
        "Bacaan lanjutan:\n" +
        "- [Wikipedia – JSON](https://en.wikipedia.org/wiki/JSON)",
    },
    {
      question: "Apa fungsi alat CSV to JSON ini?",
      answer:
        "Alat ini digunakan untuk mengonversi data CSV menjadi format JSON agar lebih mudah digunakan dalam aplikasi, API, atau proses data.",
    },
    {
      question: "Apakah alat ini mendukung header CSV?",
      answer:
        "Ya. Jika CSV Anda memiliki header, header tersebut akan digunakan sebagai nama properti pada output JSON.",
    },
    {
      question: "Apakah data saya dikirim ke server?",
      answer:
        "Tidak. Semua proses konversi CSV ke JSON dilakukan langsung di browser tanpa mengunggah atau menyimpan data apa pun.",
    },
    {
      question: "Siapa yang cocok menggunakan CSV to JSON Converter?",
      answer:
        "Alat ini cocok untuk developer, analis data, maupun pengguna spreadsheet yang perlu mengubah data ke format JSON.",
    },
    {
      question: "Kapan sebaiknya tidak menggunakan alat ini?",
      answer:
        "Jika Anda memproses data berukuran sangat besar, sebaiknya gunakan alat pemrosesan data khusus di desktop atau backend.",
    },
  ],
};

export default csvToJsonFAQ;
