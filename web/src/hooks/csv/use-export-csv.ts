"use client";

import { useCallback } from "react";

type Primitive = string | number | boolean | null | undefined | Date;

type CsvColumn<T, K extends keyof T = keyof T> = {
  key: K;
  label: string;
  format?: (value: T[K], row: T) => Primitive;
};

interface ExportCsvOptions<T> {
  filename?: string;
  data: readonly T[];
  columns?: readonly CsvColumn<T>[];
  delimiter?: "," | ";" | "\t";
  includeBom?: boolean;
}

export function useExportCsv() {
  const exportCsv = useCallback(
    <T extends Record<string, Primitive>>({
      filename = "data.csv",
      data,
      columns,
      delimiter = ",",
      includeBom = true,
    }: ExportCsvOptions<T>) => {
      if (data.length === 0) return;

      const resolvedColumns: readonly CsvColumn<T>[] =
        columns ??
        (Object.keys(data[0]) as readonly (keyof T)[]).map((key) => ({
          key,
          label: String(key),
        }));

      const escape = (value: Primitive): string => {
        if (value === null || value === undefined) return "";
        if (value instanceof Date) return `"${value.toISOString()}"`;

        const text = String(value).replace(/"/g, '""');
        return `"${text}"`;
      };

      const header = resolvedColumns
        .map((c) => escape(c.label))
        .join(delimiter);

      const rows = data.map((row) =>
        resolvedColumns
          .map((col) => {
            const raw = row[col.key];
            const value = col.format ? col.format(raw, row) : raw;
            return escape(value);
          })
          .join(delimiter)
      );

      const bom = includeBom ? "\ufeff" : "";
      const csv = bom + [header, ...rows].join("\n");

      const blob = new Blob([csv], {
        type: "text/csv;charset=utf-8",
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = filename;
      link.click();

      URL.revokeObjectURL(url);
    },
    []
  );

  return { exportCsv };
}
