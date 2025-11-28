"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

/**
 * Hook untuk membaca dan memanipulasi query URL
 */
export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * Membuat instance URLSearchParams baru
   */
  const getParams = useCallback(() => {
    return new URLSearchParams(searchParams.toString());
  }, [searchParams]);

  /**
   * Membaca value query
   */
  const get = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  /**
   * Menambah atau mengubah query
   */
  const set = useCallback(
    (key: string, value: string) => {
      const params = getParams();
      params.set(key, value);

      router.replace(`${pathname}?${params.toString()}`);
    },
    [router, pathname, getParams]
  );

  /**
   * Menghapus salah satu query
   */
  const remove = useCallback(
    (key: string) => {
      const params = getParams();
      params.delete(key);

      const query = params.toString();
      const url = query ? `${pathname}?${query}` : pathname;

      router.replace(url);
    },
    [router, pathname, getParams]
  );

  /**
   * Menghapus semua query
   */
  const clear = useCallback(() => {
    router.replace(pathname);
  }, [router, pathname]);

  /**
   * Replace semua query
   */
  const replaceAll = useCallback(
    (obj: Record<string, string>) => {
      const params = new URLSearchParams();

      Object.entries(obj).forEach(([k, v]) => {
        if (v !== undefined && v !== null) {
          params.set(k, v);
        }
      });

      const query = params.toString();
      const url = query ? `${pathname}?${query}` : pathname;

      router.replace(url);
    },
    [router, pathname]
  );

  return {
    get,
    set,
    remove,
    clear,
    replaceAll,
    all: searchParams, // read-only
  };
}
