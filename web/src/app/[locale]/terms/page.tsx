import { getTranslations } from "next-intl/server";
import { fontPoppins } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Flowtooly",
  description:
    "Read the Terms of Service for Flowtooly. Learn about usage rules, limitations, and responsibilities when using our tools.",
};

export default async function TermsPage() {
  const t = await getTranslations("Terms");

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {t("title")}
      </h1>

      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {t("updated")}
      </p>

      <div
        className={cn(
          fontPoppins.className,
          "prose prose-zinc dark:prose-invert mt-10 max-w-none"
        )}
      >
        <p>{t("intro")}</p>

        <h2>{t("sections.use.title")}</h2>
        <p>{t("sections.use.content")}</p>

        <h2>{t("sections.noAdvice.title")}</h2>
        <p>{t("sections.noAdvice.content")}</p>

        <h2>{t("sections.privacy.title")}</h2>
        <p>{t("sections.privacy.content")}</p>

        <h2>{t("sections.accuracy.title")}</h2>
        <p>{t("sections.accuracy.content")}</p>

        <h2>{t("sections.liability.title")}</h2>
        <p>{t("sections.liability.content")}</p>

        <h2>{t("sections.availability.title")}</h2>
        <p>{t("sections.availability.content")}</p>

        <h2>{t("sections.ip.title")}</h2>
        <p>{t("sections.ip.content")}</p>

        <h2>{t("sections.thirdParty.title")}</h2>
        <p>{t("sections.thirdParty.content")}</p>

        <h2>{t("sections.changes.title")}</h2>
        <p>{t("sections.changes.content")}</p>

        <h2>{t("sections.contact.title")}</h2>
        <p>{t("sections.contact.content")}</p>
      </div>
    </main>
  );
}
