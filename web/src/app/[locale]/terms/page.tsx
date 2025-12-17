import { getLocale, getTranslations } from "next-intl/server";
import { fontPoppins } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { canonicalUrl, getHreflangs } from "@/constants/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isId = locale === "id";

  return {
    title: isId
      ? "Syarat & Ketentuan | Flowtooly"
      : "Terms of Service | Flowtooly",

    description: isId
      ? "Syarat dan ketentuan penggunaan Flowtooly yang mengatur penggunaan layanan, hak, dan kewajiban pengguna."
      : "Flowtooly terms of service outlining the rules, rights, and responsibilities when using our tools.",

    alternates: {
      canonical: canonicalUrl(locale, "/terms"),
      languages: getHreflangs("/terms"),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

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
