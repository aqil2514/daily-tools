export const i18nImageMetadataSearch = {
  en: {
    search: {
      placeholder: "Search metadata (key or value)…",
      clear: "Clear",
    },

    importantOnly: "Show important only",
  },

  id: {
    search: {
      placeholder: "Cari metadata (kunci atau nilai)…",
      clear: "Hapus",
    },

    importantOnly: "Tampilkan yang penting saja",
  },
} as const;

export type I18nImageMetadataSearch =
  typeof i18nImageMetadataSearch;
