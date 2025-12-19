import { useEffect } from "react";

interface Options {
  enabled?: boolean;
  preventDefault?: boolean;
}

export function useCommandShortcut(
  onTrigger: () => void,
  options: Options = {}
) {
  const { enabled = true, preventDefault = true } = options;

  useEffect(() => {
    if (!enabled) return;

    function handler(e: KeyboardEvent) {
      if (e.repeat) return;

      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modKey = isMac ? e.metaKey : e.ctrlKey;

      if (!modKey || e.key.toLowerCase() !== "k") return;

      const target = e.target as HTMLElement;
      const tag = target.tagName.toLowerCase();

      if (tag === "input" || tag === "textarea" || target.isContentEditable) {
        return;
      }

      if (preventDefault) e.preventDefault();

      onTrigger();
    }

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [enabled, preventDefault, onTrigger]);
}
