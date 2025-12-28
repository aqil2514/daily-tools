export interface CsvToJsonOptions {
  delimiter?: string; // manual override
  hasHeader?: boolean;
  trimValues?: boolean;
}

type CsvToJsonResult =
  | {
      success: true;
      data: Record<string, string>[];
    }
  | {
      success: false;
      error: string;
    };

export function csvToJson(
  csvText: string,
  options: CsvToJsonOptions = {}
): CsvToJsonResult {
  if (!csvText.trim()) {
    return {
      success: false,
      error: "CSV input is empty",
    };
  }

  const {
    delimiter,
    hasHeader = true,
    trimValues = true,
  } = options;

  const resolvedDelimiter =
    delimiter && delimiter.length > 0
      ? delimiter
      : detectDelimiter(csvText);

  const lines = csvText
    .split(/\r?\n/)
    .filter((line) => line.trim() !== "");

  if (lines.length === 0) {
    return {
      success: false,
      error: "CSV contains no data",
    };
  }

  const rows = lines.map((line) =>
    line.split(resolvedDelimiter).map((cell) =>
      trimValues ? cell.trim() : cell
    )
  );

  if (hasHeader) {
    const headers = rows[0];

    if (headers.some((h) => h === "")) {
      return {
        success: false,
        error: "CSV header contains empty column names",
      };
    }

    const data = rows.slice(1).map((row) => {
      const obj: Record<string, string> = {};

      headers.forEach((header, colIndex) => {
        obj[header] = row[colIndex] ?? "";
      });

      return obj;
    });

    return { success: true, data };
  }

  return {
    success: true,
    data: rows as unknown as Record<string, string>[],
  };
}

function detectDelimiter(csvText: string): string {
  const delimiters = [",", ";", "\t", "|"];
  const firstLine = csvText.split(/\r?\n/)[0] ?? "";

  let bestDelimiter = ",";
  let maxCount = 0;

  for (const d of delimiters) {
    const count = firstLine.split(d).length;
    if (count > maxCount) {
      maxCount = count;
      bestDelimiter = d;
    }
  }

  return bestDelimiter;
}
