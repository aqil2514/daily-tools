import { ToolCard } from "@/components/tools/tool-card";
import { usePDFMerge } from "../store/provider";
import { SubHeading } from "@/components/atoms/subHeading";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, GripVertical } from "lucide-react";
import { useTranslations } from "next-intl";
import { PDFMergeButton } from "./pdf-button-merge";
import { Label } from "@/components/ui/label";

export function PDFSetting() {
  const t = useTranslations("tools-pdf.pdf-merge.setting");
  const { files, reorderFiles, removeFile, settings, setSettings } =
    usePDFMerge();

  const handleOrderChange = (index: number, value: string) => {
    const newOrder = parseInt(value, 10);
    const max = files.length;

    if (isNaN(newOrder) || newOrder < 1 || newOrder > max) return;
    if (newOrder - 1 === index) return;

    reorderFiles(index, newOrder - 1);
  };

  return (
    <ToolCard>
      <SubHeading>{t("title")}</SubHeading>
      <Separator className="my-4" />

      <div className="space-y-4">
        {files.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t("noFiles")}</p>
        ) : (
          files.map((file, i) => (
            <div
              key={`pdf-merge-item-${i}`}
              className="
                flex items-center gap-3 
                p-3 border rounded-lg 
                bg-muted/30 hover:bg-muted/50 
                transition-colors
              "
            >
              <GripVertical
                className="text-muted-foreground shrink-0"
                size={20}
              />

              <Input
                type="number"
                aria-label={t("order")}
                className="w-16 text-center shrink-0"
                value={i + 1}
                onChange={(e) => handleOrderChange(i, e.target.value)}
              />

              <p className="flex-1 truncate text-sm text-primary">
                {file.name}
              </p>

              <Button
                variant="destructive"
                size="icon"
                aria-label={t("delete")}
                onClick={() => removeFile(i)}
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))
        )}
      </div>
      <Separator className="my-4" />
      <div className="space-y-5">
        <Label htmlFor="output-name">{t("output-name")}</Label>
        <Input
          type="text"
          id="output-name"
          value={settings.outputName}
          onChange={(e) => setSettings({ outputName: e.target.value })}
          onBlur={() => {
            const oldOutput = settings.outputName;
            if (oldOutput.endsWith(".pdf")) return;
            setSettings({ outputName: settings.outputName + ".pdf" });
          }}
        />
      </div>

      <PDFMergeButton />
    </ToolCard>
  );
}
