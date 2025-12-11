"use client";

import { useState } from "react";
import { ToolCard } from "@/components/tools/tool-card";
import { TextEditor } from "@/components/atoms/text-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { testRegex } from "../utils/regex-utils";
import { regexSamples } from "../data/sample-data";

import { useLocale } from "next-intl";
import { i18nRegexTester } from "../i18n/regex-tester";
import { RegexSampleDataComponent } from "./regex-sample-data";
import { RegexFlagsSelector } from "./regex-flags";
import { FAQSection } from "@/components/atoms/faq-section";
import { regexFAQ_en, regexFAQ_id } from "../data/faq-data";

export function RegexTester() {
  const locale = useLocale();
  const t = i18nRegexTester[locale];

  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const result = testRegex(pattern, flags, text);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result.matches.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4">
        {/* LEFT SIDE */}
        <ToolCard>
          <h2 className="text-lg font-semibold mb-3">{t.pattern}</h2>

          <input
            className="border rounded p-2 mb-3 w-full"
            placeholder={t["pattern-placeholder"]}
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
          />

          <RegexFlagsSelector flags={flags} setFlags={setFlags} />

          <RegexSampleDataComponent
            sampleData={regexSamples}
            setPattern={setPattern}
            setText={setText}
          />

          <TextEditor title={t.input} text={text} setText={setText} />
        </ToolCard>

        {/* RIGHT SIDE */}
        <ToolCard>
          <div className="flex justify-between mb-3">
            <h2 className="text-lg font-semibold">{t.output}</h2>

            <Button
              variant="outline"
              size="sm"
              disabled={!result.matches.length}
              onClick={handleCopy}
            >
              <Copy size={16} className="mr-2" />
              {copied ? t.copied : t.copy}
            </Button>
          </div>

          {result.error ? (
            <p className="text-red-500">
              {t["error-invalid"]}: {result.error}
            </p>
          ) : result.matches.length === 0 ? (
            <p>{t["matches-none"]}</p>
          ) : (
            <ul className="list-disc ml-4">
              {result.matches.map((match, i) => (
                <li key={i}>{match}</li>
              ))}
            </ul>
          )}
        </ToolCard>
      </div>

      <FAQSection items={locale === "en" ? regexFAQ_en : regexFAQ_id } />
    </div>
  );
}
