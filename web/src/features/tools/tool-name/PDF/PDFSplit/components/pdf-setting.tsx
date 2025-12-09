"use client";

import { ToolCard } from "@/components/tools/tool-card";
import { SubHeading } from "@/components/atoms/subHeading";
import { Separator } from "@/components/ui/separator";
import { usePdfSplit } from "../store/provider";
import { Input } from "@/components/ui/input";
import { PDFSplitButton } from "./pdf-split-button";

export function PDFSetting() {
  const { setting, setSetting } = usePdfSplit();

  const updateOutputName = (name: string) => {
    setSetting({
      ...setting,
      outputName: name,
    });
  };

  return (
    <ToolCard>
      <SubHeading>Pengaturan Output</SubHeading>
      <Separator className="my-4" />

      <div className="space-y-2">
        <p className="text-sm font-medium">Nama Output</p>
        <Input
          placeholder="contoh: hasil-split"
          value={setting.outputName}
          onChange={(e) => updateOutputName(e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          Nama ini akan digunakan sebagai prefix untuk file hasil split.
        </p>
      </div>
      <Separator />
      <PDFSplitButton />
    </ToolCard>
  );
}
