"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RefreshCw, Trash2, Wand2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { SlugControllerState } from "../types/interface";
import { defaultSlugControllerState } from "../data/default";
import { useLocale } from "next-intl";
import { i18nSlugAction } from "../i18n/action";

interface Props {
  setText: Dispatch<SetStateAction<string>>;
  setController: Dispatch<SetStateAction<SlugControllerState>>;
  generate: () => void;
}

export function SlugAction({ setText, setController, generate }: Props) {
  const locale = useLocale();
  const t = i18nSlugAction[locale];

  return (
    <div className="space-y-4">
      {/* Main CTA */}
      <div className="flex">
        <Button
          className="
            w-full py-5 text-base font-semibold
            transition-all duration-200
            hover:scale-[1.02]
            active:scale-[0.97]
          "
          onClick={generate}
        >
          <Wand2 size={18} className="mr-2" />
          {t.main.generate}
        </Button>
      </div>

      {/* Additional Controls */}
      <div className="grid grid-cols-2 gap-4">
        {/* Clear */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="h-11 flex items-center justify-center gap-2
                         hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => setText("")}
            >
              <Trash2 size={16} />
              {t.clear.label}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t.clear.tooltip}</TooltipContent>
        </Tooltip>

        {/* Reset */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="h-11 flex items-center justify-center gap-2
                         hover:bg-blue-50 dark:hover:bg-blue-900/20"
              onClick={() => setController(defaultSlugControllerState)}
            >
              <RefreshCw size={16} />
              {t.reset.label}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t.reset.tooltip}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
