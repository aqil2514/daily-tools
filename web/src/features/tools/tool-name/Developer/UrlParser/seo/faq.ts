import { LocalizedFAQ } from "@/@types/metadata";

export const urlParserFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is a URL parser?",
      answer:
        "A URL parser is a tool that breaks down a URL into its individual components such as protocol, hostname, path, query parameters, and fragment.\n\n" +
        "Related concept:\n" +
        "- [Wikipedia – Uniform Resource Locator](https://en.wikipedia.org/wiki/Uniform_Resource_Locator)",
    },
    {
      question: "What parts of a URL can this tool parse?",
      answer:
        "This tool parses protocol, authentication info, hostname, port, pathname, query parameters, and hash fragments.",
    },
    {
      question: "Can this tool extract query parameters?",
      answer:
        "Yes. All query parameters are extracted and displayed individually, including duplicated keys and array-style parameters.",
    },
    {
      question: "Is this URL parser useful for developers?",
      answer:
        "Yes. Developers can use this tool to inspect URL structures, debug query strings, and better understand how URLs are constructed.",
    },
    {
      question: "Is my URL data stored or sent to a server?",
      answer:
        "No. All parsing is done locally in your browser. No URL data is uploaded, stored, or shared.",
    },
  ],

  id: [
    {
      question: "Apa itu URL parser?",
      answer:
        "URL parser adalah alat untuk menguraikan URL menjadi bagian-bagian seperti protokol, hostname, path, parameter query, dan fragmen.\n\n" +
        "Konsep terkait:\n" +
        "- [Wikipedia – Uniform Resource Locator](https://en.wikipedia.org/wiki/Uniform_Resource_Locator)",
    },
    {
      question: "Bagian URL apa saja yang bisa diparsing?",
      answer:
        "Alat ini mem-parsing protokol, informasi autentikasi, hostname, port, pathname, parameter query, dan fragmen hash.",
    },
    {
      question: "Apakah tool ini bisa mengekstrak parameter query?",
      answer:
        "Ya. Semua parameter query ditampilkan satu per satu, termasuk key duplikat dan parameter berbentuk array.",
    },
    {
      question: "Apakah URL parser ini berguna untuk developer?",
      answer:
        "Ya. Tool ini berguna untuk memeriksa struktur URL, debugging query string, dan memahami cara kerja URL.",
    },
    {
      question: "Apakah data URL saya disimpan atau dikirim ke server?",
      answer:
        "Tidak. Semua proses parsing dilakukan langsung di browser tanpa menyimpan atau mengirim data ke server.",
    },
  ],
};

export default urlParserFAQ;
