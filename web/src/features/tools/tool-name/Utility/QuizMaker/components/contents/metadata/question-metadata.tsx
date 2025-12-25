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
  return (
    <TabsContent value="metadata" className="space-y-6">
      <SubHeading>Metadata</SubHeading>
      <Separator />

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="metadata.title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Judul Kuis</FormLabel>
              <FormControl>
                <Input placeholder="Contoh: JavaScript Basic Quiz" {...field} />
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
              <FormLabel>Deskripsi</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Deskripsi singkat tentang kuis ini..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Separator />
      <SubHeading>Konfigurasi</SubHeading>
      <Separator />

      <div className="space-y-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <ConfigSwitch
            form={form}
            name="metadata.config.shuffleQuestions"
            id="shuffle-questions"
            label="Acak Pertanyaan"
            descriptionOn="Urutan pertanyaan akan diacak saat kuis dijalankan"
            descriptionOff="Urutan pertanyaan mengikuti urutan saat dibuat"
          />

          <ConfigSwitch
            form={form}
            name="metadata.config.shuffleOptions"
            id="shuffle-options"
            label="Acak Pilihan Jawaban"
            descriptionOn="Urutan pilihan jawaban akan diacak"
            descriptionOff="Urutan pilihan jawaban tetap seperti saat dibuat"
          />

          <ConfigSwitch
            form={form}
            name="metadata.config.revealCorrectAnswer"
            id="reveal-answer"
            label="Tampilkan Jawaban"
            descriptionOn="Jawaban benar akan ditampilkan setelah kuis selesai"
            descriptionOff="Jawaban benar tidak akan ditampilkan"
          />
        </div>

        <FormField
          control={form.control}
          name="metadata.config.timeLimitSeconds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Batas Waktu</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  placeholder="Masukkan waktu (dalam detik)"
                  value={field.value ?? 0}
                  onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                />
              </FormControl>

              <FormDescription>
                {field.value === 0
                  ? "Waktu pengerjaan tidak dibatasi"
                  : `Waktu pengerjaan maksimal ${formatDuration(
                      field.value!,
                      "id"
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
