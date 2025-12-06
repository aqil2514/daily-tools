"use client";

import { SectionHeader } from "@/components/molecules/section-header";
import { QRGeneratorProvider } from "./store/provider";
import { useLocale } from "next-intl";
import { toolsRegistry } from "../../registry";
import { QRGenerator } from "./components/qr-generator";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["qr-generator"];
  return (
    <QRGeneratorProvider>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <QRGenerator />
    </QRGeneratorProvider>
  );
}
