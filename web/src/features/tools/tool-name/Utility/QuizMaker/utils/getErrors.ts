import { FieldErrors, FieldErrorsImpl, Merge } from "react-hook-form";
import { MainQuestSchema } from "../schema/main";

import { FieldError } from "react-hook-form";
import { Locale } from "next-intl";

function isFieldError(value: unknown): value is FieldError {
  return typeof value === "object" && value !== null && "message" in value;
}

export function getErrors(
  errors: FieldErrors<MainQuestSchema>,
  locale: Locale
): string[] {
  const result: string[] = [];

  /* =========================
     METADATA
  ========================== */
  if (errors.metadata?.title?.message) {
    result.push(`Metadata: ${errors.metadata.title.message}`);
  }

  if (errors.metadata?.description?.message) {
    result.push(`Metadata: ${errors.metadata.description.message}`);
  }

  /* =========================
     QUESTIONS
  ========================== */
  if (Array.isArray(errors.questions)) {
    errors.questions.forEach((qError, i) => {
      if (!qError) return;

      Object.values(qError).forEach((value) => {
        if (isFieldError(value) && value.message) {
          result.push(
            `${locale === "en" ? "Question" : "Soal"} ${i + 1}: ${
              value.message
            }`
          );
        }
      });

      if (Array.isArray(qError.options)) {
        qError.options.forEach(
          (
            optError:
              | Merge<FieldError, FieldErrorsImpl<{ text: string }>>
              | undefined,
            j: number
          ) => {
            if (optError?.text?.message) {
              result.push(
                `${locale === "en" ? "Question" : "Soal"} ${i + 1}, ${ locale === "en" ? "option" : "opsi"} ${
                  j + 1
                }: ${optError.text.message}`
              );
            }
          }
        );
      }
    });
  }

  return result;
}
