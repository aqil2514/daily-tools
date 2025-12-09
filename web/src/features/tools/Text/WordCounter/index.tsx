"use client";

import { useLocale } from "next-intl";
import { toolsRegistry } from "../../registry";
import { SectionHeader } from "@/components/molecules/section-header";
import { WordCounter } from "./components/word-counter";
import { WordCounterProvider } from "./store/provider";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["word-counter"];
  return (
    <WordCounterProvider>
      <div>
        <SectionHeader
          title={tool.title[locale]}
          description={tool.description[locale]}
        />
        <WordCounter />
      </div>
    </WordCounterProvider>
  );
}
