"use client";

import { useFieldArray, UseFormReturn } from "react-hook-form";
import { questionOptionSchemaDefault } from "../../../schema/question";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import { MainQuestSchema } from "../../../schema/main";
import { nanoid } from "nanoid";
import { useLocale } from "next-intl";
import { quizQuestionOptionsI18n } from "../../../i18n/question-options";

interface Props {
  form: UseFormReturn<MainQuestSchema>;
  index: number;
}

export function QuestionOptionArray({ form, index }: Props) {
  const locale = useLocale() as "en" | "id";
  const t = quizQuestionOptionsI18n[locale];

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `questions.${index}.options`,
  });

  const isMaxLength = fields.length >= 4;

  return (
    <div className="space-y-4">
      {!isMaxLength && (
        <Button
          variant="outline"
          type="button"
          onClick={() =>
            append({ ...questionOptionSchemaDefault, optionId: nanoid() })
          }
        >
          <Plus /> {t.addOption}
        </Button>
      )}

      <div className="grid lg:grid-cols-2 gap-4">
        {fields.map((item, i) => {
          const correctAnswerFieldName =
            `questions.${index}.correctOptionId` as const;

          const correctOption = form.watch(correctAnswerFieldName);
          const isCorrectAnswer = item.optionId === correctOption;

          return (
            <div
              key={item.id}
              className="space-y-2 border rounded-2xl border-muted p-4"
            >
              <FormField
                control={form.control}
                name={`questions.${index}.options.${i}.text`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t.optionLabelPrefix} #{i + 1}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={`${t.optionPlaceholderPrefix} ${i + 1}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => remove(i)}
                  type="button"
                >
                  <Trash />
                </Button>

                <Button
                  type="button"
                  variant={isCorrectAnswer ? "default" : "outline"}
                  onClick={() =>
                    form.setValue(correctAnswerFieldName, item.optionId)
                  }
                >
                  {t.correctAnswer}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
