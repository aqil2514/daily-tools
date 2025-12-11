const enYAMLJSON = {
  input: "Source Data",
  output: "Converted Data",
  "text-editor": "Editor",

  "mode-label": "Mode",
  "yaml-to-json": "YAML → JSON",
  "json-to-yaml": "JSON → YAML",

  "sample-data": "Sample Data",

  copy: "Copy",
  copied: "Copied!",
  "copy-success": "Copied to clipboard!",

  "placeholder-input": "Enter YAML or JSON to convert...",
  "error-invalid": "The input format is invalid.",
  empty: "Your converted result will appear here.",
} as const;

const idYAMLJSON = {
  input: "Data Sumber",
  output: "Data Hasil",
  "text-editor": "Editor",

  "mode-label": "Mode",
  "yaml-to-json": "YAML → JSON",
  "json-to-yaml": "JSON → YAML",

  "sample-data": "Data Contoh",

  copy: "Salin",
  copied: "Tersalin!",
  "copy-success": "Berhasil disalin ke clipboard!",

  "placeholder-input": "Masukkan YAML atau JSON untuk dikonversi...",
  "error-invalid": "Format input tidak valid.",
  empty: "Hasil konversi akan muncul di sini.",
} as const;

export const i18nYAMLJSON = {
  en: enYAMLJSON,
  id: idYAMLJSON,
};
