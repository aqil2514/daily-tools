"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { fontPoppins } from "@/constants/fonts";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-slate-700/60 bg-slate-800/90 backdrop-blur supports-backdrop-filter:bg-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-amber-100">Flowtooly</h3>

            <p
              className={cn(
                fontPoppins.className,
                "mt-4 text-sm leading-relaxed text-slate-300"
              )}
            >
              {t("description")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-amber-100">
              {t("product.title")}
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/tools"
                  className="text-slate-300 transition hover:text-amber-200"
                >
                  {t("product.allTools")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-amber-100">
              {t("resources.title")}
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  target="_blank"
                  href="/sitemap.xml"
                  className="text-slate-300 transition hover:text-amber-200"
                >
                  {t("resources.sitemap")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-amber-100">
              {t("legal.title")}
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-300 transition hover:text-amber-200"
                >
                  {t("legal.privacy")}
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-slate-300 transition hover:text-amber-200"
                >
                  {t("legal.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700/60 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Flowtooly. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
