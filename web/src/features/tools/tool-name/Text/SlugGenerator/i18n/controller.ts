export const i18nSlugController = {
  en: {
    delimiter: {
      title: "Delimiter Style",
      dash: "Separate with Dash (-)",
      underscore: "Separate with Underscore (_)",
    },

    case: {
      title: "Text Case",
      lowercase: "Lowercase",
      keep: "Keep Original Case",
    },

    collapseSpaces: {
      title: "Collapse Multiple Spaces",
      desc: "Convert repeated spaces into a single delimiter",
    },

    removeSpecial: {
      title: "Remove Special Characters",
      desc: "Clean punctuation & symbols before generating slug",
    },

    autoUpdate: {
      title: "Auto Update",
      desc: "Automatically update slug while typing",
    },

    trimWhitespace: {
      title: "Trim Whitespace",
      desc: "Remove leading and trailing spaces",
    },
  },

  id: {
    delimiter: {
      title: "Gaya Delimiter",
      dash: "Pisahkan dengan Tanda Hubung (-)",
      underscore: "Pisahkan dengan Garis Bawah (_)",
    },

    case: {
      title: "Format Huruf",
      lowercase: "Huruf Kecil",
      keep: "Pertahankan Format Asli",
    },

    collapseSpaces: {
      title: "Gabungkan Spasi Ganda",
      desc: "Ubah beberapa spasi menjadi satu delimiter",
    },

    removeSpecial: {
      title: "Hapus Karakter Khusus",
      desc: "Bersihkan tanda baca & simbol sebelum membuat slug",
    },

    autoUpdate: {
      title: "Perbarui Otomatis",
      desc: "Perbarui slug saat mengetik",
    },

    trimWhitespace: {
      title: "Hapus Spasi Ekstra",
      desc: "Hapus spasi di awal dan akhir teks",
    },
  },
} as const;
