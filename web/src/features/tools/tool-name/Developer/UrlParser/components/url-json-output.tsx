"use client";

import { ParsedUrlResult } from "../types/output";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useLocale } from "next-intl";
import { urlJsonOutputI18n } from "../i18n/json-output";

interface Props {
  data: ParsedUrlResult;
}

export function UrlJsonOutput({ data }: Props) {
  const [copied, setCopied] = useState(false);

  const locale = useLocale();
  const t = urlJsonOutputI18n[locale];

  const jsonString = JSON.stringify(data, null, 2);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <ToolCard>
      <div className="flex items-center justify-between">
        <SubHeading className="mt-0">{t.title}</SubHeading>

        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="flex items-center gap-2"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? t.copied : t.copy}
        </Button>
      </div>

      <pre
        className="
          mt-4
          max-h-96
          overflow-auto
          rounded-md
          border
          bg-muted
          p-4
          text-xs
          font-mono
        "
      >
        {jsonString}
      </pre>
    </ToolCard>
  );
}
