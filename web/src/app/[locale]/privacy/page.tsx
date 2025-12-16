import { getTranslations } from "next-intl/server";
import { fontPoppins } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Flowtooly",
  description:
    "Learn how Flowtooly handles privacy and data. All tools run in your browser and user data is not stored.",
};

export default async function PrivacyPage() {
  const t = await getTranslations("Privacy");

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Title */}
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {t("title")}
      </h1>

      {/* Updated */}
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {t("updated")}
      </p>

      {/* Content */}
      <div
        className={cn(
          fontPoppins.className,
          "prose prose-zinc dark:prose-invert mt-10 max-w-none"
        )}
      >
        <p>{t("intro")}</p>

        <h2>{t("sections.noCollect.title")}</h2>
        <p>{t("sections.noCollect.content")}</p>

        <h2>{t("sections.autoCollect.title")}</h2>
        <p>{t("sections.autoCollect.content")}</p>

        <h2>{t("sections.cookies.title")}</h2>
        <p>{t("sections.cookies.content")}</p>

        <h2>{t("sections.processing.title")}</h2>
        <p>{t("sections.processing.content")}</p>

        <h2>{t("sections.thirdParty.title")}</h2>
        <p>{t("sections.thirdParty.content")}</p>

        <h2>{t("sections.children.title")}</h2>
        <p>{t("sections.children.content")}</p>

        <h2>{t("sections.changes.title")}</h2>
        <p>{t("sections.changes.content")}</p>

        <h2>{t("sections.contact.title")}</h2>
        <p>{t("sections.contact.content")}</p>
      </div>
    </main>
  );
}
