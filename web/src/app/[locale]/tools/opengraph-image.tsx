import { generateOg } from "@/constants/og-generator";

export default async function OpengraphImage() {
  return await generateOg({
    enTitle: "Tools",
    enDesc:
      "Browse all Flowtooly utilities for PDF, images, QR codes, finance, and more — fast and privacy-friendly.",

    idTitle: "Alat",
    idDesc:
      "Jelajahi semua tools Flowtooly untuk PDF, gambar, QR code, keuangan, dan lainnya — cepat dan aman.",
  });
}
