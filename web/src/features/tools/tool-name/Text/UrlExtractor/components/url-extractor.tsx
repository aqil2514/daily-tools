"use client";
import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { URLExtractorPreview } from "./url-result";
import { SampleDataComponent } from "@/components/atoms/sample-data";
import { sampleData } from "../data/sample-data";

export function URLExtractor() {
  const t = useTranslations("tools-text.url-extractor");
  const [inputText, setInputText] = useState<string>("");
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <ToolCard>
        <SampleDataComponent setText={setInputText} sampleData={sampleData} />
        <TextEditor
          setText={setInputText}
          text={inputText}
          title={t("editor-title")}
        />
      </ToolCard>
      <ToolCard>
        <URLExtractorPreview text={inputText} setText={setInputText} />
      </ToolCard>
    </div>
  );
}
