const enRegex = {
  input: "Test Text",
  pattern: "Regex Pattern",
  flags: "Flags",
  output: "Matches",
  "pattern-placeholder": "Enter regex pattern...",
  "text-placeholder": "Enter text to test...",
  "flags-placeholder": "Example: g i m u s",
  "matches-none": "No matches found.",
  "error-invalid": "Invalid regex pattern.",
  sample: "Sample Patterns",
  copy: "Copy",
  copied: "Copied!",
} as const;

const idRegex = {
  input: "Teks Uji",
  pattern: "Pola Regex",
  flags: "Flags",
  output: "Hasil Cocok",
  "pattern-placeholder": "Masukkan pola regex...",
  "text-placeholder": "Masukkan teks untuk dites...",
  "flags-placeholder": "Contoh: g i m u s",
  "matches-none": "Tidak ada kecocokan.",
  "error-invalid": "Pola regex tidak valid.",
  sample: "Contoh Pola",
  copy: "Salin",
  copied: "Tersalin!",
} as const;

export const i18nRegexTester = {
  en: enRegex,
  id: idRegex,
};
