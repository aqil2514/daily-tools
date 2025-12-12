import { LocalizedFAQ } from "@/@types/metadata";

export const base64FAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is Base64 encoding?",
      answer:
        "Base64 is an encoding scheme used to represent binary data in a text format using 64 ASCII characters.",
    },
    {
      question: "Is Base64 encryption?",
      answer:
        "No. Base64 is not encryption—it's only encoding. It does not provide security, only data representation.",
    },
    {
      question: "Does this tool send my data to a server?",
      answer:
        "No. All Base64 encoding and decoding happens locally in your browser. No data is uploaded.",
    },
  ],
  id: [
    {
      question: "Apa itu encoding Base64?",
      answer:
        "Base64 adalah skema encoding yang mengubah data biner menjadi format teks menggunakan 64 karakter ASCII.",
    },
    {
      question: "Apakah Base64 itu enkripsi?",
      answer:
        "Bukan. Base64 bukan enkripsi—hanya encoding. Tidak memberikan keamanan, hanya representasi data.",
    },
    {
      question: "Apakah data saya dikirim ke server?",
      answer:
        "Tidak. Semua proses encoding dan decoding dilakukan sepenuhnya di browser Anda tanpa mengunggah data.",
    },
  ],
};

export default base64FAQ;
