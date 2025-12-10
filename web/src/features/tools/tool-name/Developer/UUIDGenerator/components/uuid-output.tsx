"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocale } from "next-intl";
import { i18nUUIDOutput } from "../i18n";

interface Props {
  uuids: string[];
}

export function UUIDOutput({ uuids }: Props) {
  const locale = useLocale();
  const t = i18nUUIDOutput[locale];

  const hasData = uuids && uuids.length > 0;
  const [copiedUUID, setCopiedUUID] = useState<string | null>(null);

  const copyHandler = async (uuid: string) => {
    await navigator.clipboard.writeText(uuid);
    setCopiedUUID(uuid);
    toast.success(t["copy-success"]);

    setTimeout(() => setCopiedUUID(null), 1500);
  };

  return (
    <div className="space-y-4">
      <Label className="text-sm font-semibold">{t.title}</Label>

      <ScrollArea className="h-96">
        <div className="space-y-2 border rounded-md p-4 bg-muted/40">
          {/* Empty */}
          {!hasData && (
            <div className="text-center py-6 text-sm text-muted-foreground">
              {t.empty}
            </div>
          )}

          {/* List */}
          {hasData &&
            uuids.map((uuid) => {
              const isCopied = copiedUUID === uuid;

              return (
                <div
                  key={uuid}
                  className="
                    flex justify-between items-center 
                    px-3 py-2 bg-background rounded border
                    transition-colors duration-200
                    hover:bg-accent
                  "
                >
                  <span className="font-mono text-sm break-all">{uuid}</span>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyHandler(uuid)}
                  >
                    <div
                      className={`
                        transition-all duration-300
                        ${
                          isCopied
                            ? "opacity-100 scale-110 text-green-600"
                            : "opacity-100"
                        }
                      `}
                    >
                      {isCopied ? <Check size={16} /> : <Copy size={16} />}
                    </div>
                  </Button>
                </div>
              );
            })}
        </div>
      </ScrollArea>
    </div>
  );
}
