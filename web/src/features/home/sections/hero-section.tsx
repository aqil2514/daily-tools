"use client";

import { useTranslations } from "next-intl";
import GradientText from "@/components/atoms/text/GradientText";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { fontPoppins, fontPlayfairDisplay } from "@/constants/fonts";
import { toolsRegistry } from "@/features/tools/registry";
import { TOOL_CATEGORIES } from "@/@types/tools/index";

export function HeroSection() {
  const t = useTranslations("HomePage.hero");
  const totalTools = Object.keys(toolsRegistry).length;

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center px-6 py-28 dark:from-black dark:to-black">
      <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
        {/* Headline */}
        <h1
          className={cn(
            fontPlayfairDisplay.className,
            "text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"
          )}
        >
          <span className="block">{t("title")}</span>

          <GradientText className="mt-4 cursor-default">Flowtooly</GradientText>
        </h1>

        {/* Description */}
        <p
          className={cn(
            fontPoppins.className,
            "mt-8 max-w-xl text-lg font-medium leading-relaxed text-zinc-600 dark:text-zinc-400"
          )}
        >
          {t("description", { count: totalTools })}
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/tools"
            className="inline-flex items-center rounded-lg bg-blue-600 px-7 py-3.5 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            {t("ctaPrimary")}
          </Link>
        </div>

        {/* Hero Stats */}
        <div
          className={cn(
            fontPoppins.className,
            "mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-zinc-500 dark:text-zinc-400"
          )}
        >
          <span>{t("tools", { count: totalTools })}</span>
          <span aria-hidden="true">•</span>
          <span>{t("categories", { count: TOOL_CATEGORIES.length })}</span>
          <span aria-hidden="true">•</span>
          <span>{t("noLogin")}</span>
          <span aria-hidden="true">•</span>
          <span>{t("free")}</span>
        </div>

        {/* Helper text */}
        <p
          className={cn(
            fontPoppins.className,
            "mt-4 text-xs text-zinc-400 dark:text-zinc-500"
          )}
        >
          {t("use-directly")}
        </p>
      </div>
    </section>
  );
}
