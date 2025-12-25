"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useLocale } from "next-intl";
import { MainQuestSchema } from "../schema/main";
import { useImportJson } from "../hooks/use-import-json";

interface Props {
  onImported: (data: MainQuestSchema) => void;
}

export function QuizImportJsonButton({ onImported }: Props) {
  const locale = useLocale();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { importJson } = useImportJson({
    locale,
    onSuccess: onImported,
  });

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            importJson(file);
            e.currentTarget.value = "";
          }
        }}
      />

      <Button
        type="button"
        variant="outline"
        onClick={() => inputRef.current?.click()}
      >
        <Upload className="mr-2 h-4 w-4" />
        {locale === "en" ? "Import JSON" : "Import JSON"}
      </Button>
    </>
  );
}
