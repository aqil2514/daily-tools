import { LocalizedFAQ } from "@/@types/metadata";

export const passwordGeneratorFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is a password generator?",
      answer:
        "A password generator is a tool that creates random and strong passwords to improve account security.\n\n" +
        "Learn more:\n" +
        "- [Wikipedia – Password](https://en.wikipedia.org/wiki/Password)\n" +
        "- [OWASP – Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)",
    },
    {
      question: "Why should I use a strong password?",
      answer:
        "Strong passwords help protect accounts from brute-force attacks and unauthorized access.\n\n" +
        "Further reading:\n" +
        "- [NIST – Digital Identity Guidelines](https://pages.nist.gov/800-63-3/)",
    },
    {
      question: "What makes a password strong?",
      answer:
        "A strong password is typically long, random, and includes a mix of uppercase letters, lowercase letters, numbers, and symbols.",
    },
    {
      question: "Can I customize the generated password?",
      answer:
        "Yes. You can usually customize password length and choose which character types to include, such as letters, numbers, and symbols.",
    },
    {
      question: "Is this password generator safe to use?",
      answer:
        "Yes. Passwords are generated locally in your browser. No passwords are sent to any server or stored.",
    },
    {
      question: "Does this tool store or remember my passwords?",
      answer:
        "No. This tool does not store, save, or transmit generated passwords in any way.",
    },
    {
      question: "Should I reuse the same password for multiple accounts?",
      answer:
        "No. Reusing passwords increases security risks. Each account should have a unique password.\n\n" +
        "Reference:\n" +
        "- [OWASP – Password Management](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)",
    },
  ],

  id: [
    {
      question: "Apa itu password generator?",
      answer:
        "Password generator adalah alat untuk membuat password acak dan kuat guna meningkatkan keamanan akun.\n\n" +
        "Bacaan lanjutan:\n" +
        "- [Wikipedia – Password](https://en.wikipedia.org/wiki/Password)\n" +
        "- [OWASP – Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)",
    },
    {
      question: "Mengapa saya harus menggunakan password yang kuat?",
      answer:
        "Password yang kuat membantu melindungi akun dari serangan brute-force dan akses tidak sah.\n\n" +
        "Referensi:\n" +
        "- [NIST – Digital Identity Guidelines](https://pages.nist.gov/800-63-3/)",
    },
    {
      question: "Apa yang membuat sebuah password dianggap kuat?",
      answer:
        "Password yang kuat umumnya panjang, acak, dan terdiri dari kombinasi huruf besar, huruf kecil, angka, dan simbol.",
    },
    {
      question: "Apakah password yang dihasilkan bisa dikustomisasi?",
      answer:
        "Ya. Anda dapat mengatur panjang password dan memilih jenis karakter seperti huruf, angka, dan simbol.",
    },
    {
      question: "Apakah password generator ini aman digunakan?",
      answer:
        "Ya. Password dihasilkan langsung di browser tanpa dikirim atau disimpan ke server.",
    },
    {
      question: "Apakah alat ini menyimpan password saya?",
      answer:
        "Tidak. Alat ini tidak menyimpan, mengingat, atau mengirim password yang dihasilkan.",
    },
    {
      question: "Apakah aman menggunakan password yang sama untuk banyak akun?",
      answer:
        "Tidak. Menggunakan password yang sama di banyak akun sangat berisiko dan tidak disarankan.\n\n" +
        "Bacaan tambahan:\n" +
        "- [OWASP – Password Management](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)",
    },
  ],
};

export default passwordGeneratorFAQ;
