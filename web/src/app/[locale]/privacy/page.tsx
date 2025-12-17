import { getLocale, getTranslations } from "next-intl/server";
import { fontPoppins } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { canonicalUrl } from "@/constants/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isId = locale === "id";

  return {
    title: isId
      ? "Kebijakan Privasi | Flowtooly"
      : "Privacy Policy | Flowtooly",

    description: isId
      ? "Kebijakan privasi Flowtooly yang menjelaskan bagaimana kami menangani data pengguna dan menjaga privasi Anda."
      : "Flowtooly privacy policy explaining how we handle user data and protect your privacy.",

    alternates: {
      canonical: canonicalUrl(locale, "/privacy"),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

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
