export interface ImageMetadata {
  width: number;
  height: number;
  aspectRatio: number;
  mime: string;
  size?: number;
  fileName?: string;
}

export function getImageMetadata(
  input: string | File
): Promise<ImageMetadata> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // Handle CORS jika URL
    img.crossOrigin = "anonymous";

    // Ketika gambar berhasil dimuat
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight,
        mime:
          typeof input === "string"
            ? detectMimeFromUrl(input)
            : input.type || "image/*",
        size: typeof input === "string" ? undefined : input.size,
        fileName: typeof input === "string" ? extractFileName(input) : input.name
      });
    };

    img.onerror = () => reject(new Error("Gagal memuat gambar"));

    // Jika input URL
    if (typeof input === "string") {
      img.src = input;
    } else {
      // Jika input File → ubah ke Object URL
      img.src = URL.createObjectURL(input);
    }
  });
}

// Utility bantu: Ambil nama file dari URL
function extractFileName(url: string): string {
  try {
    const path = new URL(url).pathname;
    const fileName = path.split("/").pop() || "untitled";
    return fileName.split("?")[0]; // bersihkan query
  } catch {
    return "untitled";
  }
}

// Utility bantu: MIME fallback dari ekstensi URL
function detectMimeFromUrl(url: string): string {
  const ext = url.split(".").pop()?.toLowerCase().split("?")[0];
  if (!ext) return "image/*";

  switch (ext) {
    case "png":
      return "image/png";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "webp":
      return "image/webp";
    case "gif":
      return "image/gif";
    case "svg":
      return "image/svg+xml";
    case "bmp":
      return "image/bmp";
    case "ico":
      return "image/x-icon";
    default:
      return "image/*";
  }
}
