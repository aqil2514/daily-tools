const enUUIDController = {
  "btn-generate": "Generate UUIDs",

  version: "UUID Version",
  "version-placeholder": "Select Version",

  "version-v1": "UUID v1 — Timestamp based",
  "version-v4": "UUID v4 — Random",
  "version-v7": "UUID v7 — Time-ordered (Recommended)",

  amount: "Amount",
  "amount-placeholder": "1 - 100",
  "amount-minimum": "Minimum value is 1",

  "toast-error-invalid": "Please enter a valid amount between 1 and 100.",
  "toast-success-generated": "UUIDs generated successfully!",
} as const;

const idUUIDController = {
  "btn-generate": "Buat UUID",

  version: "Versi UUID",
  "version-placeholder": "Pilih Versi",

  "version-v1": "UUID v1 — Berdasarkan timestamp",
  "version-v4": "UUID v4 — Acak",
  "version-v7": "UUID v7 — Berurutan waktu (Direkomendasikan)",

  amount: "Jumlah",
  "amount-placeholder": "1 - 100",
  "amount-minimum": "Nilai minimum adalah 1",

  "toast-error-invalid": "Masukkan jumlah yang valid antara 1 hingga 100.",
  "toast-success-generated": "UUID berhasil dibuat!",
} as const;

export const i18nUUIDController = {
  en: enUUIDController,
  id: idUUIDController,
};

const enUUIDFormat = {
  "use-dash": "Use Dashes",
  "use-dash-desc": "Format UUID with or without dashes",

  uppercase: "Uppercase",
  "uppercase-desc": "Convert UUID letters to uppercase",

  "copy-all": "Copy All",
  "copy-all-success": "Copied all UUIDs!",

  copied: "Copied!",
} as const;

const idUUIDFormat = {
  "use-dash": "Gunakan Tanda Hubung",
  "use-dash-desc": "Format UUID dengan atau tanpa tanda hubung",

  uppercase: "Huruf Kapital",
  "uppercase-desc": "Ubah huruf UUID menjadi kapital",

  "copy-all": "Salin Semua",
  "copy-all-success": "Berhasil menyalin semua UUID!",

  copied: "Disalin!",
} as const;

export const i18nUUIDFormat = {
  en: enUUIDFormat,
  id: idUUIDFormat,
};

const enUUIDOutput = {
  title: "Generated UUIDs",
  empty: "Generate UUIDs to see them here.",
  "copy-success": "Copied to clipboard!",
  copy: "Copy",
  copied: "Copied!",
} as const;

const idUUIDOutput = {
  title: "UUID yang Dihasilkan",
  empty: "Buat UUID untuk melihat hasilnya di sini.",
  "copy-success": "Berhasil disalin!",
  copy: "Salin",
  copied: "Disalin!",
} as const;

export const i18nUUIDOutput = {
  en: enUUIDOutput,
  id: idUUIDOutput,
};
