"use client";

import { useEffect } from "react";

interface UseQuizKeyboardOptions {
  enabled: boolean;
  isFirst: boolean;
  isLast: boolean;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
  onSelectOption?: (optionIndex: number) => void;
}

export function useQuizKeyboard({
  enabled,
  isFirst,
  isLast,
  onPrev,
  onNext,
  onFinish,
  onSelectOption,
}: UseQuizKeyboardOptions) {
  useEffect(() => {
    if (!enabled) return;

    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
          if (!isFirst) onPrev();
          break;

        case "ArrowRight":
        case "Enter":
          if (!isLast) onNext();
          else onFinish();
          break;

        case "1":
        case "2":
        case "3":
        case "4":
          if (onSelectOption) {
            onSelectOption(Number(e.key) - 1);
          }
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [
    enabled,
    isFirst,
    isLast,
    onPrev,
    onNext,
    onFinish,
    onSelectOption,
  ]);
}
