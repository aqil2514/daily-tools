"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Copy, Check } from "lucide-react";
import { UUIDState } from "./uuid-generator";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import { useLocale } from "next-intl";
import { i18nUUIDFormat } from "../i18n";

interface Props {
  uuidState: UUIDState;
  setUuidState: Dispatch<SetStateAction<UUIDState>>;
  uuids: string[];
}

export function UUIDFormat({ setUuidState, uuidState, uuids }: Props) {
  const [copied, setCopied] = useState(false);
  const locale = useLocale();
  const t = i18nUUIDFormat[locale];

  const copyHandler = async () => {
    if (!uuids.length) return;

    await navigator.clipboard.writeText(uuids.join("\n"));
    setCopied(true);
    toast.success(t["copy-all-success"]);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-muted/40 p-4 rounded-md border">
      {/* Use Dashes */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <Label className="font-medium">{t["use-dash"]}</Label>
          <p className="text-xs text-muted-foreground">
            {t["use-dash-desc"]}
          </p>
        </div>

        <Switch
          checked={uuidState.formatOptions.withDash}
          onCheckedChange={(value) =>
            setUuidState((prev) => ({
              ...prev,
              formatOptions: { ...prev.formatOptions, withDash: value },
            }))
          }
        />
      </div>

      {/* Uppercase */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <Label className="font-medium">{t.uppercase}</Label>
          <p className="text-xs text-muted-foreground">
            {t["uppercase-desc"]}
          </p>
        </div>

        <Switch
          checked={uuidState.formatOptions.uppercase}
          onCheckedChange={(value) =>
            setUuidState((prev) => ({
              ...prev,
              formatOptions: { ...prev.formatOptions, uppercase: value },
            }))
          }
        />
      </div>

      {/* Copy All Button */}
      <Button
        variant="secondary"
        className="flex items-center gap-2 w-fit transition-all hover:scale-[1.03] active:scale-[0.97]"
        onClick={copyHandler}
      >
        <div
          className={`
            transition-all duration-300 flex items-center gap-2
            ${copied ? "text-green-600 scale-110" : ""}
          `}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? t.copied : t["copy-all"]}
        </div>
      </Button>
    </div>
  );
}
