import { FAQItem } from "@/components/atoms/faq-section";

export const htmlFAQ_en: FAQItem[] = [
  {
    question: "What is HTML escaping?",
    answer:
      "HTML escaping converts special characters such as <, >, and & into safe HTML entities to prevent unintended rendering or security issues such as XSS.",
  },
  {
    question: "Why do I need to escape HTML?",
    answer:
      "Escaping is required when displaying user input or code snippets so that the browser does not interpret them as actual HTML or scripts.",
  },
  {
    question: "What is the difference between escape and unescape?",
    answer:
      "Escape converts characters into HTML entities, while unescape converts encoded entities back into readable text.",
  },
  {
    question: "Does escaping HTML make it secure?",
    answer:
      "Escaping helps prevent XSS but is not a full security solution. Always combine it with proper input sanitization.",
  },
];

export const htmlFAQ_id: FAQItem[] = [
  {
    question: "Apa itu HTML escaping?",
    answer:
      "HTML escaping mengubah karakter khusus seperti <, >, dan & menjadi HTML entities agar tidak dirender sebagai HTML atau script.",
  },
  {
    question: "Mengapa perlu melakukan HTML escape?",
    answer:
      "Escape diperlukan saat menampilkan input pengguna atau kode agar browser tidak mengeksekusinya sebagai HTML atau JavaScript.",
  },
  {
    question: "Apa perbedaan escape dan unescape?",
    answer:
      "Escape mengubah karakter menjadi HTML entities, sedangkan unescape mengembalikan entities menjadi teks biasa.",
  },
  {
    question: "Apakah HTML escape membuat aplikasi aman?",
    answer:
      "HTML escape membantu mencegah XSS, tetapi bukan solusi keamanan lengkap. Sanitasi input tetap diperlukan.",
  },
];
