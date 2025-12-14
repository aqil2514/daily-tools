import { LocalizedFAQ } from "@/@types/metadata";

export const yamlJsonConverterFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is YAML?",
      answer:
        "YAML (YAML Ain't Markup Language) is a human-readable data serialization format commonly used for configuration files.\n\n" +
        "Learn more:\n" +
        "- [YAML Official Specification](https://yaml.org/spec/)\n" +
        "- [Wikipedia – YAML](https://en.wikipedia.org/wiki/YAML)",
    },
    {
      question: "What is JSON?",
      answer:
        "JSON (JavaScript Object Notation) is a lightweight data-interchange format widely used in APIs and web applications.\n\n" +
        "Reference:\n" +
        "- [RFC 8259 – JSON](https://www.rfc-editor.org/rfc/rfc8259)",
    },
    {
      question: "Why convert YAML to JSON or JSON to YAML?",
      answer:
        "Different tools and platforms support different formats. Converting between YAML and JSON helps ensure compatibility across systems such as Kubernetes, APIs, and backend services.",
    },
    {
      question: "Does this tool validate YAML or JSON schemas?",
      answer:
        "No. This tool converts data formats and checks basic syntax validity, but it does not perform schema validation.",
    },
    {
      question: "Is this tool suitable for Kubernetes or Docker configuration files?",
      answer:
        "Yes. This tool is commonly used to convert configuration files for Kubernetes, Docker Compose, and other DevOps workflows.",
    },
    {
      question: "Is my data sent to a server?",
      answer:
        "No. All conversions are performed locally in your browser. No data is uploaded or stored.",
    },
  ],

  id: [
    {
      question: "Apa itu YAML?",
      answer:
        "YAML (YAML Ain't Markup Language) adalah format serialisasi data yang mudah dibaca manusia dan sering digunakan untuk file konfigurasi.\n\n" +
        "Bacaan lanjutan:\n" +
        "- [YAML Official Specification](https://yaml.org/spec/)\n" +
        "- [Wikipedia – YAML](https://en.wikipedia.org/wiki/YAML)",
    },
    {
      question: "Apa itu JSON?",
      answer:
        "JSON (JavaScript Object Notation) adalah format pertukaran data ringan yang banyak digunakan pada API dan aplikasi web.\n\n" +
        "Referensi:\n" +
        "- [RFC 8259 – JSON](https://www.rfc-editor.org/rfc/rfc8259)",
    },
    {
      question: "Mengapa perlu mengonversi YAML ke JSON atau sebaliknya?",
      answer:
        "Berbagai platform dan tool menggunakan format yang berbeda. Konversi YAML dan JSON membantu memastikan kompatibilitas antar sistem seperti Kubernetes, API, dan backend.",
    },
    {
      question: "Apakah alat ini memvalidasi schema YAML atau JSON?",
      answer:
        "Tidak. Alat ini hanya melakukan konversi format dan pemeriksaan sintaks dasar, bukan validasi schema.",
    },
    {
      question: "Apakah alat ini cocok untuk file konfigurasi Kubernetes atau Docker?",
      answer:
        "Ya. Alat ini sering digunakan untuk mengonversi file konfigurasi Kubernetes, Docker Compose, dan workflow DevOps lainnya.",
    },
    {
      question: "Apakah data saya dikirim ke server?",
      answer:
        "Tidak. Semua proses konversi dilakukan langsung di browser tanpa menyimpan atau mengirim data ke server.",
    },
  ],
};

export default yamlJsonConverterFAQ;
