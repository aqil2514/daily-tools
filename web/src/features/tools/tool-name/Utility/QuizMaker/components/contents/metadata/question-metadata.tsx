"use client";

import { TabsContent } from "@/components/ui/tabs";
import { UseFormReturn } from "react-hook-form";
import { MainQuestSchema } from "../../../schema/main";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { Separator } from "@/components/ui/separator";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { formatDuration } from "@/utils/time/formatDuration";
import { useQuizMaker } from "../../../store/provider";
import { useLocale } from "next-intl";
import { quizMetadataI18n } from "../../../i18n/question-metadata";

/**
 * Reusable switch field for quiz config
 */
function ConfigSwitch({
  form,
  name,
  id,
  label,
  descriptionOn,
  descriptionOff,
}: {
  form: UseFormReturn<MainQuestSchema>;
  name:
    | "metadata.config.shuffleQuestions"
    | "metadata.config.shuffleOptions"
    | "metadata.config.revealCorrectAnswer";
  id: string;
  label: string;
  descriptionOn: string;
  descriptionOff: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="flex items-center space-x-2">
              <Switch
                id={id}
                checked={!!field.value}
                onCheckedChange={field.onChange}
              />
              <FormLabel htmlFor={id}>{label}</FormLabel>
            </div>
          </FormControl>

          <FormDescription>
            {field.value ? descriptionOn : descriptionOff}
          </FormDescription>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function QuestionMetadataContent() {
  const { form } = useQuizMaker();
  const locale = useLocale() as "en" | "id";
  const t = quizMetadataI18n[locale];

  return (
    <TabsContent value="metadata" className="space-y-6">
      <SubHeading>{t.sectionMetadata}</SubHeading>
      <Separator />

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="metadata.title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.titleLabel}</FormLabel>
              <FormControl>
                <Input placeholder={t.titlePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="metadata.description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.descLabel}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.descPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Separator />
      <SubHeading>{t.sectionConfig}</SubHeading>
      <Separator />

      <div className="space-y-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <ConfigSwitch
            form={form}
            name="metadata.config.shuffleQuestions"
            id="shuffle-questions"
            label={t.shuffleQuestionsLabel}
            descriptionOn={t.shuffleQuestionsOn}
            descriptionOff={t.shuffleQuestionsOff}
          />

          <ConfigSwitch
            form={form}
            name="metadata.config.shuffleOptions"
            id="shuffle-options"
            label={t.shuffleOptionsLabel}
            descriptionOn={t.shuffleOptionsOn}
            descriptionOff={t.shuffleOptionsOff}
          />

          <ConfigSwitch
            form={form}
            name="metadata.config.revealCorrectAnswer"
            id="reveal-answer"
            label={t.revealAnswerLabel}
            descriptionOn={t.revealAnswerOn}
            descriptionOff={t.revealAnswerOff}
          />
        </div>

        <FormField
          control={form.control}
          name="metadata.config.timeLimitSeconds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.timeLimitLabel}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  placeholder={t.timeLimitPlaceholder}
                  value={field.value ?? 0}
                  onChange={(e) =>
                    field.onChange(e.target.valueAsNumber || 0)
                  }
                />
              </FormControl>

              <FormDescription>
                {field.value === 0
                  ? t.timeUnlimited
                  : `${t.timeLimitedPrefix} ${formatDuration(
                      field.value!,
                      locale
                    )}`}
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </TabsContent>
  );
}
