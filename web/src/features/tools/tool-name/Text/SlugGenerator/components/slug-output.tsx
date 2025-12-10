"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocale } from "next-intl";
import { i18nSlugOutput } from "../i18n/output";
import { toast } from "sonner";

export function SlugOutput({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);

  const locale = useLocale();
  const t = i18nSlugOutput[locale];

  const handleCopy = () => {
    if (!slug) return;

    navigator.clipboard.writeText(slug);
    setCopied(true);

    toast.success(t.copySuccess);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-3">
      <Label className="font-semibold text-sm">{t.title}</Label>

      <div className="border rounded-md bg-muted/40 p-3 flex items-center gap-3">
        {/* Scrollable Slug Text */}
        <ScrollArea className="h-12 flex-1">
          <div className="flex items-center h-full">
            <span
              className={`font-mono text-sm break-all ${
                slug ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {slug || t.placeholder}
            </span>
          </div>
        </ScrollArea>

        {/* Copy Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="transition-all hover:bg-accent"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </Button>
      </div>
    </div>
  );
}
