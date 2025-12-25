"use client";

import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState, useMemo } from "react";
import { decodeBase64, encodeBase64 } from "../utils/encode-decode";
import { base64EncodeSampleData } from "../data/encode-sample";
import { base64DecodeSampleData } from "../data/decode-sample";
import { SampleDataComponent } from "@/components/organisms/sample-data-section";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { i18nBase64 } from "../i18n/base-64-encoder";

export function Base64Encoder() {
  const locale = useLocale();
  const t = i18nBase64[locale]; // <= i18n lokal

  const [text, setText] = useState<string>("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [copied, setCopied] = useState(false);

  // --- Encoding Logic ---
  const output = useMemo(() => {
    if (!text) return "";
    try {
      return mode === "encode" ? encodeBase64(text) : decodeBase64(text);
    } catch {
      return t["error-invalid"];
    }
  }, [text, mode, t]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const sampleData =
    mode === "encode" ? base64EncodeSampleData : base64DecodeSampleData;

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4">
        {/* INPUT */}
        <ToolCard>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">{t.input}</h2>

            {/* Mode Selector */}
            <Select
              value={mode}
              onValueChange={(val: "encode" | "decode") => {
                setText("");
                setMode(val);
              }}
            >
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder={t["mode-label"]} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="encode">{t.encode}</SelectItem>
                <SelectItem value="decode">{t.decode}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* SAMPLE DATA */}
          <div className="mb-4">
            <SampleDataComponent
              sampleData={sampleData}
              onSelected={(e: string) => setText(e)}
            />
          </div>

          {/* TEXT EDITOR */}
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

          {/* OUTPUT BOX */}
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
    </div>
  );
}
