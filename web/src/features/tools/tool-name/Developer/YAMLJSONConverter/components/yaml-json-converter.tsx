"use client";

import { useState, useMemo } from "react";
import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

import { sampleYAML } from "../data/sample-yaml";
import { sampleJSON } from "../data/sample-json";

import {
  yamlToJson,
  jsonToYaml,
  validateJSON,
  validateYAML,
} from "../utils/convert-utils";

import { SampleDataComponent } from "@/components/atoms/sample-data";
import { useLocale } from "next-intl";
import { i18nYAMLJSON } from "../i18n/yaml-json-converter";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function YAMLJSONConverter() {
  const locale = useLocale();
  const t = i18nYAMLJSON[locale];

  const [text, setText] = useState("");
  const [mode, setMode] = useState<"yaml-to-json" | "json-to-yaml">(
    "yaml-to-json"
  );
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    if (!text.trim()) return "";

    if (mode === "yaml-to-json") {
      const valid = validateYAML(text);
      if (!valid.valid) return t["error-invalid"];
      return yamlToJson(text);
    }

    const valid = validateJSON(text);
    if (!valid.valid) return t["error-invalid"];
    return jsonToYaml(text);
  }, [text, mode, t]);

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const sampleData = mode === "yaml-to-json" ? sampleYAML : sampleJSON;

  return (
      <div className="grid lg:grid-cols-2 gap-4">
        <ToolCard>
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-medium">{t.input}</h2>

            <Select
              value={mode}
              onValueChange={(v) => {
                setText("");
                setMode(v as typeof mode);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t["mode-label"]} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yaml-to-json">
                  {t["yaml-to-json"]}
                </SelectItem>
                <SelectItem value="json-to-yaml">
                  {t["json-to-yaml"]}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <SampleDataComponent setText={setText} sampleData={sampleData} />

          <TextEditor title={t["text-editor"]} text={text} setText={setText} />
        </ToolCard>

        <ToolCard>
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-medium">{t.output}</h2>

            <Button
              variant="outline"
              size="sm"
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
            className="h-[300px] w-full p-3 border rounded font-mono bg-muted resize-none"
          />
        </ToolCard>
      </div>

  );
}
