import { FAQItem } from "@/components/atoms/faq-section";

const enUUIDController = {
  "btn-generate": "Generate UUIDs",

  version: "UUID Version",
  "version-placeholder": "Select Version",

  "version-v1": "UUID v1 — Timestamp based",
  "version-v4": "UUID v4 — Random",
  "version-v7": "UUID v7 — Time-ordered (Recommended)",

  amount: "Amount",
  "amount-placeholder": "1 - 100",
  "amount-minimum": "Minimum value is 1",

  "toast-error-invalid": "Please enter a valid amount between 1 and 100.",
  "toast-success-generated": "UUIDs generated successfully!",
} as const;

const idUUIDController = {
  "btn-generate": "Buat UUID",

  version: "Versi UUID",
  "version-placeholder": "Pilih Versi",

  "version-v1": "UUID v1 — Berdasarkan timestamp",
  "version-v4": "UUID v4 — Acak",
  "version-v7": "UUID v7 — Berurutan waktu (Direkomendasikan)",

  amount: "Jumlah",
  "amount-placeholder": "1 - 100",
  "amount-minimum": "Nilai minimum adalah 1",

  "toast-error-invalid": "Masukkan jumlah yang valid antara 1 hingga 100.",
  "toast-success-generated": "UUID berhasil dibuat!",
} as const;

export const i18nUUIDController = {
  en: enUUIDController,
  id: idUUIDController,
};

const enUUIDFormat = {
  "use-dash": "Use Dashes",
  "use-dash-desc": "Format UUID with or without dashes",

  uppercase: "Uppercase",
  "uppercase-desc": "Convert UUID letters to uppercase",

  "copy-all": "Copy All",
  "copy-all-success": "Copied all UUIDs!",

  copied: "Copied!",
} as const;

const idUUIDFormat = {
  "use-dash": "Gunakan Tanda Hubung",
  "use-dash-desc": "Format UUID dengan atau tanpa tanda hubung",

  uppercase: "Huruf Kapital",
  "uppercase-desc": "Ubah huruf UUID menjadi kapital",

  "copy-all": "Salin Semua",
  "copy-all-success": "Berhasil menyalin semua UUID!",

  copied: "Disalin!",
} as const;

export const i18nUUIDFormat = {
  en: enUUIDFormat,
  id: idUUIDFormat,
};

const enUUIDOutput = {
  title: "Generated UUIDs",
  empty: "Generate UUIDs to see them here.",
  "copy-success": "Copied to clipboard!",
  copy: "Copy",
  copied: "Copied!",
} as const;

const idUUIDOutput = {
  title: "UUID yang Dihasilkan",
  empty: "Buat UUID untuk melihat hasilnya di sini.",
  "copy-success": "Berhasil disalin!",
  copy: "Salin",
  copied: "Disalin!",
} as const;

export const i18nUUIDOutput = {
  en: enUUIDOutput,
  id: idUUIDOutput,
};

export const uuidFAQ_en: FAQItem[] = [
  {
    question: "What is a UUID?",
    answer:
      "A UUID (Universally Unique Identifier) is a 128-bit unique identifier commonly used in databases, distributed systems, and applications that require globally unique values without collisions.",
  },
  {
    question: "Which UUID version should I use?",
    answer:
      "UUID v4 is the most commonly used version because it is fully random. UUID v7 is recommended for modern systems because it is time-ordered, sortable, and optimized for logs and event systems.",
  },
  {
    question: "What is the difference between UUID v4 and v7?",
    answer:
      "UUID v4 is random, while UUID v7 is based on timestamps. UUID v7 produces sortable values and is often preferred for new systems that require ordered data.",
  },
  {
    question: "Are UUIDs secure?",
    answer:
      "UUIDs are unique but not encrypted. They should not be used to store or expose sensitive information. For security-sensitive identifiers, additional hashing or encryption may be needed.",
  },
  {
    question: "What does a UUID without dashes mean?",
    answer:
      "It is the same UUID, only displayed in a compact format. Dashes are purely for readability and do not affect the underlying identifier.",
  },
  {
    question: "Can a UUID collide?",
    answer:
      "The probability of a UUID v4 collision is extremely low—practically zero. With 122 bits of randomness, the chance of two UUIDs being identical is astronomically small.",
  },
  {
    question: "Is UUID better than auto-increment IDs?",
    answer:
      "UUIDs are better for distributed systems, syncing data, and avoiding guessable IDs. However, auto-increment IDs are faster and smaller. The best choice depends on your system's needs.",
  },
];

export const uuidFAQ_id: FAQItem[] = [
  {
    question: "Apa itu UUID?",
    answer:
      "UUID (Universally Unique Identifier) adalah pengenal 128-bit yang dirancang agar unik secara global. Biasanya digunakan pada database, sistem terdistribusi, dan aplikasi yang membutuhkan ID unik tanpa bentrok.",
  },
  {
    question: "UUID versi mana yang sebaiknya saya gunakan?",
    answer:
      "UUID v4 adalah versi yang paling umum karena bersifat acak sepenuhnya. UUID v7 direkomendasikan untuk sistem modern karena berurutan berdasarkan waktu, mudah diurutkan, dan cocok untuk log serta event.",
  },
  {
    question: "Apa perbedaan antara UUID v4 dan v7?",
    answer:
      "UUID v4 dihasilkan secara acak, sedangkan UUID v7 menggunakan timestamp. UUID v7 menghasilkan nilai yang mudah diurutkan dan lebih cocok untuk sistem yang membutuhkan data berurutan.",
  },
  {
    question: "Apakah UUID aman?",
    answer:
      "UUID memang unik, tetapi tidak terenkripsi. UUID tidak cocok untuk menyimpan atau menampilkan informasi sensitif. Untuk kebutuhan keamanan, gunakan hashing atau enkripsi tambahan.",
  },
  {
    question: "Apa arti UUID tanpa tanda hubung?",
    answer:
      "UUID tersebut sama saja, hanya tampil dalam format yang lebih ringkas. Tanda hubung hanyalah format visual dan tidak memengaruhi nilai UUID.",
  },
  {
    question: "Apakah UUID bisa bentrok?",
    answer:
      "Kemungkinan UUID v4 mengalami bentrok sangatlah kecil—hampir nol. Dengan 122 bit nilai acak, peluang dua UUID sama persis sangatlah kecil secara astronomis.",
  },
  {
    question: "Apakah UUID lebih baik dari auto-increment?",
    answer:
      "UUID lebih baik untuk sistem terdistribusi, sinkronisasi data, dan mencegah ID yang mudah ditebak. Namun auto-increment lebih cepat dan lebih ringan. Pilihan terbaik tergantung kebutuhan sistem Anda.",
  },
];
