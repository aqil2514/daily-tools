export const isValidImageURL = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (!url || typeof url !== 'string') {
      return resolve(false);
    }
    
    // 1. Buat elemen gambar baru
    const img = new Image();

    // 2. Jika gambar berhasil dimuat, itu valid
    img.onload = () => {
      // Pastikan gambar memiliki dimensi (bukan 1x1 atau kosong)
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        resolve(true);
      } else {
        // Terkadang gambar 0x0 dimuat untuk URL yang tidak valid
        resolve(false);
      }
    };

    // 3. Jika terjadi kesalahan saat memuat (misalnya 404, atau konten rusak)
    img.onerror = () => {
      resolve(false);
    };

    // 4. Atur sumber gambar untuk memulai pemuatan
    img.src = url;

    // Tambahkan timeout untuk mencegah permintaan 'hang' tanpa batas
    setTimeout(() => {
        resolve(false);
    }, 10000); // Batas waktu 10 detik
  });
};