"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UUIDState } from "./uuid-generator";
import { Dispatch, SetStateAction } from "react";
import { generateUUIDBatch } from "../utils/uuid-utils";
import { toast } from "sonner";
import { useLocale } from "next-intl";
import { i18nUUIDController } from "../i18n";

interface Props {
  uuidState: UUIDState;
  setUuidState: Dispatch<SetStateAction<UUIDState>>;
  setUuids: Dispatch<SetStateAction<string[]>>;
}

export function UUIDController({ setUuidState, uuidState, setUuids }: Props) {
  const locale = useLocale();
  const t = i18nUUIDController[locale];

  const clickHandler = () => {
    if (!uuidState.count || uuidState.count < 1) {
      toast.error(t["toast-error-invalid"]);
      return;
    }

    const uuids = generateUUIDBatch(uuidState.version, uuidState.count, {
      uppercase: uuidState.formatOptions.uppercase,
      withDash: uuidState.formatOptions.withDash,
    });

    setUuids(uuids);
    toast.success(t["toast-success-generated"]);
  };

  return (
    <div
      className="
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        items-center
        gap-6 
        bg-muted/40 border rounded-md p-4
      "
    >
      {/* Generate Button */}
      <div className="flex flex-col">
        <Button
          className="
            w-full
            transition-all duration-200
            hover:scale-[1.03]
            active:scale-[0.97]
          "
          onClick={clickHandler}
        >
          {t["btn-generate"]}
        </Button>
      </div>

      {/* UUID Version */}
      <div className="flex flex-col gap-2">
        <Label className="font-medium">{t.version}</Label>

        <Select
          value={uuidState.version}
          onValueChange={(val) =>
            setUuidState((prev) => ({
              ...prev,
              version: val as "v1" | "v4" | "v7",
            }))
          }
        >
          <SelectTrigger className="transition-all duration-150 min-w-[200px]">
            <SelectValue placeholder={t["version-placeholder"]} />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="v1">{t["version-v1"]}</SelectItem>
            <SelectItem value="v4">{t["version-v4"]}</SelectItem>
            <SelectItem value="v7">{t["version-v7"]}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bulk Count */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="bulk-count" className="font-medium">
          {t.amount}
        </Label>

        <Input
          id="bulk-count"
          type="number"
          placeholder={t["amount-placeholder"]}
          min={1}
          max={100}
          value={uuidState.count}
          onChange={(e) =>
            setUuidState((prev) => ({
              ...prev,
              count: e.target.valueAsNumber,
            }))
          }
          className="transition-all duration-150 min-w-40"
        />

        {uuidState.count < 1 && (
          <p className="text-xs text-red-500">{t["amount-minimum"]}</p>
        )}
      </div>
    </div>
  );
}
