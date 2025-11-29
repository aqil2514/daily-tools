import { useEffect, useState, useRef } from "react";

export function useScrollDirection() {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  const previousScroll = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(current);

          // Tentukan direction: up / down
          if (current > previousScroll.current) {
            setDirection("down");
          } else if (current < previousScroll.current) {
            setDirection("up");
          }

          previousScroll.current = current;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY, direction };
}
