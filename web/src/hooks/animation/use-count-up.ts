"use client";

import { useEffect, useRef, useState } from "react";

interface Options {
  duration?: number; // ms
}

export function useCountUp(
  value: number | null | undefined,
  options: Options = {}
) {
  const { duration = 400 } = options;

  const [displayValue, setDisplayValue] = useState<number>(value ?? 0);
  const previousValue = useRef<number>(value ?? 0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (value == null) return;

    const start = previousValue.current;
    const end = value;

    if (start === end) return;

    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = Math.round(
        start + (end - start) * progress
      );

      setDisplayValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        previousValue.current = end;
      }
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [value, duration]);

  return displayValue;
}
