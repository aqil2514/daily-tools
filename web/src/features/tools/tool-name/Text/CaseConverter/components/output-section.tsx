"use client";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { CaseMode, convertCase } from "../utils/convert-case";
import { toast } from "sonner";

interface Props {
  initialText: string;
}

const modeValues: CaseMode[] = [
  "capitalize",
  "inverse",
  "lower",
  "sentence",
  "title",
  "upper",
];
export function OutputSection({ initialText }: Props) {
  const t = useTranslations("tools-text.case-converter");
  const [mode, setMode] = useState<CaseMode>("capitalize");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyHandler = async () => {
    try {
      setIsCopied(true);
      await navigator.clipboard.writeText(convertCase(initialText, mode));
      toast.success(t("copied-success"));
    } catch (error) {
      console.error(error);
      toast.error(t("copied-failed"));
    } finally {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };
  return (
    <div className="space-y-4">
      <SubHeading className="mt-0">{t("result-title")}</SubHeading>

      {/* Mode Selector */}
      <div className="flex flex-wrap gap-2">
        {modeValues.map((value) => (
          <Button
            size={"sm"}
            variant={mode === value ? "default" : "outline"}
            onClick={() => setMode(value)}
            key={value}
          >
            {convertCase(value, value)}
          </Button>
        ))}
      </div>

      {/* Output Card */}
      <div className="rounded-xl border bg-card shadow-sm p-4 space-y-4">
        {/* Copy Button */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={copyHandler}
            disabled={isCopied} // optional
          >
            {isCopied ? (
              <>
                <Check size={16} className="text-green-500" />
                {t("copied")}
              </>
            ) : (
              <>
                <Copy size={16} />
                {t("copy")}
              </>
            )}
          </Button>
        </div>

        {/* Output Textarea */}
        <Textarea
          readOnly
          placeholder={
            !!initialText ? convertCase(initialText, mode) : t("no-result")
          }
          className="h-72 rounded-xl border-none focus-visible:ring-0"
        />
      </div>
    </div>
  );
}
