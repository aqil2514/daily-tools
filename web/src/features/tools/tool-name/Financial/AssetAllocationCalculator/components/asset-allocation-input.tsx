"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CurrencyField } from "@/components/molecules/input/currency-field";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { Plus, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "next-intl";
import { assetAllocationInputI18n } from "../i18n/input/asset-allocation-input";
import { useAssetAllocation } from "../store/provider";

export function AssetAllocationInputComp() {
  const locale = useLocale();
  const t = assetAllocationInputI18n[locale];
  const { removeAsset, addAsset, inputData, updateAsset } =
    useAssetAllocation();

  return (
    <ToolCard>
      <div className="space-y-6">
        <SubHeading className="mt-0">{t.heading}</SubHeading>

        {inputData.assets.length === 0 && (
          <p className="text-sm text-muted-foreground">{t.emptyHint}</p>
        )}

        {/* ASSET ROWS */}
        <ScrollArea className="h-[420px] pr-2">
          <div>
            {inputData.assets.map((asset, index) => (
              <div key={index} className="rounded-lg p-3 space-y-0.5">
                {/* ACTION */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeAsset(index)}
                  aria-label={t.removeAssetAria}
                >
                  <Trash2 size={18} className="text-muted-foreground" />
                </Button>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* CATEGORY */}
                  <div className="space-y-1">
                    <Label>{t.categoryLabel}</Label>
                    <Input
                      placeholder={t.categoryPlaceholder}
                      value={asset.category}
                      onChange={(e) =>
                        updateAsset(index, {
                          category: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* NAME */}
                  <div className="space-y-1">
                    <Label>{t.assetNameLabel}</Label>
                    <Input
                      placeholder={t.assetNamePlaceholder}
                      value={asset.name ?? ""}
                      onChange={(e) =>
                        updateAsset(index, {
                          name: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* AMOUNT */}
                  <div className="space-y-1 col-span-2 lg:col-span-1">
                    <Label>{t.amountLabel}</Label>
                    <CurrencyField
                      value={asset.amount}
                      onValueChange={(value) =>
                        updateAsset(index, {
                          amount: value,
                        })
                      }
                    />
                  </div>
                </div>

                <Separator className="my-4" />
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* ADD BUTTON */}
        <Button
          variant="outline"
          onClick={addAsset}
          className="w-full flex items-center gap-2"
        >
          <Plus size={16} />
          {t.addAssetButton}
        </Button>
      </div>
    </ToolCard>
  );
}
