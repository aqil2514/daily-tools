# Kalkulator Alokasi Aset

Kalkulator Alokasi Aset adalah alat keuangan berbasis client-side yang membantu pengguna memvisualisasikan bagaimana aset mereka tersebar ke dalam berbagai kategori.  
Alat ini berfokus pada **komposisi aset aktual**, bukan rekomendasi atau saran investasi.

---

## 🎯 Tujuan

Alat ini dirancang untuk:

- Memvisualisasikan distribusi aset berdasarkan **kategori** dan **aset individual**
- Menampilkan **komposisi persentase** berdasarkan nilai aset yang dimasukkan
- Membantu pengguna memahami struktur aset mereka saat ini secara jelas

Alat ini **tidak**:
- Memberikan saran investasi
- Menyarankan alokasi aset ideal atau optimal
- Menggunakan model keuangan atau asumsi tertentu

---

## ✨ Fitur Utama

- Kategori aset bebas (tidak dibatasi kategori tertentu)
- Input banyak aset dengan nama opsional
- Perhitungan persentase otomatis
- Dua tampilan hasil:
  - 📊 Tampilan tabel
  - 🥧 Visualisasi diagram lingkaran
- Sepenuhnya berjalan di browser (tanpa API)
- Dukungan dua bahasa (EN / ID)
- Siap SEO (Metadata, JSON-LD, FAQ)

---

## 🧩 Struktur Folder

```
AssetAllocationCalculator
├─ components
│ ├─ asset-allocation-calculator.tsx
│ ├─ asset-allocation-input.tsx
│ └─ output
│ ├─ asset-allocation-output.tsx
│ ├─ asset-allocation-table.tsx
│ └─ asset-allocation-pie-chart.tsx
│
├─ i18n
│ ├─ input
│ │ └─ asset-allocation-input.ts
│ └─ output
│ ├─ asset-allocation-output.ts
│ ├─ asset-allocation-table.ts
│ └─ asset-allocation-pie-chart.ts
│
├─ seo
│ ├─ faq.ts
│ ├─ jsonld.ts
│ └─ metadata.ts
│
├─ types
│ ├─ input.ts
│ └─ output.ts
│
├─ utils
│ └─ calculateAssetAllocation.ts
│
└─ index.tsx
```


---

## 🧮 Logika Perhitungan

Perhitungan dilakukan menggunakan **pure function**:

- Lokasi: `utils/calculateAssetAllocation.ts`
- Tanpa side effect
- Hasil deterministik
- Pengelompokan berdasarkan kategori (string bebas)

### Aturan Perhitungan

- Aset dengan kategori kosong atau jumlah 0 diabaikan
- Kategori dikelompokkan menggunakan key yang dinormalisasi (trim + lowercase)
- Nama kategori yang ditampilkan mengikuti input pertama pengguna
- Persentase dihitung berdasarkan total nilai aset
- Pembulatan angka dilakukan di level UI (bukan di logic)

---

## 🌐 Internasionalisasi (i18n)

Alat ini menggunakan pola i18n khas Flowtooly:

- Menggunakan `useLocale()` dari `next-intl`
- Teks disimpan dalam file i18n terpisah dan terstruktur
- Tidak menggunakan `useTranslations()` atau key global
- Input, output, dan chart seluruhnya mendukung multi-bahasa

Bahasa yang didukung:
- 🇺🇸 Inggris
- 🇮🇩 Indonesia

---

## 🔒 Privasi & Data

- Semua perhitungan dilakukan **langsung di browser**
- Tidak ada data yang disimpan
- Tidak ada data yang dikirim ke server
- Tidak menggunakan cookie atau pelacakan data aset

---

## ⚠️ Disclaimer

Alat ini dibuat hanya untuk **visualisasi dan tujuan informatif**.  
Hasil yang ditampilkan **bukan merupakan saran keuangan atau investasi**.

---

## 🚀 Pengembangan Lanjutan (Opsional)

Beberapa pengembangan yang mungkin dilakukan di masa depan:

- Ekspor hasil ke CSV atau gambar
- Kustomisasi warna kategori
- Jenis grafik tambahan (bar / stacked)
- Pengelompokan atau filter aset
- Perbandingan alokasi aset dari waktu ke waktu

---

## 🧠 Filosofi Desain

Alat ini **secara sengaja menghindari**:

- Rekomendasi alokasi aset
- Profil risiko
- Proyeksi return atau keuntungan

Fokus utama alat ini adalah **kejelasan**, bukan persuasi — menampilkan kondisi aset apa adanya sesuai data pengguna.

---

## 📦 Bagian dari Flowtooly

Kalkulator Alokasi Aset merupakan bagian dari **Flowtooly – Financial Tools**, kumpulan alat praktis yang berfokus pada transparansi, kesederhanaan, dan kegunaan nyata sehari-hari.
