import { generateOg } from "@/constants/og-generator";

export default async function OpengraphImage() {
  return await generateOg({
    enTitle: "Terms of Service",
    enDesc:
      "Flowtooly terms of service outlining the rules, rights, and responsibilities when using our tools.",

    idTitle: "Syarat & Ketentuan",
    idDesc:
      "Syarat dan ketentuan penggunaan Flowtooly yang mengatur penggunaan layanan, hak, dan kewajiban pengguna.",
  });
}
