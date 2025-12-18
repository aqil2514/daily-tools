import { generateOg } from "@/constants/og-generator";

export default async function OpengraphImage() {
  return await generateOg({
    enTitle: "Privacy Policy",
    enDesc:
      "Flowtooly privacy policy explaining how we handle user data and protect your privacy.",

    idTitle: "Kebijakan Privasi",
    idDesc:
      "Kebijakan privasi Flowtooly yang menjelaskan bagaimana kami menangani data pengguna dan menjaga privasi Anda.",
  });
}
