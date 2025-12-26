"use client";

import { useRef } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

import { useImportJson } from "@/features/tools/tool-name/Utility/QuizMaker/hooks/use-import-json";
import { mapQuizToClientData } from "@/features/tools/tool-name/Utility/QuizMaker/utils/mapToClientData";
import { useQuizPlayer } from "../../store/provider";
import { quizPlayerEmptyI18n } from "../../i18n/quiz-player-empty";

export function NoQuizData() {
  const locale = useLocale() as "en" | "id";
  const t = quizPlayerEmptyI18n[locale];

  const inputRef = useRef<HTMLInputElement>(null);
  const { setData } = useQuizPlayer();

  const { importJson } = useImportJson({
    locale,
    onSuccess: (schemaData) => {
      const mapped = mapQuizToClientData(schemaData);
      setData(mapped);
    },
  });

  return (
    <div className="space-y-5">
      <input
        ref={inputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) importJson(file);
        }}
      />

      {/* ================= HEADER ================= */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">{t.title}</h2>
        <p className="text-sm text-muted-foreground">{t.subtitle}</p>
      </div>

      {/* ================= ALERT ================= */}
      <Alert>
        <AlertTitle>{t.alertTitle}</AlertTitle>
        <AlertDescription>{t.alertDescription}</AlertDescription>
      </Alert>

      {/* ================= GUIDE ================= */}
      <div className="rounded-md border bg-muted/40 p-4 text-sm space-y-2">
        <p className="font-medium">{t.guideTitle}</p>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
          {t.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          className="w-full sm:w-auto"
          onClick={() => inputRef.current?.click()}
        >
          {t.uploadButton}
        </Button>

        <Link href={"/tools/quiz-maker"}>
          <Button variant="outline" className="w-full sm:w-auto">
            {t.createButton}
          </Button>
        </Link>
      </div>

      <Separator />

      {/* ================= FOOTER ================= */}
      <p className="text-xs text-muted-foreground">{t.footer}</p>
    </div>
  );
}
