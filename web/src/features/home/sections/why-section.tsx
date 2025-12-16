"use client";

import { useTranslations } from "next-intl";
import {
  Zap,
  ShieldCheck,
  Lock,
  Layers,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fontPoppins } from "@/constants/fonts";

const FEATURES = [
  { key: "fast", icon: Zap },
  { key: "privacy", icon: ShieldCheck },
  { key: "noLogin", icon: Lock },
  { key: "allInOne", icon: Layers },
  { key: "multilingual", icon: Globe },
] as const;

export function WhyFlowtoolySection() {
  const t = useTranslations("HomePage.why");

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

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className={cn(
                "flex flex-col items-center text-center rounded-xl",
                "border border-zinc-200 dark:border-zinc-800",
                "bg-white dark:bg-zinc-950 p-6"
              )}
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                <Icon className="h-5 w-5" />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {t(`${key}.title`)}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
