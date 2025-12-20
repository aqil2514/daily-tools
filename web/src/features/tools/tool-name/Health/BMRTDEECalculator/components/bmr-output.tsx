"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

import { useBMRTDEE } from "../store/provider";
import { useCountUp } from "@/hooks/animation/use-count-up";
import { bmrOutputText } from "../i18n/bmr-output";

export function BMROutput() {
  const locale = useLocale() as "en" | "id";
  const t = bmrOutputText[locale];

  const { state, loading } = useBMRTDEE();
  const output = state.output;

  const bmr = useCountUp(output?.bmr);
  const tdee = useCountUp(output?.tdee);

  const cutting = useCountUp(output?.goals.cutting);
  const maintenance = useCountUp(output?.goals.maintenance);
  const bulking = useCountUp(output?.goals.bulking);

  return (
    <div className="space-y-4">
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="rounded-md border p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {t.bmrLabel}
          </span>

          {loading ? (
            <Skeleton className="h-4 w-24" />
          ) : (
            <span className="font-semibold">
              {output
                ? `${bmr} ${t.unitPerDay}`
                : `— ${t.unitPerDay}`}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {t.tdeeLabel}
          </span>

          {loading ? (
            <Skeleton className="h-6 w-32" />
          ) : (
            <span className="text-lg font-bold">
              {output
                ? `${tdee} ${t.unitPerDay}`
                : `— ${t.unitPerDay}`}
            </span>
          )}
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-3">
        {loading ? (
          <>
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
          </>
        ) : (
          <>
            <Badge variant="outline" className="justify-center py-2">
              {t.cutting}:{" "}
              {output ? `${cutting} ${t.unit}` : `— ${t.unit}`}
            </Badge>

            <Badge variant="secondary" className="justify-center py-2">
              {t.maintenance}:{" "}
              {output ? `${maintenance} ${t.unit}` : `— ${t.unit}`}
            </Badge>

            <Badge variant="outline" className="justify-center py-2">
              {t.bulking}:{" "}
              {output ? `${bulking} ${t.unit}` : `— ${t.unit}`}
            </Badge>
          </>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        {t.disclaimer}
      </p>
    </div>
  );
}
