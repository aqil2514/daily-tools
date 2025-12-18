"use client";

import { useLocale } from "next-intl";
import {
  ArrowDown,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { BMIResult } from "../types/bmi-types";
import { bmiOutputText } from "../i18n/bmi-output";

interface BMIOutputProps {
  result: BMIResult | null;
}

function formatBMI(value: number) {
  if (Number.isNaN(value)) return "–";
  return value.toFixed(2);
}

function getCategoryConfig(
  category: BMIResult["category"],
  label: string
) {
  switch (category) {
    case "underweight":
      return {
        label,
        icon: ArrowDown,
        className:
          "bg-blue-50 text-blue-700 border-blue-200",
        badge: "bg-blue-100 text-blue-700",
      };

    case "normal":
      return {
        label,
        icon: CheckCircle,
        className:
          "bg-green-50 text-green-700 border-green-200",
        badge: "bg-green-100 text-green-700",
      };

    case "overweight":
      return {
        label,
        icon: AlertTriangle,
        className:
          "bg-yellow-50 text-yellow-800 border-yellow-200",
        badge: "bg-yellow-100 text-yellow-800",
      };

    case "obese":
      return {
        label,
        icon: XCircle,
        className:
          "bg-red-50 text-red-700 border-red-200",
        badge: "bg-red-100 text-red-700",
      };

    default:
      return null;
  }
}

export function BMIOutput({ result }: BMIOutputProps) {
  const locale = useLocale() as "en" | "id";
  const t = bmiOutputText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      {!result ? (
        <div className="mt-6 text-sm text-muted-foreground text-center">
          {t.emptyState}
        </div>
      ) : (
        (() => {
          const label =
            t.categories[result.category];

          const config = getCategoryConfig(
            result.category,
            label
          );
          if (!config) return null;

          const Icon = config.icon;

          return (
            <div
              className={cn(
                "mt-4 rounded-lg border p-4 text-center",
                config.className
              )}
            >
              {/* Icon */}
              <div className="flex justify-center mb-2">
                <Icon className="h-8 w-8" />
              </div>

              {/* BMI Value */}
              <div className="text-3xl font-semibold">
                {formatBMI(result.bmi)}
              </div>

              <Separator className="my-3" />

              {/* Category Badge */}
              <div className="flex justify-center">
                <Badge
                  variant="secondary"
                  className={cn(
                    "text-sm",
                    config.badge
                  )}
                >
                  {config.label}
                </Badge>
              </div>
            </div>
          );
        })()
      )}
    </ToolCard>
  );
}
