"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Keyboard } from "lucide-react";
import { useLocale } from "next-intl";
import { quizShortcutHelpI18n } from "../i18n/quiz-shortcut-help";

export function QuizShortcutHelp() {
  const locale = useLocale() as "en" | "id";
  const t = quizShortcutHelpI18n[locale];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed bottom-4 right-4 rounded-full border bg-background shadow-sm"
          aria-label={t.ariaLabel}
        >
          <Keyboard className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        side="top"
        className="w-64"
      >
        <div className="space-y-2">
          <p className="text-sm font-medium">
            {t.title}
          </p>

          <Separator />

          <ul className="space-y-1 text-sm">
            <li className="flex justify-between">
              <span>{t.prev}</span>
              <kbd className="kbd">←</kbd>
            </li>

            <li className="flex justify-between">
              <span>{t.next}</span>
              <kbd className="kbd">→</kbd>
            </li>

            <li className="flex justify-between">
              <span>{t.nextOrFinish}</span>
              <kbd className="kbd">Enter</kbd>
            </li>

            <li className="flex justify-between">
              <span>{t.selectOption}</span>
              <span>
                <kbd className="kbd">1</kbd>{" "}
                <kbd className="kbd">2</kbd>{" "}
                <kbd className="kbd">3</kbd>{" "}
                <kbd className="kbd">4</kbd>
              </span>
            </li>
          </ul>

          <Separator />

          <p className="text-xs text-muted-foreground">
            {t.footer}
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
