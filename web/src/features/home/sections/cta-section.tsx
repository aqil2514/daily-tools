"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { fontPoppins } from "@/constants/fonts";

export function CTASection() {
  const t = useTranslations("HomePage.cta");

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Title */}
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          {t("title")}
        </h2>

        {/* Description */}
        <p
          className={cn(
            fontPoppins.className,
            "mt-4 text-zinc-600 dark:text-zinc-400"
          )}
        >
          {t("description")}
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/tools"
            className="inline-flex items-center rounded-lg bg-blue-600 px-7 py-3.5 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
