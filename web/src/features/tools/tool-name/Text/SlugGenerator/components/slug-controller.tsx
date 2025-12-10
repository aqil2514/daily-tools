"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { SlugControllerState } from "../types/interface";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";
import { i18nSlugController } from "../i18n/controller";

interface Props {
  controller: SlugControllerState;
  setController: Dispatch<SetStateAction<SlugControllerState>>;
}

export function SlugController({ controller, setController }: Props) {
  const locale = useLocale();
  const t = i18nSlugController[locale];

  const activeBtn =
    "border-primary text-primary shadow-sm hover:scale-[1.05] hover:bg-primary/10";
  const normalBtn = "hover:scale-[1.03] active:scale-[0.97]";

  return (
    <div className="space-y-6">
      {/* Delimiter Section */}
      <div className="space-y-2">
        <Label className="font-semibold">{t.delimiter.title}</Label>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className={`${controller.delimiter === "-" ? activeBtn : normalBtn}`}
            onClick={() =>
              setController((prev) => ({ ...prev, delimiter: "-" }))
            }
          >
            {t.delimiter.dash}
          </Button>

          <Button
            variant="outline"
            className={`${controller.delimiter === "_" ? activeBtn : normalBtn}`}
            onClick={() =>
              setController((prev) => ({ ...prev, delimiter: "_" }))
            }
          >
            {t.delimiter.underscore}
          </Button>
        </div>
      </div>

      <Separator />

      {/* Case Section */}
      <div className="space-y-2">
        <Label className="font-semibold">{t.case.title}</Label>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className={`${controller.lowercase ? activeBtn : normalBtn}`}
            onClick={() =>
              setController((prev) => ({ ...prev, lowercase: true }))
            }
          >
            {t.case.lowercase}
          </Button>

          <Button
            variant="outline"
            className={`${!controller.lowercase ? activeBtn : normalBtn}`}
            onClick={() =>
              setController((prev) => ({ ...prev, lowercase: false }))
            }
          >
            {t.case.keep}
          </Button>
        </div>
      </div>

      <Separator />

      {/* Toggle Options */}
      <div className="grid sm:grid-cols-2 gap-6">

        {/* Collapse Spaces */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">{t.collapseSpaces.title}</p>
            <p className="text-xs text-muted-foreground">{t.collapseSpaces.desc}</p>
          </div>
          <Switch
            checked={controller.collapseSpaces}
            onCheckedChange={(val) =>
              setController((prev) => ({ ...prev, collapseSpaces: val }))
            }
          />
        </div>

        {/* Remove Special */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">{t.removeSpecial.title}</p>
            <p className="text-xs text-muted-foreground">{t.removeSpecial.desc}</p>
          </div>

          <Switch
            checked={controller.removeSpecial}
            onCheckedChange={(val) =>
              setController((prev) => ({ ...prev, removeSpecial: val }))
            }
          />
        </div>

        {/* Auto Update */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">{t.autoUpdate.title}</p>
            <p className="text-xs text-muted-foreground">{t.autoUpdate.desc}</p>
          </div>
          <Switch
            checked={controller.autoUpdate}
            onCheckedChange={(val) =>
              setController((prev) => ({ ...prev, autoUpdate: val }))
            }
          />
        </div>

        {/* Trim Whitespace */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">{t.trimWhitespace.title}</p>
            <p className="text-xs text-muted-foreground">{t.trimWhitespace.desc}</p>
          </div>

          <Switch
            checked={controller.trimWhitespace}
            onCheckedChange={(val) =>
              setController((prev) => ({ ...prev, trimWhitespace: val }))
            }
          />
        </div>
      </div>
    </div>
  );
}
