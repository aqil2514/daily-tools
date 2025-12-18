import { SubHeading } from "@/components/atoms/text/subHeading";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import { extractUrls } from "../utils/extract-urls";
import { Dispatch, SetStateAction, useMemo } from "react";
import { toast } from "sonner";

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function URLExtractorPreview({ text, setText }: Props) {
  const t = useTranslations("tools-text.url-extractor");
  const urls = useMemo(() => extractUrls(text), [text]);

  const copyHandler = async (url?: string) => {
    if (urls.length === 0) {
      toast.error(t("download-empty-error"));
      return;
    }
    
    if (url) {
      await navigator.clipboard.writeText(url);
      toast.success(t("copy-success"));
      return;
    }

    const items = urls.join("\n");

    await navigator.clipboard.writeText(items);
    toast.success(t("copy-bulks-success"));
  };

  const clearHandler = () => setText("");

  // 🔽 Handler download TXT
  const downloadHandler = () => {
    if (urls.length === 0) {
      toast.error(t("download-empty-error"));
      return;
    }

    const content = urls.join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "extracted-urls.txt";
    a.click();

    URL.revokeObjectURL(url);

    toast.success(t("download-success"));
  };

  return (
    <div className="space-y-4">
      <SubHeading className="mt-0">{t("result-title")}</SubHeading>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" size="sm" onClick={() => copyHandler()}>
          {t("copy-all")}
        </Button>

        {/* 🔽 Button Download */}
        <Button variant="outline" size="sm" onClick={downloadHandler}>
          {t("download")}
        </Button>

        <Button variant="outline" size="sm" onClick={clearHandler}>
          {t("clear")}
        </Button>
      </div>

      <div className="border rounded-md p-4 bg-card text-card-foreground">
        <ScrollArea className="h-48">
          <div className="space-y-2">
            {urls.map((url) => (
              <div
                key={url}
                className="group relative p-2 rounded border bg-muted text-sm break-all"
              >
                {url}
                <Button
                  onClick={() => copyHandler(url)}
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Copy size={16} />
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
