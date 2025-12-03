import { mimeToExtension } from "../mimeToExtension";

export async function getImageFileData(rawUrl: string) {
  const res = await fetch(rawUrl);
  if (!res.ok) throw new Error("Terjadi kesalahan saat ambil data gambar");

  const blob = await res.blob();

  const mime = blob.type || "image/jpeg";

  const ext = mimeToExtension(mime);

  const file = new File([blob], `file.${ext}`, { type: mime });

  return file;
}
