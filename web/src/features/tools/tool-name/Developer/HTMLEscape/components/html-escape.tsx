"use client";

import { useState, useMemo } from "react";
import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

import { htmlEscapeSamples, htmlUnescapeSamples } from "../data/sample-data";
import { escapeHTML, unescapeHTML } from "../utils/escape-utils";

import { SampleDataComponent } from "@/components/atoms/sample-data";

import { useLocale } from "next-intl";
import { i18nHTMLEscape } from "../i18n/html-escape";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function HTMLEscapeTool() {
  const locale = useLocale();
  const t = i18nHTMLEscape[locale];

  const [text, setText] = useState("");
  const [mode, setMode] = useState<"escape" | "unescape">("escape");
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    if (!text.trim()) return "";
    return mode === "escape" ? escapeHTML(text) : unescapeHTML(text);
  }, [text, mode]);

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const sampleData =
    mode === "escape" ? htmlEscapeSamples : htmlUnescapeSamples;

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {/* INPUT */}
      <ToolCard>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">{t.input}</h2>

          <Select
            value={mode}
            onValueChange={(v) => {
              setText("");
              setMode(v as "escape" | "unescape");
            }}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder={t["mode-label"]} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="escape">{t.escape}</SelectItem>
              <SelectItem value="unescape">{t.unescape}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <SampleDataComponent setText={setText} sampleData={sampleData} />

        <TextEditor
          title={t["text-editor"]}
          text={text}
          setText={setText}
        />
      </ToolCard>

      {/* OUTPUT */}
      <ToolCard>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">{t.output}</h2>

          <Button
            variant="outline"
            size="sm"
            disabled={!output}
            onClick={handleCopy}
            className="flex items-center gap-2"
          >
            <Copy size={16} />
            {copied ? t.copied : t.copy}
          </Button>
        </div>

        <textarea
          readOnly
          value={output}
          placeholder={t.empty}
          className="w-full h-[300px] p-3 border rounded bg-muted font-mono text-sm resize-none"
        />
      </ToolCard>
    </div>
  );
}
