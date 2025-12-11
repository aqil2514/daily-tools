const enHTML = {
  input: "Source Text",
  output: "Result Text",
  "text-editor": "Text Editor",

  "mode-label": "Mode",
  escape: "Escape",
  unescape: "Unescape",

  "sample-data": "Sample Data",

  copy: "Copy",
  copied: "Copied!",
  "copy-success": "Copied to clipboard!",

  "placeholder-input": "Enter text or HTML entities...",
  "error-invalid": "The input is not valid text.",
  empty: "Your escaped or unescaped result will appear here.",
} as const;

const idHTML = {
  input: "Teks Sumber",
  output: "Teks Hasil",
  "text-editor": "Editor Teks",

  "mode-label": "Mode",
  escape: "Escape",
  unescape: "Unescape",

  "sample-data": "Data Contoh",

  copy: "Salin",
  copied: "Tersalin!",
  "copy-success": "Berhasil disalin ke clipboard!",

  "placeholder-input": "Masukkan teks atau HTML entities...",
  "error-invalid": "Input tidak valid.",
  empty: "Hasil escape atau unescape akan muncul di sini.",
} as const;

export const i18nHTMLEscape = {
  en: enHTML,
  id: idHTML,
};
