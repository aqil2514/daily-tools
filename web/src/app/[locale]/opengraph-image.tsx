import { generateOg } from "@/constants/og-generator";

export default async function OpengraphImage() {
  return await generateOg({
    enTitle: "Home",
    enDesc:
      "Fast, simple, and privacy-friendly tools for PDF, images, QR codes, finance, and more.",

    idTitle: "Beranda",
    idDesc:
      "Tools cepat, mudah, dan aman untuk PDF, gambar, QR code, keuangan, dan lainnya.",
  });
}
