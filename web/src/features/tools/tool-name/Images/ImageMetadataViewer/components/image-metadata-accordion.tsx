import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "next-intl";

import { METADATA_GROUP_LABEL } from "../utils/metadata-groups";
import { MetadataGroup, MetadataEntry, ExifTag } from "../types/metadata";
import { isImportantExifKey } from "../utils/important-exif";
import { useState } from "react";
import { toast } from "sonner";
import { i18nImageMetadataAccordion } from "../i18n/image-metadata-accordion";

interface Props {
  meta: {
    filteredGroupedData: Record<MetadataGroup, MetadataEntry[]> | null;
    formatExifValue: (value: ExifTag["value"]) => string;
  };
}

interface CopyText {
  idle: string;
  success: string;
  toast: string;
}

function CopyButton({ value, text }: { value: string; text: CopyText }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success(text.toast);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      onClick={handleCopy}
      className="
        opacity-0 group-hover:opacity-100
        transition-opacity
        rounded-md border px-2 py-1
        text-xs text-muted-foreground
        hover:bg-muted
      "
    >
      {copied ? text.success : text.idle}
    </button>
  );
}

interface Props {
  meta: {
    filteredGroupedData: Record<MetadataGroup, MetadataEntry[]> | null;
    formatExifValue: (value: ExifTag["value"]) => string;
  };
}

export function ImageMetadataAccordion({ meta }: Props) {
  const locale = useLocale();
  const t = i18nImageMetadataAccordion[locale];

  if (!meta.filteredGroupedData) return null;

  return (
    <Accordion type="multiple" className="w-full">
      {(
        Object.entries(meta.filteredGroupedData) as [
          MetadataGroup,
          MetadataEntry[]
        ][]
      ).map(([group, items]) => {
        if (items.length === 0) return null;

        return (
          <AccordionItem key={group} value={group}>
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                {METADATA_GROUP_LABEL[group]}
                <Badge variant="secondary">{items.length}</Badge>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="divide-y rounded-md border">
                {items.map(([key, value]) => {
                  const formatted = meta.formatExifValue(value.value);
                  const important = isImportantExifKey(key);

                  return (
                    <div
                      key={key}
                      className={`group grid grid-cols-1 gap-2 px-4 py-3 sm:grid-cols-[220px_1fr]
                        ${important ? "bg-muted/40" : ""}`}
                    >
                      <div className="font-medium text-sm break-all">{key}</div>

                      <div className="flex items-start justify-between gap-2">
                        <div
                          className={`text-sm break-all ${
                            important
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {formatted}
                        </div>

                        <CopyButton value={formatted} text={t.copy} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
