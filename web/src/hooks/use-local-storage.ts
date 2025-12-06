"use client";

import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const getValue = useCallback((): T => {
    if (typeof window === "undefined") return typeof initialValue === "function"
      ? (initialValue as () => T)()
      : initialValue;

    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item) as T;
      }
    } catch (err) {
      console.warn(`useLocalStorage error reading ${key}:`, err);
    }

    return typeof initialValue === "function"
      ? (initialValue as () => T)()
      : initialValue;
  }, [key, initialValue]);

  const [value, setValue] = useState<T>(getValue);

  // Save to localStorage whenever value changes
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (err) {
      console.warn(`useLocalStorage error setting ${key}:`, err);
    }
  }, [key, value]);

  // Sync between tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [key]);

  return [value, setValue] as const;
}
