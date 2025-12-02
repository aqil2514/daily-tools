import { ImageOutputFormat } from "@/@types/Images";

/**
 * Mengubah format gambar dari sumber (File atau URL) ke format target yang ditentukan.
 *
 * @param source Objek File (dari unggahan) atau URL gambar (string).
 * @param format Format output: "jpg" | "png" | "webp". (Catatan: "jpg" akan dipetakan ke "jpeg")
 * @param quality Kualitas kompresi (0.0 - 1.0) untuk format lossy (jpg, webp). Default 0.92.
 * @returns Promise yang resolve dengan Data URL (string) dari gambar yang dikonversi.
 */
export async function convertImageFormat(
  source: File | string,
  format: ImageOutputFormat,
  quality = 0.92
): Promise<string> {
  let fileToProcess: File;

  // --- 1. Konversi Sumber (URL atau File) menjadi objek File/Blob ---
  if (typeof source === "string") {
    // Sumber adalah URL, ambil data gambarnya (fetch)
    try {
      const response = await fetch(source);

      if (!response.ok) {
        throw new Error(`Gagal mengambil gambar dari URL: ${response.status} ${response.statusText}`);
      }

      // Dapatkan Blob dan konversi ke File
      const blob = await response.blob();
      
      // Mengambil nama file yang layak dari URL untuk objek File baru
      const fileName = source.substring(source.lastIndexOf('/') + 1) || `converted-image.${format}`;
      
      // Membuat objek File dari Blob
      fileToProcess = new File([blob], fileName, { type: blob.type });

    } catch (error) {
      console.error("Error fetching or converting URL:", error);
      // Lemparkan error yang lebih deskriptif untuk ditangkap di komponen
      throw new Error("Tidak dapat memproses URL yang disediakan sebagai gambar.");
    }

  } else {
    // Sumber sudah berupa objek File
    fileToProcess = source;
  }

  // --- 2. Proses Konversi Gambar (Menggunakan Canvas API) ---

  // Buat ImageBitmap dari File/Blob (efisien untuk canvas)
  const imgBitmap = await createImageBitmap(fileToProcess);

  const canvas = document.createElement("canvas");
  canvas.width = imgBitmap.width;
  canvas.height = imgBitmap.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
      throw new Error("Gagal mendapatkan konteks 2D dari canvas.");
  }
  
  ctx.drawImage(imgBitmap, 0, 0);

  // Tentukan MIME type output yang benar
  const mimeType = `image/${format === "jpg" ? "jpeg" : format}`; 

  // Konversi Canvas ke Data URL
  return canvas.toDataURL(mimeType, quality);
}