/**
 * URL Parser - Output Data Schema
 * Used as the single source of truth for parsed URL data
 */

/* =========================
 * Core URL Components
 * ========================= */

export interface ParsedUrlCore {
  href: string;

  protocol: string;   // https:
  username: string;
  password: string;

  hostname: string;   // sub.example.com
  port: string;       // "8080" | ""

  pathname: string;   // /path/to/page
  search: string;     // ?a=1&b=2
  hash: string;       // #section
}

/* =========================
 * Query Parameters
 * ========================= */

export interface UrlQueryParam {
  key: string;
  value: string;
}

export interface ParsedUrlQuery {
  raw: string;        // utm_source=google&utm_medium=cpc
  params: UrlQueryParam[];
}

/* =========================
 * Quick Insights (MVP)
 * ========================= */

export interface ParsedUrlInsights {
  isHttps: boolean;
  hasCustomPort: boolean;
  hasAuth: boolean;

  trackingParams: string[]; // utm_source, gclid, fbclid
}

/* =========================
 * Final Parsed Output
 * ========================= */

export interface ParsedUrlResult {
  core: ParsedUrlCore;
  query: ParsedUrlQuery;
  insights: ParsedUrlInsights;
}

/* =========================
 * Error State
 * ========================= */

export type UrlParseErrorCode =
  | "EMPTY"
  | "INVALID_URL";

export interface UrlParseError {
  code: UrlParseErrorCode;
}

/* =========================
 * UI Helper Types
 * ========================= */

export interface CopyableField {
  label: string;
  value: string;
}

export interface UrlParserSection<T> {
  title: string;
  data: T;
}
