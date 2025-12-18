import { SubHeading } from "@/components/atoms/text/subHeading";
import { useTranslations } from "next-intl";
import { useRemoveDuplicateLines } from "../store/provider";
import { Textarea } from "@/components/ui/textarea";
import { removeDuplicateLines } from "../utils/remove-duplicate-lines";
import { Button } from "@/components/ui/button";
import { BrushCleaning, CaseSensitive, Scissors } from "lucide-react";
import { DedupeOptions } from "../types/inteface";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function OutputSection() {
  const { text, settings, setSettings } = useRemoveDuplicateLines();
  const t = useTranslations("tools-text.remove-duplicate-lines");

  const deduped = removeDuplicateLines(text, {
    caseSensitive: settings.caseSensitive,
    removeEmpty: settings.removeEmpty,
    trim: settings.trim,
  });

  const updateSetting = (key: keyof DedupeOptions) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const variantSelect = (state: boolean) => (state ? "default" : "outline");

  return (
    <TooltipProvider>
      <div className="space-y-4">
        <SubHeading className="mt-0">{t("output-title")}</SubHeading>

        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 p-3 rounded-xl border bg-card shadow-sm">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={variantSelect(settings.caseSensitive)}
                size="icon"
                onClick={() => updateSetting("caseSensitive")}
                className="transition-all"
              >
                <CaseSensitive size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t("options.caseSensitive")}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={variantSelect(settings.removeEmpty)}
                size="icon"
                onClick={() => updateSetting("removeEmpty")}
                className="transition-all"
              >
                <BrushCleaning size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t("options.removeEmpty")}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={variantSelect(settings.trim)}
                size="icon"
                onClick={() => updateSetting("trim")}
                className="transition-all"
              >
                <Scissors size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t("options.trimLines")}</TooltipContent>
          </Tooltip>
        </div>

        {/* Summary */}
        <div className="rounded-xl border bg-muted/40 p-4 flex flex-wrap gap-6 text-sm">
          <div>
            <p className="text-muted-foreground">{t("summary.totalLines")}</p>
            <p className="font-semibold">{deduped.totalLines}</p>
          </div>

          <div>
            <p className="text-muted-foreground">{t("summary.uniqueLines")}</p>
            <p className="font-semibold">{deduped.uniqueLines}</p>
          </div>

          <div>
            <p className="text-muted-foreground">{t("summary.removedLines")}</p>
            <p className="font-semibold text-red-600 dark:text-red-400">
              {deduped.removedLines}
            </p>
          </div>
        </div>

        {/* Output */}
        <div className="rounded-xl border bg-card shadow-sm">
          <Textarea
            value={deduped.result}
            readOnly
            className="h-96 rounded-xl border-none focus-visible:ring-0"
          />
        </div>
      </div>
    </TooltipProvider>
  );
}
