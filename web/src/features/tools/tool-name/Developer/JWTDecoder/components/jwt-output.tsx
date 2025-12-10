"use client";

import { ToolCard } from "@/components/tools/tool-card";
import { safeDecodeJwt } from "../utils/decode-jwt";
import { Button } from "@/components/ui/button";
import { Copy, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useLocale } from "next-intl";
import { i18nJwtDecoder } from "../i18n";

interface Props {
  text: string;
}

export function JWTOutput({ text }: Props) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const locale = useLocale() as "en" | "id";
  const t = i18nJwtDecoder[locale];

  const handleCopy = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  // Empty state
  if (!text || text.trim().length === 0) {
    return (
      <ToolCard>
        <div className="text-center text-muted-foreground text-sm py-8">
          {t["empty"]}
        </div>
      </ToolCard>
    );
  }

  const { data, error } = safeDecodeJwt(text);

  return (
    <ToolCard>
      {/* ERROR STATE */}
      {error && (
        <div className="flex items-start gap-3 p-4 mb-4 rounded-md bg-red-50 text-red-700 border border-red-200 text-sm">
          <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />

          <div>
            {error === "INVALID_FORMAT" && t["error-invalidFormat"]}
            {error === "INVALID_BASE64" && t["error-invalidBase64"]}
            {error === "UNKNOWN_ERROR" && t["error-unknownError"]}
          </div>
        </div>
      )}

      {/* VALID STATE */}
      {data && !error && (
        <div className="space-y-6">
          {/* HEADER */}
          <section className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">{t["header"]}</h3>
              <Button
                size="sm"
                variant="outline"
                className="h-7"
                onClick={() =>
                  handleCopy(JSON.stringify(data.header, null, 2), "header")
                }
              >
                <Copy size={14} />
                {copiedKey === "header" ? t["copied"] : t["copy"]}
              </Button>
            </div>

            <pre className="bg-muted p-3 rounded-md text-xs overflow-auto whitespace-pre-wrap">
              {JSON.stringify(data.header, null, 2)}
            </pre>
          </section>

          {/* PAYLOAD */}
          <section className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">{t["payload"]}</h3>
              <Button
                size="sm"
                variant="outline"
                className="h-7"
                onClick={() =>
                  handleCopy(JSON.stringify(data.payload, null, 2), "payload")
                }
              >
                <Copy size={14} />
                {copiedKey === "payload" ? t["copied"] : t["copy"]}
              </Button>
            </div>

            <pre className="bg-muted p-3 rounded-md text-xs overflow-auto whitespace-pre-wrap">
              {JSON.stringify(data.payload, null, 2)}
            </pre>
          </section>

          {/* SIGNATURE */}
          <section className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">{t["signature"]}</h3>
              <Button
                size="sm"
                variant="outline"
                className="h-7"
                onClick={() => handleCopy(data.signature, "signature")}
              >
                <Copy size={14} />
                {copiedKey === "signature" ? t["copied"] : t["copy"]}
              </Button>
            </div>

            <pre className="bg-muted p-3 rounded-md text-xs overflow-auto whitespace-pre-wrap">
              {data.signature}
            </pre>
          </section>
        </div>
      )}
    </ToolCard>
  );
}
