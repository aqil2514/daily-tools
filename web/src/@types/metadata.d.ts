import { ToolName } from "./Tools";

export interface LocalizedText {
  en: string;
  id: string;
}

export interface LocalizedKeywords {
  en: string[];
  id: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocalizedFAQ {
  en: FAQItem[];
  id: FAQItem[];
}

export type SchemaType =
  | "FAQPage"
  | "SoftwareApplication"
  | "Tool"
  | "Calculator";


export interface LocalizedText {
  en: string;
  id: string;
}

export interface LocalizedKeywords {
  en: string[];
  id: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocalizedFAQ {
  en: FAQItem[];
  id: FAQItem[];
}

export type JsonSchemaType =
  | "FAQPage"
  | "WebApplication"
  | "SoftwareApplication"
  | "WebPage";

export interface MetadataSEO {
  /** <title> tag */
  title: LocalizedText;

  /** <meta name="description"> */
  description: LocalizedText;

  /** <meta name="keywords"> */
  keywords?: LocalizedKeywords;

  /** Canonical URL */
  canonicalSlug?: ToolName;

  /** Slug needed for building canonical URL */
  slug: ToolName;
}

export interface JsonLdSEO {
  /** schema.org type: Tool, SoftwareApplication, FAQPage, Calculator */
  schemaType?: JsonSchemaType;

  /** FAQ for FAQPage JSON-LD */
  faq?: LocalizedFAQ;

  /** Used for dateModified in JSON-LD */
  lastUpdated?: string;

  /** For AI Search (SGE, Bing AI) */
  searchSnippet?: LocalizedText;

  /** Slug required to build URL in JSON-LD */
  slug: string;
}
