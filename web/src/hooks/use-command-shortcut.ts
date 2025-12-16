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
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modKey = isMac ? e.metaKey : e.ctrlKey;

      if (!modKey || e.key.toLowerCase() !== "k") return;

      const target = e.target as HTMLElement;
      const tag = target.tagName.toLowerCase();

      if (
        tag === "input" ||
        tag === "textarea" ||
        target.isContentEditable
      ) {
        return;
      }

      if (preventDefault) {
        e.preventDefault();
      }

      onTrigger();
    }

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onTrigger, enabled, preventDefault]);
}
