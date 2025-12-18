export const i18nImageMetadataAccordion = {
  en: {
    copy: {
      idle: "Copy",
      success: "Copied",
      toast: "Copied to clipboard",
    },

    emptyImportant: "No important metadata found",
  },

  id: {
    copy: {
      idle: "Salin",
      success: "Tersalin",
      toast: "Berhasil disalin",
    },

    emptyImportant: "Tidak ada metadata penting",
  },
} as const;

export type I18nImageMetadataAccordion =
  typeof i18nImageMetadataAccordion;
