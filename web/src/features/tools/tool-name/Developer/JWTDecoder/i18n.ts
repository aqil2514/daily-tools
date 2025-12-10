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

  faq: {
    q1: "Is it safe to paste my JWT here?",
    a1: "Yes. This tool works 100% in your browser. Your JWT and secret key are never sent to any server.",

    q2: "Why can my JWT be read in plain text?",
    a2: "JWT payload is only Base64URL encoded, not encrypted. Anyone with the token can read the header and payload.",

    q3: "Can this tool verify signatures?",
    a3: "Only for HMAC algorithms (HS256, HS384, HS512). Public-key algorithms such as RS256 require a public key.",

    q4: "Why is my signature invalid?",
    a4: "Common reasons include using the wrong secret key, different algorithm, or token tampering.",

    q5: "Does decoding a JWT mean authentication?",
    a5: "No. Decoding only reads the data. It does not verify identity or access permissions.",
  },
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
  faq: {
    q1: "Apakah aman menempelkan JWT saya di sini?",
    a1: "Aman. Semua proses dilakukan 100% di browser Anda. JWT dan secret key tidak pernah dikirim ke server mana pun.",

    q2: "Kenapa JWT saya terlihat seperti teks biasa?",
    a2: "Payload JWT hanya di-encode Base64URL, bukan dienkripsi. Bagian header dan payload bisa dibaca siapa saja.",

    q3: "Apakah tool ini dapat memverifikasi signature?",
    a3: "Hanya untuk algoritma HMAC (HS256, HS384, HS512). Algoritma public key seperti RS256 membutuhkan public key.",

    q4: "Kenapa signature saya tidak valid?",
    a4: "Biasanya karena secret key salah, algoritma berbeda, atau token telah dimodifikasi.",

    q5: "Apakah decode JWT berarti otentikasi?",
    a5: "Tidak. Decode hanya membaca data. Bukan verifikasi identitas atau hak akses.",
  },
} as const;

export const i18nJwtDecoder = {
  en: enMessage,
  id: idMessage,
};
