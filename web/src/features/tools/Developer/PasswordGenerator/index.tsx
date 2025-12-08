"use client";
import { SectionHeader } from "@/components/molecules/section-header";
import { useLocale } from "next-intl";
import { toolsRegistry } from "../../registry";
import { PasswordGeneratorProvider } from "./store/provider";
import PasswordGenerator from "./components/password-generator";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["password-generator"];

  return (
    <PasswordGeneratorProvider>
      <div>
        <SectionHeader
          title={tool.title[locale]}
          description={tool.description[locale]}
        />
        <PasswordGenerator />
      </div>
    </PasswordGeneratorProvider>
  );
}
