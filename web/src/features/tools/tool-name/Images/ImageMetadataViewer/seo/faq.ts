import { LocalizedFAQ } from "@/@types/metadata";

export const imageMetadataViewerFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is an image metadata viewer?",
      answer:
        "An image metadata viewer is a tool that allows you to inspect technical information embedded inside an image file, such as EXIF data, camera details, resolution, color profile, and capture date.",
    },
    {
      question: "What kind of metadata can this tool read?",
      answer:
        "This tool can read EXIF and other technical metadata including image dimensions, camera make and model, lens information, ISO, exposure settings, GPS coordinates (if available), and file size.",
    },
    {
      question: "How does this image metadata viewer work?",
      answer:
        "You upload an image file, and the tool reads metadata directly in your browser using client-side processing. No data is uploaded to any server.",
    },
    {
      question: "Does this tool support all image formats?",
      answer:
        "Most common image formats such as JPEG, PNG, and WebP are supported. However, metadata availability depends on whether the image format and file contain embedded metadata.",
    },
    {
      question: "Can I edit or remove image metadata using this tool?",
      answer:
        "No. This tool is designed for viewing metadata only. It does not modify, remove, or write metadata back to the image file.",
    },
    {
      question: "Is my image data stored or sent to a server?",
      answer:
        "No. All image processing is done entirely in your browser. The image file and its metadata are never uploaded, stored, or transmitted.",
    },
    {
      question: "Why is some metadata missing?",
      answer:
        "Some images may not contain metadata, or the metadata may have been stripped by editing software, social media platforms, or image compression tools.",
    },
  ],

  id: [
    {
      question: "Apa itu penampil metadata gambar?",
      answer:
        "Penampil metadata gambar adalah alat untuk melihat informasi teknis yang tersimpan di dalam file gambar, seperti data EXIF, detail kamera, resolusi, profil warna, dan tanggal pengambilan.",
    },
    {
      question: "Metadata apa saja yang bisa dibaca oleh alat ini?",
      answer:
        "Alat ini dapat membaca metadata EXIF dan metadata teknis lainnya seperti dimensi gambar, merek dan model kamera, informasi lensa, ISO, pengaturan pencahayaan, koordinat GPS (jika tersedia), dan ukuran file.",
    },
    {
      question: "Bagaimana cara kerja penampil metadata gambar ini?",
      answer:
        "Anda mengunggah file gambar, lalu metadata dibaca langsung di browser menggunakan pemrosesan sisi klien. Tidak ada data yang dikirim ke server.",
    },
    {
      question: "Apakah semua format gambar didukung?",
      answer:
        "Sebagian besar format gambar umum seperti JPEG, PNG, dan WebP didukung. Namun, ketersediaan metadata tergantung pada apakah file gambar tersebut memang menyimpan metadata.",
    },
    {
      question: "Apakah saya bisa mengedit atau menghapus metadata gambar?",
      answer:
        "Tidak. Alat ini hanya digunakan untuk melihat metadata dan tidak mengubah, menghapus, atau menulis ulang metadata ke dalam file gambar.",
    },
    {
      question: "Apakah data gambar saya disimpan atau dikirim ke server?",
      answer:
        "Tidak. Semua pemrosesan gambar dilakukan sepenuhnya di browser. File gambar dan metadatanya tidak pernah diunggah atau disimpan.",
    },
    {
      question: "Mengapa sebagian metadata tidak muncul?",
      answer:
        "Beberapa gambar mungkin tidak memiliki metadata, atau metadatanya telah dihapus oleh software pengeditan, platform media sosial, atau alat kompresi gambar.",
    },
  ],
};

export default imageMetadataViewerFAQ;
