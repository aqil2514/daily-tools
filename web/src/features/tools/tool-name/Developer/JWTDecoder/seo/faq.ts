import { LocalizedFAQ } from "@/@types/metadata";

export const jwtDecoderFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is a JWT (JSON Web Token)?",
      answer:
        "JWT (JSON Web Token) is a compact token format used to securely transmit information between parties as a JSON object.\n\n" +
        "Learn more:\n" +
        "- [RFC 7519 – JSON Web Token](https://datatracker.ietf.org/doc/html/rfc7519)\n" +
        "- [Wikipedia – JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token)",
    },
    {
      question: "What does this JWT decoder do?",
      answer:
        "This tool decodes the JWT header and payload so you can inspect claims and metadata for debugging or learning purposes.",
    },
    {
      question: "Does this tool verify JWT signatures?",
      answer:
        "No. This tool does not verify the JWT signature or validate the token. It only decodes the readable parts of the token.",
    },
    {
      question: "Is decoding a JWT the same as decrypting it?",
      answer:
        "No. JWTs are Base64URL-encoded, not encrypted. Decoding simply converts the token into a readable JSON format.\n\n" +
        "Related concept:\n" +
        "- [Base64](https://en.wikipedia.org/wiki/Base64)",
    },
    {
      question: "Who should use a JWT decoder?",
      answer:
        "JWT decoders are commonly used by developers to debug authentication flows, inspect token claims, or learn how JWTs are structured.",
    },
    {
      question: "Is it safe to decode JWTs in this tool?",
      answer:
        "Yes. All decoding is performed locally in your browser. No tokens are sent to any server or stored.",
    },
    {
      question: "When should I not use a JWT decoder?",
      answer:
        "You should not rely on a decoder to validate security or authorization. Always verify JWTs on the server using proper libraries.",
    },
  ],

  id: [
    {
      question: "Apa itu JWT (JSON Web Token)?",
      answer:
        "JWT (JSON Web Token) adalah format token ringkas yang digunakan untuk mengirimkan informasi secara aman dalam bentuk JSON.\n\n" +
        "Bacaan lanjutan:\n" +
        "- [RFC 7519 – JSON Web Token](https://datatracker.ietf.org/doc/html/rfc7519)\n" +
        "- [Wikipedia – JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token)",
    },
    {
      question: "Apa fungsi JWT Decoder ini?",
      answer:
        "Alat ini digunakan untuk mendecode bagian header dan payload JWT agar isi token dapat dibaca untuk keperluan debugging atau pembelajaran.",
    },
    {
      question: "Apakah alat ini memverifikasi signature JWT?",
      answer:
        "Tidak. Alat ini tidak memverifikasi signature atau memvalidasi JWT. Alat ini hanya menampilkan isi token yang dapat dibaca.",
    },
    {
      question: "Apakah decode JWT sama dengan dekripsi?",
      answer:
        "Tidak. JWT bukan token terenkripsi, melainkan token yang di-encode dengan Base64URL. Decode hanya mengubahnya menjadi format JSON yang bisa dibaca.\n\n" +
        "Konsep terkait:\n" +
        "- [Base64](https://en.wikipedia.org/wiki/Base64)",
    },
    {
      question: "Siapa yang cocok menggunakan JWT Decoder?",
      answer:
        "JWT Decoder umum digunakan oleh developer untuk debugging autentikasi, memeriksa claims token, atau mempelajari struktur JWT.",
    },
    {
      question: "Apakah aman mendecode JWT di alat ini?",
      answer:
        "Ya. Semua proses decode dilakukan langsung di browser Anda tanpa mengirim atau menyimpan token ke server.",
    },
    {
      question: "Kapan saya tidak boleh mengandalkan JWT Decoder?",
      answer:
        "Anda tidak boleh menggunakan decoder untuk validasi keamanan atau otorisasi. Verifikasi JWT harus selalu dilakukan di sisi server.",
    },
  ],
};

export default jwtDecoderFAQ;
