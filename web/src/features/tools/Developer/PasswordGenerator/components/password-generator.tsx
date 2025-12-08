"use client";

import { ToolCard } from "@/components/tools/tool-card";
import { usePasswordGenerator } from "../store/provider";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { generatePassword } from "../utils/generate-password";
import { StrengthMeter } from "./strength-meter";

export default function PasswordGenerator() {
  const { state, setSetting } = usePasswordGenerator();
  const [result, setResult] = useState("");

  const generate = () => {
    const pass = generatePassword(state.settings);
    setResult(pass);
  };

  const copy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
  };

  return (
    <ToolCard>
      {/* LENGTH */}
      <div className="space-y-2">
        <Label>Password Length: {state.settings.length}</Label>
        <Slider
          min={4}
          max={128}
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
          Lowercase (a-z)
        </Label>

        <Label className="flex items-center gap-2">
          <Checkbox
            checked={state.settings.useUppercase}
            onCheckedChange={(v) => setSetting("useUppercase", Boolean(v))}
          />
          Uppercase (A-Z)
        </Label>

        <Label className="flex items-center gap-2">
          <Checkbox
            checked={state.settings.useNumbers}
            onCheckedChange={(v) => setSetting("useNumbers", Boolean(v))}
          />
          Numbers (0-9)
        </Label>

        <Label className="flex items-center gap-2">
          <Checkbox
            checked={state.settings.useSymbols}
            onCheckedChange={(v) => setSetting("useSymbols", Boolean(v))}
          />
          Symbols (!@#$...)
        </Label>

        <Label className="flex items-center gap-2">
          <Checkbox
            checked={state.settings.allowSpaces}
            onCheckedChange={(v) => setSetting("allowSpaces", Boolean(v))}
          />
          Allow Spaces
        </Label>

        <Label className="flex items-center gap-2">
          <Checkbox
            checked={state.settings.excludeSimilar}
            onCheckedChange={(v) => setSetting("excludeSimilar", Boolean(v))}
          />
          Exclude Similar (Il1O0)
        </Label>

        <Label className="flex items-center gap-2">
          <Checkbox
            checked={state.settings.excludeDuplicates}
            onCheckedChange={(v) => setSetting("excludeDuplicates", Boolean(v))}
          />
          No Duplicate Characters
        </Label>
      </div>

      {/* CUSTOM CHARACTERS */}
      <div>
        <Label>Custom Characters</Label>
        <Input
          placeholder="ABC123!@#"
          value={state.settings.customCharacters}
          onChange={(e) => setSetting("customCharacters", e.target.value)}
        />
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-2">
        <Button onClick={generate}>Generate</Button>
        <Button variant="secondary" onClick={copy} disabled={!result}>
          Copy
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
  );
}
