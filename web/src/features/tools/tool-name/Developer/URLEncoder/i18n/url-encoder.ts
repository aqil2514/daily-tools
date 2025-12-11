const enURLEncoder = {
  input: "Source URL",
  output: "Result URL",
  "text-editor": "Text Editor",

  "mode-label": "Mode",
  encode: "Encode",
  decode: "Decode",

  "sample-data": "Sample Data",

  copy: "Copy",
  copied: "Copied!",
  "copy-success": "Copied to clipboard!",

  "placeholder-input": "Enter a URL or text to encode or decode...",
  "error-invalid": "The URL you entered is invalid.",
  empty: "Your encoded or decoded result will appear here.",
} as const;

const idURLEncoder = {
  input: "URL Sumber",
  output: "URL Hasil",
  "text-editor": "Editor Teks",

  "mode-label": "Mode",
  encode: "Encode",
  decode: "Decode",

  "sample-data": "Data Contoh",

  copy: "Salin",
  copied: "Tersalin!",
  "copy-success": "Berhasil disalin ke clipboard!",

  "placeholder-input": "Masukkan URL atau teks untuk encode atau decode...",
  "error-invalid": "URL yang Anda masukkan tidak valid.",
  empty: "Hasil encode atau decode akan muncul di sini.",
} as const;

export const i18nURLEncoder = {
  en: enURLEncoder,
  id: idURLEncoder,
};
