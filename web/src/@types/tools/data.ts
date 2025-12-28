export const DATA_TOOLS = [
  "json-to-csv",
  "csv-to-json",
  "sql-insert-to-json",
  "json-to-sql-insert",
  "csv-to-sql-insert"
] as const;

export type DataToolName = (typeof DATA_TOOLS)[number];
