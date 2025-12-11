const enBase64 = {
  // Sections
  input: "Source Data",
  output: "Result Data",
  "text-editor": "Text Editor",

  // Mode
  "mode-label": "Mode",
  encode: "Encode",
  decode: "Decode",

  // Sample
  "sample-data": "Sample Data",

  // Actions
  copy: "Copy",
  copied: "Copied!",
  "copy-success": "Copied to clipboard!",

  // Placeholders
  "placeholder-input": "Enter text or a Base64 string...",

  // Error
  "error-invalid": "The Base64 string you entered is invalid.",

  // Empty state
  empty: "Your encoded or decoded result will appear here.",
} as const;

const idBase64 = {
  // Bagian
  input: "Data Sumber",
  output: "Data Hasil",
  "text-editor": "Editor Teks",

  // Mode
  "mode-label": "Mode",
  encode: "Encode",
  decode: "Decode",

  // Sample
  "sample-data": "Data Contoh",

  // Actions
  copy: "Salin",
  copied: "Tersalin!",
  "copy-success": "Berhasil disalin ke clipboard!",

  // Placeholders
  "placeholder-input": "Masukkan teks atau string Base64...",

  // Error
  "error-invalid": "String Base64 yang Anda masukkan tidak valid.",

  // Empty state
  empty: "Hasil encode atau decode akan muncul di sini.",
} as const;

export const i18nBase64 = {
  en: enBase64,
  id: idBase64,
};
