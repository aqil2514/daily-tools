"use client";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TextEditor } from "@/components/atoms/text-editor";
import { useTranslations } from "next-intl";
import { ChangeObject, diffChars } from "diff";
import { OutputSection } from "./output-section";
import { SampleDataComponent } from "./sample-data";

export function TextDiff() {
  const t = useTranslations("tools-text.text-diff");
  const [originalText, setOriginalText] = useState<string>("");
  const [changedText, setChangedText] = useState<string>("");
  const [diffResult, setDiffResult] = useState<ChangeObject<string>[]>([]);

  return (
    <div className="space-y-4">
      <SampleDataComponent
        setOriginal={setOriginalText}
        setChanged={setChangedText}
      />
      <div className="grid lg:grid-cols-2 gap-4">
        <ToolCard>
          <TextEditor
            setText={setOriginalText}
            text={originalText}
            title={t("original-editor-text")}
          />
        </ToolCard>
        <ToolCard>
          <TextEditor
            setText={setChangedText}
            text={changedText}
            title={t("changed-editor-text")}
          />
        </ToolCard>
        <div className="lg:col-span-2 justify-center flex">
          <Button
            variant={"outline"}
            onClick={() => {
              const changeInfo = diffChars(originalText, changedText);
              setDiffResult(changeInfo);
            }}
          >
            {t("action")}
          </Button>
        </div>
      </div>
      <OutputSection diffResult={diffResult} />
    </div>
  );
}
