import { LocalizedFAQ } from "@/@types/metadata";

export const htmlEscapeFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is HTML escaping?",
      answer:
        "HTML escaping is the process of converting special characters like `<`, `>`, and `&` into HTML entities so they are displayed as text instead of being interpreted as HTML.\n\n" +
        "Learn more:\n" +
        "- [MDN – HTML entities](https://developer.mozilla.org/en-US/docs/Glossary/Entity)\n" +
        "- [OWASP – Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)",
    },
    {
      question: "Why is HTML escaping important?",
      answer:
        "HTML escaping helps prevent Cross-Site Scripting (XSS) by ensuring user-generated content is displayed safely without executing scripts.",
    },
    {
      question: "What is the difference between escape and unescape?",
      answer:
        "Escaping converts special characters into HTML entities, while unescaping converts HTML entities back into readable characters.",
    },
    {
      question: "Does HTML escaping fully prevent XSS?",
      answer:
        "No. HTML escaping helps reduce XSS risks when displaying text, but it should be combined with proper input validation and security practices.",
    },
    {
      question: "Who should use an HTML escape tool?",
      answer:
        "This tool is useful for developers, QA engineers, and anyone who needs to safely display HTML or debug encoded content.",
    },
    {
      question: "Is my data sent to a server?",
      answer:
        "No. All escaping and unescaping is performed locally in your browser. No data is uploaded or stored.",
    },
  ],

  id: [
    {
      question: "Apa itu HTML escaping?",
      answer:
        "HTML escaping adalah proses mengubah karakter khusus seperti `<`, `>`, dan `&` menjadi HTML entities agar ditampilkan sebagai teks, bukan dieksekusi sebagai HTML.\n\n" +
        "Bacaan lanjutan:\n" +
        "- [MDN – HTML entities](https://developer.mozilla.org/en-US/docs/Glossary/Entity)\n" +
        "- [OWASP – Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)",
    },
    {
      question: "Mengapa HTML escaping itu penting?",
      answer:
        "HTML escaping membantu mencegah Cross-Site Scripting (XSS) dengan memastikan konten dari pengguna ditampilkan secara aman.",
    },
    {
      question: "Apa perbedaan escape dan unescape HTML?",
      answer:
        "Escape mengubah karakter khusus menjadi HTML entities, sedangkan unescape mengembalikan HTML entities ke karakter aslinya.",
    },
    {
      question: "Apakah HTML escaping sepenuhnya mencegah XSS?",
      answer:
        "Tidak. HTML escaping membantu mengurangi risiko XSS saat menampilkan teks, namun tetap perlu dikombinasikan dengan validasi input dan praktik keamanan lainnya.",
    },
    {
      question: "Siapa yang cocok menggunakan HTML Escape & Unescape?",
      answer:
        "Alat ini cocok untuk developer, QA, dan siapa pun yang perlu menampilkan atau mengecek teks HTML secara aman.",
    },
    {
      question: "Apakah data saya dikirim ke server?",
      answer:
        "Tidak. Semua proses escape dan unescape dilakukan langsung di browser tanpa menyimpan atau mengirim data ke server.",
    },
  ],
};

export default htmlEscapeFAQ;
