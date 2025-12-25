"use client";

import { useCallback } from "react";
import { toast } from "sonner";
import { Locale } from "next-intl";
import { ZodError } from "zod";
import {
  createMainQuestSchema,
  MainQuestSchema,
} from "@/features/tools/tool-name/Utility/QuizMaker/schema/main";

interface UseImportJsonOptions {
  locale: Locale;
  onSuccess: (data: MainQuestSchema) => void;
}

export function useImportJson({ locale, onSuccess }: UseImportJsonOptions) {
  const importJson = useCallback(
    async (file: File) => {
      if (!file) return;

      if (!file.name.endsWith(".json")) {
        toast.error(
          locale === "en"
            ? "Please select a valid JSON file"
            : "Silakan pilih file JSON yang valid"
        );
        return;
      }

      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        console.log("PARSED");
        console.log(parsed)
        
        const schema = createMainQuestSchema(locale);
        const result = schema.parse(parsed);

        // Optional version check
        if (result.version !== "1") {
          toast.error(
            locale === "en"
              ? "Unsupported quiz version"
              : "Versi kuis tidak didukung"
          );
          return;
        }

        onSuccess(result);

        toast.success(
          locale === "en"
            ? "Quiz imported successfully"
            : "Kuis berhasil diimpor"
        );
      } catch (err) {
        if (err instanceof ZodError) {
            console.log(err.message)
          toast.error(
            locale === "en" ? "Invalid quiz format" : "Format kuis tidak valid"
          );
          return;
        }

        toast.error(
          locale === "en"
            ? "Failed to import JSON file"
            : "Gagal mengimpor file JSON"
        );
      }
    },
    [locale, onSuccess]
  );

  return { importJson };
}
