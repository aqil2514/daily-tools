"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import {
  PasswordGeneratorProvider,
  usePasswordGenerator,
} from "../store/provider";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { generatePassword } from "../utils/generate-password";
import { StrengthMeter } from "./strength-meter";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { SecurityTips } from "./security-tips";

export default function PasswordGenerator() {
  return (
    <PasswordGeneratorProvider>
      <InnerTemplate />
    </PasswordGeneratorProvider>
  );
}

const InnerTemplate = () => {
  const { state, setSetting } = usePasswordGenerator();
  const [result, setResult] = useState("");
  const t = useTranslations("tools-developer.password-generator");

  const generate = () => {
    const pass = generatePassword(state.settings);
    setResult(pass);
    toast.success(t("generate-success"));
  };

  const copy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    toast.success(t("copySuccess"));
  };

  return (
    <div className="space-y-4">
      <ToolCard>
        {/* LENGTH */}
        <div className="space-y-2">
          <Label>{t("length", { value: state.settings.length })}</Label>

          <Slider
            min={4}
            max={50}
            value={[state.settings.length]}
            onValueChange={([v]) => setSetting("length", v)}
          />
        </div>

        {/* CHARACTER OPTIONS */}
        <div className="grid grid-cols-2 gap-4">
          <Label className="flex items-center gap-2">
            <Checkbox
              checked={state.settings.useLowercase}
              onCheckedChange={(v) => setSetting("useLowercase", Boolean(v))}
            />
            {t("lowercase")}
          </Label>

          <Label className="flex items-center gap-2">
            <Checkbox
              checked={state.settings.useUppercase}
              onCheckedChange={(v) => setSetting("useUppercase", Boolean(v))}
            />
            {t("uppercase")}
          </Label>

          <Label className="flex items-center gap-2">
            <Checkbox
              checked={state.settings.useNumbers}
              onCheckedChange={(v) => setSetting("useNumbers", Boolean(v))}
            />
            {t("numbers")}
          </Label>

          <Label className="flex items-center gap-2">
            <Checkbox
              checked={state.settings.useSymbols}
              onCheckedChange={(v) => setSetting("useSymbols", Boolean(v))}
            />
            {t("symbols")}
          </Label>

          <Label className="flex items-center gap-2">
            <Checkbox
              checked={state.settings.allowSpaces}
              onCheckedChange={(v) => setSetting("allowSpaces", Boolean(v))}
            />
            {t("allowSpaces")}
          </Label>

          <Label className="flex items-center gap-2">
            <Checkbox
              checked={state.settings.excludeSimilar}
              onCheckedChange={(v) => setSetting("excludeSimilar", Boolean(v))}
            />
            {t("excludeSimilar")}
          </Label>

          <Label className="flex items-center gap-2">
            <Checkbox
              checked={state.settings.excludeDuplicates}
              onCheckedChange={(v) =>
                setSetting("excludeDuplicates", Boolean(v))
              }
            />
            {t("excludeDuplicates")}
          </Label>
        </div>

        {/* CUSTOM CHARACTERS */}
        <div>
          <Label>{t("customCharacters")}</Label>
          <Input
            placeholder={t("placeholderCustomCharacters")}
            value={state.settings.customCharacters}
            onChange={(e) => setSetting("customCharacters", e.target.value)}
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-2">
          <Button onClick={generate}>{t("generate")}</Button>
          <Button variant="secondary" onClick={copy} disabled={!result}>
            {t("copy")}
          </Button>
        </div>

        {/* RESULT */}
        {result && (
          <>
            <div className="p-4 bg-muted rounded-lg font-mono break-all">
              {result}
            </div>

            <StrengthMeter value={result} />
          </>
        )}
      </ToolCard>
      <SecurityTips />
    </div>
  );
};
