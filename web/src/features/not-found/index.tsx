"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import animation404 from "@/../public/lottie-animation/not-found-lottie.json";
import Lottie from "lottie-react";

export function NotFoundTemplate() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      {/* Lottie Animation */}
      <div className="w-56 h-56 mb-6">
        <Lottie
          autoPlay
          loop
          animationData={animation404}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <h1 className="text-3xl font-bold mb-2">{t("title")}</h1>
      <p className="text-muted-foreground max-w-md mb-6">{t("description")}</p>

      <div className="flex gap-3">
        <Button asChild>
          <Link href="/">{t("backHome")}</Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/tools">{t("viewTools")}</Link>
        </Button>
      </div>
    </div>
  );
}
