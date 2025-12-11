"use client";

import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/tools/tool-card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState, useMemo } from "react";

import { SampleDataComponent } from "@/components/atoms/sample-data";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useLocale } from "next-intl";
import { i18nURLEncoder } from "../i18n/url-encoder";
import { urlDecode, urlEncode } from "../utils/encode-decode";
import { baseURLEncodeSamples } from "../data/encode-sample";
import { baseURLDecodeSamples } from "../data/decode-sample";
import { FAQSection } from "@/components/atoms/faq-section";
import { urlFAQ_en, urlFAQ_id } from "../data/faq-data";

export function URLEncoder() {
  const locale = useLocale();
  const t = i18nURLEncoder[locale];

  const [text, setText] = useState<string>("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [copied, setCopied] = useState(false);

  // ----- Encode / Decode Logic -----
  const output = useMemo(() => {
    if (!text) return "";
    try {
      return mode === "encode" ? urlEncode(text) : urlDecode(text);
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
    mode === "encode" ? baseURLEncodeSamples : baseURLDecodeSamples;

  return (
    <div>
    <div className="grid lg:grid-cols-2 gap-4">
      {/* INPUT SECTION */}
      <ToolCard>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">{t.input}</h2>

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
          <SampleDataComponent setText={setText} sampleData={sampleData} />
        </div>

        <TextEditor
          title={t["text-editor"]}
          text={text}
          setText={setText}
        />
      </ToolCard>

      {/* OUTPUT SECTION */}
      <ToolCard>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">{t.output}</h2>

          <Button
            size="sm"
            variant="outline"
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

<FAQSection items={locale === "en" ? urlFAQ_en : urlFAQ_id } />
    </div>
  );
}
