import { FAQItem } from "@/components/atoms/faq-section";

export const regexFAQ_en: FAQItem[] = [
  {
    question: "What is a regular expression?",
    answer:
      "A regular expression (regex) is a pattern used to match and manipulate text. It is commonly used for validation, searching, and text processing.",
  },
  {
    question: "Why does my regex show an error?",
    answer:
      "Regex patterns must follow strict syntax rules. A missing bracket, invalid escape, or incorrect quantifier can cause errors.",
  },
  {
    question: "What are regex flags?",
    answer:
      "Flags modify how regex behaves. Common flags include: g (global), i (case-insensitive), m (multi-line), s (dotall), and u (unicode).",
  },
  {
    question: "Can this tool highlight matches?",
    answer:
      "Yes. Matches can be detected and displayed instantly as you type. Highlighting can also be added if needed.",
  },
  {
    question: "What do the regex flags g, i, m, s, u, and y mean?",
    answer: `
Regex flags control how the regular expression behaves:

• **g (global)** — Finds all matches in the text, not just the first one.  
• **i (ignore case)** — Makes the match case-insensitive (A = a).  
• **m (multiline)** — ^ and $ match at each line break, not only the start or end of the whole text.  
• **s (dotAll)** — The dot (.) also matches newline characters.  
• **u (unicode)** — Enables full Unicode support, allowing advanced patterns and emoji-safe matching.  
• **y (sticky)** — Matches from the current index only; useful for iterative parsing.

These flags can be combined, for example: **gi**, **gms**, or **imu**.
  `,
  },
];

export const regexFAQ_id: FAQItem[] = [
  {
    question: "Apa itu regular expression (regex)?",
    answer:
      "Regex adalah pola yang digunakan untuk mencocokkan atau memproses teks. Sangat umum digunakan untuk validasi, pencarian, dan manipulasi string.",
  },
  {
    question: "Mengapa regex saya muncul error?",
    answer:
      "Regex harus mengikuti aturan sintaks yang ketat. Kurung yang hilang, escape yang salah, atau quantifier yang tidak tepat bisa menyebabkan error.",
  },
  {
    question: "Apa itu flags pada regex?",
    answer:
      "Flags mengubah cara regex bekerja. Contohnya: g (global), i (case-insensitive), m (multi-line), s (dotall), dan u (unicode).",
  },
  {
    question: "Apakah tool ini bisa highlight hasil?",
    answer:
      "Ya. Hasil pencocokan dapat ditampilkan secara instan. Highlight dapat ditambahkan jika diperlukan.",
  },
  {
    question: "Apa arti flags g, i, m, s, u, dan y pada regex?",
    answer: `
Flags menentukan bagaimana regex bekerja:

• **g (global)** — Mencari semua kecocokan, bukan hanya yang pertama.  
• **i (ignore case)** — Pencocokan tidak membedakan huruf besar dan kecil.  
• **m (multiline)** — ^ dan $ berlaku per baris, bukan hanya awal dan akhir seluruh teks.  
• **s (dotAll)** — Tanda titik (.) juga mencocokkan karakter newline.  
• **u (unicode)** — Mengaktifkan dukungan Unicode penuh, termasuk emoji dan karakter khusus.  
• **y (sticky)** — Mencocokkan mulai dari indeks tertentu saja; berguna untuk parsing bertahap.

Flags bisa digabungkan, misalnya: **gi**, **gms**, atau **imu**.
  `,
  },
];
