"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  eventCalendarSchema,
  EventCalendarSchemaType,
} from "../../schemas/event-calendar-schema";

import { useWatch } from "react-hook-form";

import { SubHeading } from "@/components/atoms/text/subHeading";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { buildEventICS } from "../../builder/event-calendar-builder";
import { useQRGenerator } from "../../store/provider";

import { useLocale } from "next-intl";
import { i18nEventCalendarForm } from "../../i18n/form/event-calendar";

export function EventCalendarForm() {
  const { setOptions } = useQRGenerator();
  const locale = useLocale();
  const t = i18nEventCalendarForm[locale];

  const form = useForm<EventCalendarSchemaType>({
    resolver: zodResolver(eventCalendarSchema),
    defaultValues: {
      allDay: false,
      title: "",
      start: "",
      end: "",
      location: "",
      description: "",
    },
  });

  const allDay = useWatch({
    control: form.control,
    name: "allDay",
  });

  const onSubmit = (values: EventCalendarSchemaType) => {
    const outputUrl = buildEventICS(values);
    setOptions((prev) => ({ ...prev, data: outputUrl }));
  };

  return (
    <div>
      <SubHeading>{t.heading}</SubHeading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          {/* EVENT TYPE */}
          <FormField
            control={form.control}
            name="allDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.type.label}</FormLabel>
                <Select
                  onValueChange={(val) => field.onChange(val === "true")}
                  defaultValue={field.value ? "true" : "false"}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t.type.placeholder} />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="w-(--radix-select-trigger-width)">
                    <SelectItem value="false">{t.type.timed}</SelectItem>
                    <SelectItem value="true">{t.type.allDay}</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* TITLE */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.title.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.title.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ALL DAY EVENT */}
          {allDay && (
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.date.label}</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* TIMED EVENT */}
          {!allDay && (
            <>
              <FormField
                control={form.control}
                name="start"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.time.start.label}</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="end"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.time.end.label}</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* LOCATION */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.location.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.location.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* DESCRIPTION */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.description.label}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t.description.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">{t.submit}</Button>
        </form>
      </Form>
    </div>
  );
}
