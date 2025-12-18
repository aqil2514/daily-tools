export const i18nImageMetadataPdf = {
  en: {
    intro:
      "This report contains extracted EXIF and technical metadata from the selected image. All data is analyzed locally in your browser.",

    section: {
      summary: "Image Summary",
      important: "Important Metadata",
      all: "All Metadata",
    },

    summary: {
      fileName: "File Name",
      fileSize: "File Size",
      resolution: "Resolution",
      camera: "Camera",
      date: "Date Taken",
    },

    table: {
      key: "Key",
      value: "Value",
    },

    note: "No image or metadata is uploaded or stored on any server. This document was generated locally using Flowtooly.",
  },

  id: {
    intro:
      "Laporan ini berisi metadata EXIF dan informasi teknis yang diekstrak dari gambar yang dipilih. Semua data diproses secara lokal di browser Anda.",
    section: {
      summary: "Ringkasan Gambar",
      important: "Metadata Penting",
      all: "Semua Metadata",
    },

    summary: {
      fileName: "Nama File",
      fileSize: "Ukuran File",
      resolution: "Resolusi",
      camera: "Kamera",
      date: "Tanggal Pengambilan",
    },

    table: {
      key: "Kunci",
      value: "Nilai",
    },

    note: "Tidak ada gambar atau metadata yang diunggah atau disimpan ke server. Dokumen ini dibuat secara lokal menggunakan Flowtooly.",
  },
} as const;

export type I18nImageMetadataPdf = typeof i18nImageMetadataPdf;
