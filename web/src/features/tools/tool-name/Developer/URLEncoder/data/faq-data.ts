import { FAQItem } from "@/components/atoms/faq-section";

export const urlFAQ_en: FAQItem[] = [
  {
    question: "What is URL encoding?",
    answer:
      "URL encoding converts characters into a format that can be safely transmitted in URLs using percent-encoding.",
  },
  {
    question: "Why do URLs need to be encoded?",
    answer:
      "Some characters such as spaces, symbols, or non-ASCII text cannot be used directly in URLs. Encoding ensures compatibility and prevents errors.",
  },
  {
    question: "What characters must be encoded?",
    answer:
      "Characters like spaces, quotes, < > { } | \\ ^ and non-alphanumeric characters must be percent-encoded.",
  },
  {
    question: "Is URL encoding the same as Base64 encoding?",
    answer:
      "No. URL encoding uses percent-encoding while Base64 converts binary data to text. They solve different problems.",
  },
];

export const urlFAQ_id: FAQItem[] = [
  {
    question: "Apa itu URL encoding?",
    answer:
      "URL encoding mengubah karakter tertentu menjadi format percent-encoding agar aman digunakan dalam URL.",
  },
  {
    question: "Mengapa URL perlu di-encode?",
    answer:
      "Beberapa karakter seperti spasi, simbol, atau teks non-ASCII tidak dapat digunakan langsung dalam URL. Encoding memastikan URL tetap valid.",
  },
  {
    question: "Karakter apa saja yang harus di-encode?",
    answer:
      "Karakter seperti spasi, tanda kutip, < > { } | \\ ^ dan karakter non-alfanumerik lainnya harus diubah ke percent-encoding.",
  },
  {
    question: "Apakah URL encoding sama dengan Base64 encoding?",
    answer:
      "Tidak. URL encoding menggunakan percent-encoding, sementara Base64 mengubah data biner menjadi teks. Keduanya berbeda tujuan.",
  },
];
