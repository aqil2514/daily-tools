// src/@types/i18n.d.ts

import { routing } from '@/i18n/routing';
import { formats } from '@/i18n/request';
import messages from '@/../messages/en.json';
 
// 1. Definisikan tipe dasar Messages
export type Messages = typeof messages;

/**
 * Utility Type: Mengambil semua kunci (keys) yang bersarang dan menggabungkannya dengan titik.
 * Contoh: { a: { b: 'c' } } -> 'a' | 'a.b'
 */
type Join<K, P> = K extends string | number ? P extends string | number ?
  `${K}.${P}`
  : K
  : P;

export type NestedMessageKeys<T> = T extends object ? {
  [K in keyof T]: K extends string ? 
    | Join<K, NestedMessageKeys<T[K]>>
    : never
}[keyof T] : '';

// 2. Definisikan ToolMessageKey menggunakan utility type rekursif
export type ToolMessageKey = NestedMessageKeys<Messages>;


declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages; // Menggunakan tipe Messages objek penuh
    Formats: typeof formats;
  }
}