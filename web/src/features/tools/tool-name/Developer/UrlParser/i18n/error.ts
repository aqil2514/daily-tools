import { UrlParseErrorCode } from "../types/output";

export const urlParserErrorI18n: Record<
  "en" | "id",
  Record<UrlParseErrorCode, string>
> = {
  en: {
    EMPTY: "Please enter a URL to parse.",
    INVALID_URL: "The URL format is invalid.",
  },
  id: {
    EMPTY: "Silakan masukkan URL untuk diparsing.",
    INVALID_URL: "Format URL tidak valid.",
  },
};
