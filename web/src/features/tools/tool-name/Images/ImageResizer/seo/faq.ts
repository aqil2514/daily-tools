import { LocalizedFAQ } from "@/@types/metadata";

export const imageResizerFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is an image resizer?",
      answer:
        "An image resizer is a tool used to change the width and height of an image to specific dimensions.\n\n" +
        "Related concept:\n" +
        "- [Wikipedia – Image scaling](https://en.wikipedia.org/wiki/Image_scaling)",
    },
    {
      question: "When should I resize an image?",
      answer:
        "You should resize an image when you need it to fit specific size requirements, such as website layouts, social media posts, or thumbnails.",
    },
    {
      question: "Does resizing affect image quality?",
      answer:
        "Yes. Enlarging images may reduce sharpness, while reducing size generally preserves quality but lowers resolution.",
    },
    {
      question: "Can I keep the aspect ratio when resizing?",
      answer:
        "Yes. Most image resizers allow you to maintain the original aspect ratio to avoid image distortion.",
    },
    {
      question: "Is resizing the same as cropping?",
      answer:
        "No. Resizing changes the overall dimensions of an image, while cropping removes parts of the image.",
    },
    {
      question: "Is this image resizer safe to use?",
      answer:
        "Yes. All resizing is performed locally in your browser. No images are uploaded or stored on any server.",
    },
  ],

  id: [
    {
      question: "Apa itu image resizer?",
      answer:
        "Image resizer adalah alat untuk mengubah lebar dan tinggi gambar ke ukuran tertentu.\n\n" +
        "Konsep terkait:\n" +
        "- [Wikipedia – Image scaling](https://en.wikipedia.org/wiki/Image_scaling)",
    },
    {
      question: "Kapan saya perlu mengubah ukuran gambar?",
      answer:
        "Gambar perlu diubah ukurannya agar sesuai dengan kebutuhan tertentu seperti layout website, posting media sosial, atau thumbnail.",
    },
    {
      question: "Apakah mengubah ukuran gambar memengaruhi kualitas?",
      answer:
        "Ya. Memperbesar gambar dapat mengurangi ketajaman, sedangkan memperkecil ukuran umumnya mempertahankan kualitas namun menurunkan resolusi.",
    },
    {
      question: "Apakah saya bisa menjaga rasio aspek saat resize?",
      answer:
        "Ya. Umumnya tersedia opsi untuk menjaga rasio aspek agar gambar tidak terlihat gepeng atau melebar.",
    },
    {
      question: "Apakah resize sama dengan crop?",
      answer:
        "Tidak. Resize mengubah dimensi gambar secara keseluruhan, sedangkan crop memotong sebagian area gambar.",
    },
    {
      question: "Apakah image resizer ini aman digunakan?",
      answer:
        "Ya. Semua proses resize dilakukan langsung di browser tanpa mengunggah atau menyimpan gambar ke server.",
    },
  ],
};

export default imageResizerFAQ;
