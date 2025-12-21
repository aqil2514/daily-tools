import { ToolName } from "@/@types/tools/index";
import { sendGAEvent } from "@next/third-parties/google";
import { ANALYTICS_EVENTS } from "./events";
import { toolsRegistry } from "@/features/tools/registry";
import { Locale } from "next-intl";

type ExportFormat = "pdf" | "excel" | "json" | "csv";
type DownloadFormat = "jpg" | "png" | "svg" | "webp";

export function trackToolView(toolName: ToolName, locale: Locale) {
  const tool = toolsRegistry[toolName];
  sendGAEvent(ANALYTICS_EVENTS.TOOL_VIEW, {
    tool_slug: toolName,
    category: tool.category,
    locale,
  });
}

export function trackToolCopy(toolName: ToolName) {
  const tool = toolsRegistry[toolName];
  sendGAEvent(ANALYTICS_EVENTS.TOOL_COPY, {
    tool_slug: toolName,
    category: tool.category,
  });
}

export function trackToolExport(toolName: ToolName, format: ExportFormat) {
  const tool = toolsRegistry[toolName];
  sendGAEvent(ANALYTICS_EVENTS.TOOL_EXPORT, {
    tool_slug: toolName,
    category: tool.category,
    format,
  });
}

export function trackToolDownload(toolName: ToolName, format: DownloadFormat) {
  sendGAEvent(ANALYTICS_EVENTS.TOOL_DOWNLOAD, {
    tool_slug: toolName,
    format,
  });
}
