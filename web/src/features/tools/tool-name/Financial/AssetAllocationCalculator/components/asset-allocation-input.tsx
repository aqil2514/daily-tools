"use client";

import { ToolCard } from "@/components/tools/tool-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CurrencyField } from "@/components/atoms/currency-field";
import { SubHeading } from "@/components/atoms/subHeading";
import { Plus, Trash2 } from "lucide-react";
import { AssetAllocationInput, AssetItem } from "../types/input";
import { Dispatch, SetStateAction } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "next-intl";
import { assetAllocationInputI18n } from "../i18n/input/asset-allocation-input";

interface Props {
  inputData: AssetAllocationInput;
  setInputData: Dispatch<SetStateAction<AssetAllocationInput>>;
}

export function AssetAllocationInputComp({
  inputData,
  setInputData,
}: Props) {
  const locale = useLocale();
  const t = assetAllocationInputI18n[locale];

  const addAsset = () => {
    const newAsset: AssetItem = {
      category: "",
      amount: 0,
    };

    setInputData((prev) => ({
      ...prev,
      assets: [...prev.assets, newAsset],
    }));
  };

  const updateAsset = (index: number, updated: Partial<AssetItem>) => {
    setInputData((prev) => ({
      ...prev,
      assets: prev.assets.map((asset, i) =>
        i === index ? { ...asset, ...updated } : asset
      ),
    }));
  };

  const removeAsset = (index: number) => {
    setInputData((prev) => ({
      ...prev,
      assets: prev.assets.filter((_, i) => i !== index),
    }));
  };

  return (
    <ToolCard>
      <div className="space-y-6">
        <SubHeading className="mt-0">
          {t.heading}
        </SubHeading>

        {inputData.assets.length === 0 && (
          <p className="text-sm text-muted-foreground">
            {t.emptyHint}
          </p>
        )}

        {/* ASSET ROWS */}
        <ScrollArea className="h-[420px] pr-2">
          <div>
            {inputData.assets.map((asset, index) => (
              <div
                key={index}
                className="rounded-lg p-3 space-y-0.5"
              >
                {/* ACTION */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeAsset(index)}
                  aria-label={t.removeAssetAria}
                >
                  <Trash2
                    size={18}
                    className="text-muted-foreground"
                  />
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
