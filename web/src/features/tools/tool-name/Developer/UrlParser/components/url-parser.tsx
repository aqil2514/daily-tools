"use client";

import { useState } from "react";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { parseUrl } from "../utils/parseUrl";
import { UrlParserInput } from "./url-input";
import { UrlCoreOutput } from "./url-core-output";
import { UrlQueryOutput } from "./url-query-output";
import { UrlInsightsOutput } from "./url-insights-output";
import { UrlJsonOutput } from "./url-json-output";
import { useLocale } from "next-intl";
import { urlParserErrorI18n } from "../i18n/error";

export default function UrlParser() {
  const [input, setInput] = useState("");

  const locale = useLocale();
  const errorTexts = urlParserErrorI18n[locale];

  const result = parseUrl(input);
  const isEmpty = input.trim().length === 0;

  return (
    <div className="space-y-6">
      <UrlParserInput value={input} setValue={setInput} />

      {/* Error State */}
      {"code" in result && !isEmpty && (
        <ToolCard>
          <div className="text-sm text-destructive text-center py-4">
            {errorTexts[result.code]}
          </div>
        </ToolCard>
      )}

      {/* Parsed Output */}
      {"core" in result && !isEmpty && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UrlJsonOutput data={result} />
          <UrlCoreOutput core={result.core} />
          <UrlQueryOutput query={result.query} />
          <UrlInsightsOutput insights={result.insights} />
        </div>
      )}
    </div>
  );
}
