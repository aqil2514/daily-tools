"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useTranslations } from "next-intl";

export function SecurityTips() {
  const t = useTranslations("tools-developer.password-generator");

  return (
    <Alert className="mt-4 border-blue-300 bg-blue-50 dark:bg-blue-950/40">
      <AlertTitle className="font-semibold">
        {t("securityTipTitle")}
      </AlertTitle>

      <AlertDescription className="space-y-3">
        <p>{t("securityTipDescription")}</p>

        <div>
          <p className="font-medium mb-1">{t("recommendedManagersTitle")}:</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>{t("recommendedManagers.bitwarden")}</li>
            <li>{t("recommendedManagers.onepassword")}</li>
            <li>{t("recommendedManagers.google")}</li>
          </ul>
        </div>
      </AlertDescription>
    </Alert>
  );
}
