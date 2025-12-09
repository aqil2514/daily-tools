import { TextToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const textRegistry: Record<TextToolName, ToolRegistryItem> = {
  "case-converter": {
    title: {
      en: "Case Converter",
      id: "Pengubah Huruf",
    },
    description: {
      en: "Convert your text to UPPERCASE, lowercase, Title Case, or Sentence case instantly — processed locally for privacy.",
      id: "Ubah teks Anda menjadi HURUF BESAR, huruf kecil, Judul Kapital, atau Kalimat Kapital secara instan — diproses lokal untuk privasi penuh.",
    },
    category: "text",
    href: "/tools/case-converter",
    Component: dynamic(() => import("@/features/tools/Text/CaseConverter")),
    keywords: {
      en: [
        "case converter",
        "uppercase converter",
        "lowercase converter",
        "title case online",
        "sentence case",
        "text transformation",
        "convert text case",
      ],
      id: [
        "pengubah huruf",
        "huruf besar",
        "huruf kecil",
        "judul kapital",
        "kalimat kapital",
        "ubah format teks",
        "konversi huruf",
      ],
    },
  },

  "word-counter": {
    title: {
      en: "Word Counter",
      id: "Penghitung Kata",
    },
    description: {
      en: "Instantly count words and characters with full local privacy.",
      id: "Hitung kata dan karakter secara instan dengan privasi penuh.",
    },
    category: "text",
    href: "/tools/word-counter",
    Component: dynamic(() => import("@/features/tools/Text/WordCounter")),
    keywords: {
      en: [
        "word counter",
        "count words online",
        "character counter",
        "text analyzer",
        "free word count tool",
        "word count checker",
        "typing assistant",
      ],
      id: [
        "penghitung kata",
        "hitung kata online",
        "penghitung karakter",
        "analisis teks",
        "alat hitung kata gratis",
        "cek jumlah kata",
        "asisten mengetik",
      ],
    },
  },

  "remove-duplicate-lines": {
    title: {
      en: "Remove Duplicate Lines",
      id: "Hapus Baris Duplikat",
    },
    description: {
      en: "Quickly remove duplicate lines from your text — clean, simple, and fully private.",
      id: "Hapus baris duplikat dari teks Anda dengan cepat — mudah, bersih, dan sepenuhnya privat.",
    },
    category: "text",
    href: "/tools/remove-duplicate-lines",
    Component: dynamic(
      () => import("@/features/tools/Text/RemoveDuplicateLines")
    ),
    keywords: {
      en: [
        "remove duplicate lines",
        "delete duplicate lines",
        "clean text",
        "text tools",
        "unique lines",
        "line cleaner",
        "text deduplicator",
      ],
      id: [
        "hapus baris duplikat",
        "hilangkan baris duplikat",
        "bersihkan teks",
        "alat teks",
        "baris unik",
        "pembersih teks",
        "deduplikasi teks",
      ],
    },
  },

  "text-diff": {
    title: {
      en: "Text Diff",
      id: "Pembanding Teks",
    },
    description: {
      en: "Compare two text blocks and instantly see what’s added, removed, or changed — fully processed locally for maximum privacy.",
      id: "Bandingkan dua blok teks dan lihat perbedaan berupa penambahan, penghapusan, atau perubahan — diproses sepenuhnya secara lokal untuk privasi maksimal.",
    },
    category: "text",
    href: "/tools/text-diff",
    Component: dynamic(() => import("@/features/tools/Text/TextDiff")),
    keywords: {
      en: [
        "text diff",
        "compare text",
        "text compare tool",
        "diff checker",
        "find text differences",
        "compare two texts",
        "text comparison online",
      ],
      id: [
        "pembanding teks",
        "perbedaan teks",
        "cek perbedaan teks",
        "bandingkan teks",
        "alat pembanding teks",
        "diff teks online",
        "cari perbedaan teks",
      ],
    },
  },

  "url-extractor": {
    title: {
      en: "URL Extractor",
      id: "Ekstraktor URL",
    },
    description: {
      en: "Extract all URLs from any text instantly — fast, accurate, and processed entirely in your browser for full privacy.",
      id: "Ekstrak semua URL dari teks apa pun secara instan — cepat, akurat, dan sepenuhnya diproses di browser Anda untuk privasi penuh.",
    },
    category: "text",
    href: "/tools/url-extractor",
    Component: dynamic(() => import("@/features/tools/Text/UrlExtractor")),
    keywords: {
      en: [
        "url extractor",
        "extract urls",
        "find urls in text",
        "url finder",
        "link extractor",
        "extract links",
        "text url parser",
        "url scanner",
      ],
      id: [
        "ekstraktor url",
        "ambil url",
        "cari url dalam teks",
        "pencari url",
        "ekstrak tautan",
        "pengambil link",
        "parser url dari teks",
        "pemindai url",
      ],
    },
  },
};

export const textToolName = Object.keys(textRegistry) as TextToolName[];
