"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { fontPoppins } from "@/constants/fonts";
import { CATEGORY_REGISTRY } from "@/registry/categories.registry";
import { sidebarSections } from "@/registry/sidebar.registry";
import { TOOL_CATEGORIES } from "@/@types/tools/index";

export function CategoriesSection() {
  const t = useTranslations("HomePage.categories");
  const locale = useLocale();

  return (
    <section className="relative px-6 py-24">
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOOL_CATEGORIES.map((key) => {
            const title = CATEGORY_REGISTRY[key].title[locale];
            const section = sidebarSections.find(
              (item) => item.sectionCategory === key
            );
            if (!section) return null;

            const totalTools = section.sectionItem.length ?? 0;
            const toolsName = section.sectionItem
              .map((tool) => tool.title[locale])
              .slice(0, 3)
              .join(", ");
            const CatIcon = CATEGORY_REGISTRY[key].Icon;

            return (
              <Link
                key={key}
                href={`/search?category=${key}`}
                className={cn(
                  "group relative rounded-xl border border-zinc-200 dark:border-zinc-800",
                  "bg-white dark:bg-zinc-950 p-6 transition-all",
                  "hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-sm"
                )}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                      "bg-zinc-100 dark:bg-zinc-900",
                      "text-zinc-700 dark:text-zinc-300",
                      "transition-colors group-hover:text-blue-600"
                    )}
                  >
                    <CatIcon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {totalTools} tools
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                      {toolsName}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
