🟦 Apa itu createImageBitmap()?

Ini adalah API browser modern untuk mengubah:

File

Blob

ImageData

Canvas

Menjadi bitmap cepat yang siap diproses oleh canvas.

Keuntungannya:

lebih cepat dibanding membuat <img src="">

efisien untuk operasi image processing

dapat dipanggil tanpa memasang <img> ke DOM

asynchronous (tidak memblok UI)

Jadi ini membaca data mentah gambar.

async function handleConvert() {
    if (!file) return;

    console.log("=== DEBUG: MULAI KONVERSI ===");
    console.log("Nama File:", file.name);
    console.log("Tipe MIME:", file.type);
    console.log("Ukuran File (KB):", (file.size / 1024).toFixed(2));

    const startTime = performance.now();

    setLoading(true);
    setConvertedUrl(null);

    // 1. Load gambar
    console.log("Step 1: Membuat ImageBitmap...");
    const imgBitmap = await createImageBitmap(file);
    console.log("Bitmap dibuat:");
    console.log("- Width:", imgBitmap.width);
    console.log("- Height:", imgBitmap.height);

    // 2. Buat canvas
    console.log("Step 2: Membuat canvas...");
    const canvas = document.createElement("canvas");
    canvas.width = imgBitmap.width;
    canvas.height = imgBitmap.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("ERROR: Context canvas tidak tersedia!");
      return;
    }

    // 3. Gambar bitmap ke canvas
    console.log("Step 3: Menggambar bitmap ke canvas...");
    ctx.drawImage(imgBitmap, 0, 0);

    // 4. Konversi canvas ke format target
    console.log(`Step 4: Mengekspor ke format image/${outputFormat} ...`);
    const out = canvas.toDataURL(`image/${outputFormat}`, 0.92);

    console.log("Hasil Base64 (prefix):", out.substring(0, 50) + "...");
    console.log("Panjang Base64:", out.length);

    // 5. Simpan URL hasil
    setConvertedUrl(out);

    const endTime = performance.now();
    console.log("Waktu proses total:", (endTime - startTime).toFixed(2), "ms");

    console.log("=== DEBUG: KONVERSI SELESAI ===");

    setLoading(false);
  }
