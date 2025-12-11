import { FAQItem } from "@/components/atoms/faq-section";

export const base64FAQ_en: FAQItem[] = [
  {
    question: "What is Base64 encoding?",
    answer:
      "Base64 is a method of converting binary data into a text-based format using ASCII characters. It is commonly used to safely transmit or embed binary content such as images, files, and metadata.",
  },
  {
    question: "What is Base64 used for?",
    answer:
      "Base64 is used when binary data needs to be represented as text—such as in JSON, URLs, HTML, email attachments, or APIs that do not support raw binary data.",
  },
  {
    question: "Is Base64 a form of encryption?",
    answer:
      "No. Base64 is not encryption. It is a reversible encoding method, meaning anyone can decode it easily. It should not be used to secure sensitive information.",
  },
  {
    question: "Why does Base64 increase data size?",
    answer:
      "Base64 expands data by approximately 33%. This happens because every 3 bytes of binary data are converted into 4 text characters during encoding.",
  },
  {
    question: "Is Base64 safe for storing passwords?",
    answer:
      "No. Base64 does not provide any security. Passwords should be protected using hashing algorithms such as bcrypt, Argon2, or PBKDF2—not Base64.",
  },
  {
    question: "What is the difference between Base64 encoding and decoding?",
    answer:
      "Encoding converts text or binary data into a Base64 string. Decoding reverses the process, transforming Base64 back into its original form.",
  },
  {
    question: "Why can’t I decode a Base64 string?",
    answer:
      "The string may be invalid due to missing characters, incorrect padding (`=`), unsupported characters, or corruption during copying or transmission.",
  },
  {
    question: "Can Base64 be used for images, PDFs, or other files?",
    answer:
      "Yes. Any binary file can be converted to Base64. However, the encoded result will be larger and may not be efficient for very large files.",
  },
  {
    question: "Is Base64 suitable for large data transmission?",
    answer:
      "Not recommended. Base64 increases file size and may slow down transmission. Binary transfer methods are more efficient for large files.",
  },
  {
    question: "Can I check if a string is valid Base64?",
    answer:
      "Validation is possible, but not perfect. A string may look like Base64 yet decode to unreadable data. Proper validation requires attempting to decode and checking errors.",
  },
];

export const base64FAQ_id: FAQItem[] = [
  {
    question: "Apa itu encoding Base64?",
    answer:
      "Base64 adalah metode untuk mengubah data biner menjadi format teks menggunakan karakter ASCII. Biasanya digunakan untuk mengirim atau menyisipkan data biner seperti gambar, file, atau metadata dengan aman dalam format teks.",
  },
  {
    question: "Untuk apa Base64 digunakan?",
    answer:
      "Base64 digunakan ketika data biner perlu direpresentasikan sebagai teks—misalnya dalam JSON, URL, HTML, lampiran email, atau API yang tidak mendukung data biner langsung.",
  },
  {
    question: "Apakah Base64 termasuk enkripsi?",
    answer:
      "Tidak. Base64 bukan enkripsi. Base64 adalah encoding yang dapat dibalik dengan mudah, sehingga tidak boleh digunakan untuk mengamankan informasi sensitif.",
  },
  {
    question:
      "Mengapa ukuran data menjadi lebih besar setelah di-encode ke Base64?",
    answer:
      "Base64 menambah ukuran data sekitar 33%. Hal ini terjadi karena setiap 3 byte data biner diubah menjadi 4 karakter teks saat proses encoding.",
  },
  {
    question: "Apakah Base64 aman untuk menyimpan password?",
    answer:
      "Tidak. Base64 tidak memberikan keamanan apa pun. Password harus dilindungi menggunakan algoritma hashing seperti bcrypt, Argon2, atau PBKDF2—bukan Base64.",
  },
  {
    question: "Apa perbedaan antara encode dan decode pada Base64?",
    answer:
      "Encode mengubah teks atau data biner menjadi string Base64. Decode melakukan kebalikannya, yaitu mengembalikan Base64 ke bentuk aslinya.",
  },
  {
    question: "Mengapa saya tidak bisa mendecode string Base64?",
    answer:
      "String tersebut mungkin tidak valid karena ada karakter yang hilang, padding (`=`) tidak lengkap, terdapat karakter ilegal, atau datanya rusak saat disalin atau dikirim.",
  },
  {
    question:
      "Apakah Base64 dapat digunakan untuk gambar, PDF, atau file lainnya?",
    answer:
      "Bisa. File biner apa pun dapat diubah menjadi Base64. Namun hasil encode akan lebih besar dan kurang efisien untuk file berukuran besar.",
  },
  {
    question: "Apakah Base64 cocok untuk mengirim data besar?",
    answer:
      "Tidak direkomendasikan. Base64 memperbesar ukuran data dan dapat memperlambat proses pengiriman. Untuk file besar, metode transfer biner lebih efisien.",
  },
  {
    question: "Apakah Base64 bisa diverifikasi apakah valid atau tidak?",
    answer:
      "Validasi dapat dilakukan, tetapi tidak selalu akurat. Sebuah string mungkin terlihat seperti Base64 tetapi menghasilkan data yang tidak terbaca. Validasi yang benar biasanya melibatkan proses decode dan pengecekan error.",
  },
];
