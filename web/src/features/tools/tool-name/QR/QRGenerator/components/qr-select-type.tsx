"use client";

import { useQRGenerator } from "../store/provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QRType } from "../types/qr-state";

import { useLocale } from "next-intl";
import { i18nQRType } from "../i18n/qr-type";

export function QRSelectType() {
  const locale = useLocale();
  const t = i18nQRType[locale];

  const { qrType, updateQrType, setOptions } = useQRGenerator();

  const qrTypeList = t.types;

  return (
    <Select
      value={qrType}
      onValueChange={(e) => {
        updateQrType(e as QRType);
        setOptions((prev) => ({ ...prev, data: "", image: "" }));
      }}
    >
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder={t.placeholder} />
      </SelectTrigger>

      <SelectContent>
        {Object.keys(qrTypeList).map((key) => (
          <SelectItem value={key} key={key}>
            {qrTypeList[key as QRType]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
