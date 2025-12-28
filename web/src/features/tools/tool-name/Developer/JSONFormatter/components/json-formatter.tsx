"use client";

import { useState, useMemo } from "react";
import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/molecules/card/tool-card";

import { jsonSamples } from "../data/sample-data";
import { formatJSON, minifyJSON, validateJSON } from "../utils/format-utils";

import { SampleDataComponent } from "@/components/organisms/sample-data-section";
import { useLocale } from "next-intl";
import { i18nJSONFormatter } from "../i18n/json-formatter";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { TextOutputCard } from "@/components/molecules/tools-output-card/text-output-card";

export function JSONFormatter() {
  const locale = useLocale();
  const t = i18nJSONFormatter[locale];

  const [text, setText] = useState("");
  const [mode, setMode] = useState<"format" | "minify">("format");

  const output = useMemo(() => {
    if (!text.trim()) return "";

    const validation = validateJSON(text);
    if (!validation.valid) return t["error-invalid"];

    try {
      return mode === "format" ? formatJSON(text) : minifyJSON(text);
    } catch {
      return t["error-invalid"];
    }
  }, [text, mode, t]);

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {/* INPUT */}
      <ToolCard>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">{t.input}</h2>

          <Select
            value={mode}
            onValueChange={(val: "format" | "minify") => {
              setText("");
              setMode(val);
            }}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder={t["mode-label"]} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="format">{t.format}</SelectItem>
              <SelectItem value="minify">{t.minify}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <SampleDataComponent
            onSelected={(e: string) => setText(e)}
            sampleData={jsonSamples}
          />
        </div>

        <TextEditor title={t["text-editor"]} text={text} setText={setText} />
      </ToolCard>

      {/* OUTPUT */}
      <TextOutputCard title={t.output} value={output} emptyText={t.empty} />
    </div>
  );
}
