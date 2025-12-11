const enJSON = {
  input: "Source JSON",
  output: "Formatted JSON",
  "text-editor": "JSON Editor",

  "mode-label": "Mode",
  format: "Format",
  minify: "Minify",

  "sample-data": "Sample Data",

  copy: "Copy",
  copied: "Copied!",
  "copy-success": "Copied to clipboard!",

  "placeholder-input": "Enter raw or minified JSON here...",
  "error-invalid": "The JSON you entered is invalid.",
  empty: "Your formatted or minified JSON will appear here.",
} as const;

const idJSON = {
  input: "JSON Sumber",
  output: "JSON Terformat",
  "text-editor": "Editor JSON",

  "mode-label": "Mode",
  format: "Format",
  minify: "Minify",

  "sample-data": "Data Contoh",

  copy: "Salin",
  copied: "Tersalin!",
  "copy-success": "Berhasil disalin ke clipboard!",

  "placeholder-input": "Masukkan JSON mentah atau minified...",
  "error-invalid": "JSON yang Anda masukkan tidak valid.",
  empty: "Hasil format atau minify akan muncul di sini.",
} as const;

export const i18nJSONFormatter = {
  en: enJSON,
  id: idJSON,
};
