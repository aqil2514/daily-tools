export const i18nImageMetadataInput = {
  en: {
    title: "Image Metadata Viewer",
    description: "Upload an image to inspect EXIF & technical metadata.",

    buttons: {
      load: "Load Metadata",
      loading: "Reading metadata...",
      reset: "Reset",
    },

    fileLabel: "File",
    previewAlt: "Image preview",
  },

  id: {
    title: "Penampil Metadata Gambar",
    description:
      "Unggah gambar untuk melihat metadata EXIF dan informasi teknis.",

    buttons: {
      load: "Muat Metadata",
      loading: "Membaca metadata...",
      reset: "Reset",
    },

    fileLabel: "File",
    previewAlt: "Pratinjau gambar",
  },
} as const;

export type I18nImageMetadataInput =
  typeof i18nImageMetadataInput;
