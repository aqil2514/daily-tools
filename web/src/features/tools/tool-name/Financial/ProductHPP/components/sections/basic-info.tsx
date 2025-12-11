"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useProductHPP } from "../../store/provider";

import { useLocale } from "next-intl";
import { basicInfoI18n } from "../../i18n/sections/basic-info";

export function BasicInfo() {
  const { basicInfo, setBasicInfo } = useProductHPP();
  const locale = useLocale();
  const t = basicInfoI18n[locale]; // Ambil teks sesuai bahasa

  return (
    <Card className="border rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{t.cardTitle}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {t.cardDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* GRID INPUTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PRODUCT NAME */}
          <div className="space-y-2">
            <Label htmlFor="product-name">{t.productNameLabel}</Label>
            <Input
              id="product-name"
              placeholder={t.productNamePlaceholder}
              value={basicInfo.productName}
              onChange={(e) =>
                setBasicInfo({
                  ...basicInfo,
                  productName: e.target.value,
                })
              }
            />
          </div>

          {/* OUTPUT QUANTITY */}
          <div className="space-y-2">
            <Label htmlFor="quantity-product">
              {t.quantityLabel}
            </Label>
            <Input
              id="quantity-product"
              type="number"
              min={1}
              placeholder={t.quantityPlaceholder}
              value={basicInfo.outputQuantity}
              onChange={(e) =>
                setBasicInfo({
                  ...basicInfo,
                  outputQuantity: e.target.valueAsNumber || 1,
                })
              }
            />
          </div>

        </div>

        {/* PREVIEW SENTENCE */}
        <p className="text-sm text-muted-foreground">
          {t.previewPrefix}{" "}
          <span className="font-medium text-foreground">
            {basicInfo.outputQuantity} pcs
          </span>{" "}
          {basicInfo.productName ? (
            <span className="font-medium">
              {t.previewProduct} {basicInfo.productName}
            </span>
          ) : (
            t.previewProduct
          )}
          .
        </p>
      </CardContent>
    </Card>
  );
}
