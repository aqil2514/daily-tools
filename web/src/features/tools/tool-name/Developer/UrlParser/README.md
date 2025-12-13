# URL Parser

**URL Parser** adalah tools developer di Flowtooly yang digunakan untuk menguraikan (parse) sebuah URL menjadi komponen-komponennya seperti protocol, hostname, path, query parameters, dan fragment secara instan langsung di browser.

Tool ini dirancang ringan, client-side only, dan aman digunakan tanpa mengirim data ke server.

---

## ✨ Fitur Utama

- 🔍 **Parse URL Lengkap**

  - Protocol (http / https)
  - Username & password (jika ada)
  - Hostname & port
  - Pathname
  - Query string
  - Hash / fragment

- 🧩 **Query Parameters Breakdown**

  - Menampilkan semua parameter query
  - Mendukung duplicate key & array-style params
  - Copy value per parameter

- ⚡ **Quick Insights**

  - Deteksi HTTP / HTTPS
  - Deteksi custom port
  - Deteksi authentication info
  - Deteksi tracking parameters (utm, gclid, fbclid)

- 🧾 **JSON Output**

  - Output hasil parsing dalam format JSON
  - Copy JSON sekali klik

- 🌍 **Internationalization (i18n)**

  - Bahasa Inggris & Indonesia
  - Semua teks UI, empty state, dan error sudah terlokalisasi

- 🔐 **Privasi Aman**
  - Semua parsing dilakukan di browser
  - Tidak ada data yang dikirim atau disimpan di server

---

## 🗂 Struktur Folder

```
📦UrlParser
 ┣ 📂components
 ┃ ┣ 📜url-core-output.tsx
 ┃ ┣ 📜url-input.tsx
 ┃ ┣ 📜url-insights-output.tsx
 ┃ ┣ 📜url-json-output.tsx
 ┃ ┣ 📜url-parser.tsx
 ┃ ┗ 📜url-query-output.tsx
 ┣ 📂data
 ┃ ┗ 📜sample-data.ts
 ┣ 📂i18n
 ┃ ┣ 📜core-output.ts
 ┃ ┣ 📜error.ts
 ┃ ┣ 📜input.ts
 ┃ ┣ 📜insights-output.ts
 ┃ ┣ 📜json-output.ts
 ┃ ┗ 📜query-output.ts
 ┣ 📂seo
 ┃ ┣ 📜faq.ts
 ┃ ┣ 📜jsonld.ts
 ┃ ┗ 📜metadata.ts
 ┣ 📂types
 ┃ ┗ 📜output.ts
 ┣ 📂utils
 ┃ ┗ 📜parseUrl.ts
 ┣ 📜index.tsx
 ┗ 📜README.md
```

---

## 🧠 Arsitektur & Prinsip Desain

- **Utility-first logic**
  - `parseUrl.ts` hanya berisi logika parsing
  - Tidak mengandung string UI atau bahasa

- **Typed output**
  - Semua hasil parsing menggunakan TypeScript interface
  - Aman untuk scale & refactor

- **i18n modular**
  - Setiap section memiliki file i18n sendiri
  - Konsisten dengan pola Product HPP & Financial Simulator

- **Separation of concerns**
  - Logic → utils
  - UI → components
  - Teks → i18n
  - SEO → folder `seo`

---

## 📦 Contoh Output JSON

```json
{
  "core": {
    "href": "https://example.com/path?utm_source=google#top",
    "protocol": "https:",
    "username": "",
    "password": "",
    "hostname": "example.com",
    "port": "",
    "pathname": "/path",
    "search": "?utm_source=google",
    "hash": "#top"
  },
  "query": {
    "raw": "utm_source=google",
    "params": [
      { "key": "utm_source", "value": "google" }
    ]
  },
  "insights": {
    "isHttps": true,
    "hasCustomPort": false,
    "hasAuth": false,
    "trackingParams": ["utm_source"]
  }
}
