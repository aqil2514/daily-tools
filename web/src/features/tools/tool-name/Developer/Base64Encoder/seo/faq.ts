import { LocalizedFAQ } from "@/@types/metadata";

export const base64FAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is Base64 encoding?",
      answer:
        "Base64 is an encoding scheme used to represent binary data in a text format using 64 ASCII characters. It is commonly used in data transfer, email attachments, and embedding binary data in text-based formats.\n\nLearn more on [Wikipedia – Base64](https://en.wikipedia.org/wiki/Base64).",
    },
    {
      question: "Is Base64 encryption?",
      answer:
        "No. Base64 is **not encryption**—it is only encoding. It does not provide security or confidentiality, only a way to represent data in a readable format.\n\nFor comparison between encoding and encryption, see [Encoding vs Encryption](https://en.wikipedia.org/wiki/Encoding).",
    },
    {
      question: "Does this tool send my data to a server?",
      answer:
        "No. All Base64 encoding and decoding happens **locally in your browser** using JavaScript. No data is uploaded or stored on any server.\n\nThis is similar to how client-side processing works in modern web applications. Learn more at [MDN Web Docs – Client-side JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs).",
    },
  ],

  id: [
    {
      question: "Apa itu encoding Base64?",
      answer:
        "Base64 adalah skema encoding yang mengubah data biner menjadi format teks menggunakan 64 karakter ASCII. Encoding ini sering digunakan pada email, API, dan penyimpanan data berbasis teks.\n\nBaca selengkapnya di [Wikipedia – Base64](https://id.wikipedia.org/wiki/Base64).",
    },
    {
      question: "Apakah Base64 itu enkripsi?",
      answer:
        "Bukan. Base64 **bukan enkripsi**, melainkan encoding. Base64 tidak memberikan keamanan atau perlindungan data, hanya mengubah format representasinya.\n\nPenjelasan perbedaannya bisa dibaca di [Encoding vs Enkripsi](https://id.wikipedia.org/wiki/Penyandian).",
    },
    {
      question: "Apakah data saya dikirim ke server?",
      answer:
        "Tidak. Semua proses encoding dan decoding dilakukan sepenuhnya di browser Anda (client-side). Data tidak dikirim, disimpan, atau diproses di server mana pun.\n\nKonsep ini umum digunakan pada aplikasi web modern. Pelajari lebih lanjut di [MDN – JavaScript di Browser](https://developer.mozilla.org/id/docs/Web/JavaScript).",
    },
  ],
};

export default base64FAQ;
