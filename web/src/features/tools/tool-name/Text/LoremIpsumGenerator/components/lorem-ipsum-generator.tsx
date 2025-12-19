"use client";

import { useState } from "react";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useLocale } from "next-intl";
import { i18nLoremIpsum } from "../i18n/lorem-ipsum";
import { generateLorem, LoremMode } from "../utils/lorem-utils";

export function LoremIpsumGenerator() {
  const locale = useLocale();
  const t = i18nLoremIpsum[locale];

  const [mode, setMode] = useState<LoremMode>("sentences");
  const [count, setCount] = useState(1);
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    setOutput(generateLorem(count, mode));
  };

  return (
    <div className="space-y-6">
      <ToolCard>
        <h2 className="text-lg font-semibold mb-4">{t.heading}</h2>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* LEFT SIDE */}
          <div className="space-y-4">
            <div>
              <label className="font-medium">{t.mode}</label>
              <Select
                value={mode}
                onValueChange={(v) => setMode(v as LoremMode)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="words">Words</SelectItem>
                  <SelectItem value="sentences">Sentences</SelectItem>
                  <SelectItem value="paragraphs">Paragraphs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-medium">{t.count}</label>
              <input
                type="number"
                min={1}
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
                className="border rounded p-2 w-full"
              />
            </div>

            <Button onClick={handleGenerate}>{t["generate-btn"]}</Button>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <label className="font-medium">{t.output}</label>
            <Textarea
              readOnly
              value={output}
              placeholder={t.placeholder}
              className="h-[300px] font-mono text-sm resize-none"
            />
          </div>
        </div>
      </ToolCard>
    </div>
  );
}
