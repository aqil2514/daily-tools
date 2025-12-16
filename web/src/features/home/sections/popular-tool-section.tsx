"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { fontPoppins } from "@/constants/fonts";
import { ToolName } from "@/@types/tools/index";
import { toolsRegistry } from "@/features/tools/registry";
import { CATEGORY_REGISTRY } from "@/registry/categories.registry";

/**
 * Curated popular tools
 * (bukan analytics-based, aman & jelas)
 */
const POPULAR_TOOL_SLUGS: ToolName[] = [
  "jwt-decoder",
  "loan-calculator",
  "image-converter",
  "age-calculator",
  "regex-tester",
  "savings-goal-calculator",
];

export function PopularToolsSection() {
  const t = useTranslations("HomePage.popularTools");
  const locale = useLocale();

  const popularTools = POPULAR_TOOL_SLUGS.map(
    (toolName) => toolsRegistry[toolName]
  ).filter(Boolean);

  return (
    <section className="relative px-6 py-24 bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            {t("title")}
          </h2>

          <p
            className={cn(
              fontPoppins.className,
              "mt-4 max-w-xl mx-auto text-zinc-600 dark:text-zinc-400"
            )}
          >
            {t("description")}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className={cn(
                "group relative rounded-xl border border-zinc-200 dark:border-zinc-800",
                "bg-white dark:bg-zinc-950 p-6 transition-all",
                "hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-sm"
              )}
            >
              <div className="flex flex-col">
                {/* Title */}
                <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                  {tool!.title[locale]}
                </h3>

                {/* Category */}
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {CATEGORY_REGISTRY[tool.category].title[locale]}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500 line-clamp-2">
                  {tool!.description?.[locale]}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-14 text-center">
          <Link
            href="/tools"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            {t("viewAll")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
