import { LocalizedFAQ } from "@/@types/metadata";

export const urlEncoderFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is URL encoding?",
      answer:
        "URL encoding, also known as percent-encoding, is a method of encoding characters in a URL so they can be safely transmitted over the internet.\n\n" +
        "Learn more:\n" +
        "- [Wikipedia – Percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding)\n" +
        "- [MDN – encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)",
    },
    {
      question: "When should I encode a URL?",
      answer:
        "You should encode a URL when it contains special characters, spaces, or non-ASCII characters, especially in query strings or API parameters.",
    },
    {
      question: "What is the difference between URL encoding and encryption?",
      answer:
        "URL encoding is not encryption. It only converts characters into a web-safe format and does not protect or hide data.",
    },
    {
      question: "What is the difference between encodeURI and encodeURIComponent?",
      answer:
        "`encodeURI` is used for encoding an entire URL, while `encodeURIComponent` is used for encoding individual query parameters.\n\n" +
        "Reference:\n" +
        "- [MDN – encodeURI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)",
    },
    {
      question: "Who should use a URL encoder or decoder?",
      answer:
        "This tool is useful for developers, QA engineers, and anyone working with URLs, APIs, or query strings.",
    },
    {
      question: "Is this URL encoder safe to use?",
      answer:
        "Yes. All encoding and decoding are performed locally in your browser. No data is sent to or stored on any server.",
    },
  ],

  id: [
    {
      question: "Apa itu URL encoding?",
      answer:
        "URL encoding, atau percent-encoding, adalah metode untuk mengubah karakter dalam URL agar dapat dikirim dengan aman melalui internet.\n\n" +
        "Bacaan lanjutan:\n" +
        "- [Wikipedia – Percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding)\n" +
        "- [MDN – encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)",
    },
    {
      question: "Kapan saya perlu melakukan encode URL?",
      answer:
        "URL perlu di-encode ketika mengandung karakter khusus, spasi, atau karakter non-ASCII, terutama pada query string atau parameter API.",
    },
    {
      question: "Apa perbedaan URL encoding dan enkripsi?",
      answer:
        "URL encoding bukan enkripsi. Proses ini hanya mengubah karakter menjadi format yang aman untuk web dan tidak melindungi data.",
    },
    {
      question: "Apa perbedaan encodeURI dan encodeURIComponent?",
      answer:
        "`encodeURI` digunakan untuk meng-encode satu URL utuh, sedangkan `encodeURIComponent` digunakan untuk meng-encode bagian parameter URL.\n\n" +
        "Referensi:\n" +
        "- [MDN – encodeURI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)",
    },
    {
      question: "Siapa yang cocok menggunakan URL Encoder & Decoder?",
      answer:
        "Alat ini cocok untuk developer, QA, dan siapa pun yang bekerja dengan URL, API, atau query string.",
    },
    {
      question: "Apakah URL Encoder ini aman digunakan?",
      answer:
        "Ya. Semua proses encode dan decode dilakukan langsung di browser tanpa mengirim atau menyimpan data ke server.",
    },
  ],
};

export default urlEncoderFAQ;
