const enMessage = {
  "input-title": "Encoded Value",

  empty: "Enter a JWT to see the decoded result.",

  "error-invalidFormat":
    "Invalid JWT format. A valid JWT must contain 3 parts: header.payload.signature.",
  "error-invalidBase64":
    "Invalid Base64URL encoding in the token. Some parts may be corrupted or incorrectly formatted.",
  "error-unknownError":
    "Unable to decode the JWT. Please make sure the token is valid and try again.",

  header: "Header",
  payload: "Payload",
  signature: "Signature",

  copy: "Copy",
  copied: "Copied!",
} as const;

const idMessage = {
  "input-title": "Nilai JWT",

  empty: "Masukkan JWT untuk melihat hasil decode.",

  "error-invalidFormat":
    "Format JWT tidak valid. JWT yang benar harus memiliki 3 bagian: header.payload.signature.",
  "error-invalidBase64":
    "Encoding Base64URL dalam token tidak valid. Sebagian data mungkin rusak atau tidak ter-encode dengan benar.",
  "error-unknownError":
    "Tidak dapat mendecode JWT. Pastikan token valid dan coba lagi.",

  header: "Header",
  payload: "Payload",
  signature: "Signature",

  copy: "Salin",
  copied: "Disalin!",
} as const;

export const i18nJwtDecoder = {
  en: enMessage,
  id: idMessage,
};
