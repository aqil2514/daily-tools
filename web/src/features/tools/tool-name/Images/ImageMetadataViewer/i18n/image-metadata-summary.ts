export const i18nImageMetadataSummary = {
  en: {
    resolution: "Resolution",
    camera: "Camera",
    date: "Date Taken",
    size: "File Size",
  },

  id: {
    resolution: "Resolusi",
    camera: "Kamera",
    date: "Tanggal Pengambilan",
    size: "Ukuran File",
  },
} as const;

export type I18nImageMetadataSummary =
  typeof i18nImageMetadataSummary;
