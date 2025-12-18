import { generateOg } from "@/constants/og-generator";

export default async function OpengraphImage() {
  return await generateOg({
    enTitle: "About FlowTooly",
    enDesc:
      "Learn more about Flowtooly, a free online tools platform providing calculators, converters, and utility tools.",

    idTitle: "Tentang FlowTooly",
    idDesc:
      "Tentang Flowtooly, platform tools online gratis untuk berbagai kebutuhan seperti kalkulator, konverter, dan utility tools.",
  });
}
