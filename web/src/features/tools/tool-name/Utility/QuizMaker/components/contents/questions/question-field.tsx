"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFieldArray } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { defaultMainQuestSchema } from "../../../schema/main";
import { QuestionOptionArray } from "./question-options";
import { Button } from "@/components/ui/button";
import { Plus, RefreshCcw, Trash } from "lucide-react";
import { questionSchemaDefaultValues } from "../../../schema/question";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import { useQuizMaker } from "../../../store/provider";
import { toast } from "sonner";
import { useLocale } from "next-intl";
import { quizQuestionFieldI18n } from "../../../i18n/question-field";

export function QuestionFieldContent() {
  const {
    form,
    setShowErrors,
    setData,
    setContent,
    content,
    isInitContent,
    setIsInitContent,
    setIsFromSample,
  } = useQuizMaker();

  const locale = useLocale() as "en" | "id";
  const t = quizQuestionFieldI18n[locale];

  const { fields, append, remove } = useFieldArray({
    name: "questions",
    control: form.control,
  });

  useEffect(() => {
    if (!isInitContent) return;
    setContent(fields[0].questionId);
    setIsInitContent(false);
  }, [fields, setContent, isInitContent, setIsInitContent]);

  const removeHandler = (index: number) => {
    setShowErrors(false);
    remove(index);

    const next =
      fields[index + 1]?.questionId ??
      fields[index - 1]?.questionId ??
      undefined;

    setContent(next);
  };

  const addHandler = () => {
    setShowErrors(false);
    const newQuestion = {
      ...questionSchemaDefaultValues,
      questionId: nanoid(),
    };

    append(newQuestion);
    setContent(newQuestion.questionId);
  };

  return (
    <TabsContent value="question" className="space-y-4">
      <div className="flex justify-between">
        <Button variant="outline" onClick={addHandler} type="button">
          <Plus /> {t.addQuestion}
        </Button>

        <Button
          variant="destructive"
          onClick={() => {
            form.reset(defaultMainQuestSchema);
            setData(null);
            setIsInitContent(true);
            setIsFromSample(false);
            toast.success(t.resetSuccess);
          }}
          type="button"
        >
          <RefreshCcw /> {t.resetForm}
        </Button>
      </div>

      <Tabs value={content} onValueChange={setContent} className="w-full">
        <TabsList className="w-full">
          {fields.map((field, index) => (
            <TabsTrigger key={index} value={field.questionId}>
              {index + 1}
            </TabsTrigger>
          ))}
        </TabsList>

        {fields.map((field, index) => {
          const isHiddenDelete = fields.length > 1;

          return (
            <TabsContent key={field.id} value={field.questionId}>
              <div className="space-y-4">
                {isHiddenDelete && (
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => removeHandler(index)}
                  >
                    <Trash /> {t.deleteQuestion}
                  </Button>
                )}

                <FormField
                  control={form.control}
                  name={`questions.${index}.text`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t.questionLabelPrefix} #{index + 1}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t.questionPlaceholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <QuestionOptionArray index={index} form={form} />

                <FormField
                  control={form.control}
                  name={`questions.${index}.explanation`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.explanationLabel}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t.explanationPlaceholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </TabsContent>
  );
}
