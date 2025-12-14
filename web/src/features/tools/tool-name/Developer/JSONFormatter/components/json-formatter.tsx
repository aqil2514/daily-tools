"use client";

import { useState, useMemo } from "react";
import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

import { jsonSamples } from "../data/sample-data";
import { formatJSON, minifyJSON, validateJSON } from "../utils/format-utils";

import { SampleDataComponent } from "@/components/atoms/sample-data";
import { useLocale } from "next-intl";
import { i18nJSONFormatter } from "../i18n/json-formatter";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

export function JSONFormatter() {
  const locale = useLocale();
  const t = i18nJSONFormatter[locale];

  const [text, setText] = useState("");
  const [mode, setMode] = useState<"format" | "minify">("format");
  const [copied, setCopied] = useState(false);

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

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
          <SampleDataComponent setText={setText} sampleData={jsonSamples} />
        </div>

        <TextEditor title={t["text-editor"]} text={text} setText={setText} />
      </ToolCard>

      {/* OUTPUT */}
      <ToolCard>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">{t.output}</h2>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={handleCopy}
            disabled={!output}
          >
            <Copy size={16} />
            {copied ? t.copied : t.copy}
          </Button>
        </div>

        <textarea
          readOnly
          value={output}
          placeholder={t.empty}
          className="
            w-full 
            h-[300px] 
            p-3 
            rounded-md 
            border 
            bg-muted 
            text-sm 
            font-mono 
            resize-none 
            focus-visible:ring-1 
            focus-visible:ring-ring
          "
        />
      </ToolCard>
    </div>
  );
}
