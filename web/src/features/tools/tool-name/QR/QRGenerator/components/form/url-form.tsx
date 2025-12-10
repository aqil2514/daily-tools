"use client";

import { SubHeading } from "@/components/atoms/subHeading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useQRGenerator } from "../../store/provider";
import { urlSchema, URLSchemaType } from "../../schemas/url-schema";

import { useLocale } from "next-intl";
import { i18nURLForm } from "../../i18n/form/url";

export function URLForm() {
  const { setOptions } = useQRGenerator();

  const locale = useLocale();
  const t = i18nURLForm[locale];

  const form = useForm<URLSchemaType>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      url: "",
    },
  });

  function onSubmit(values: URLSchemaType) {
    setOptions((prev) => ({ ...prev, data: values.url }));
  }

  return (
    <div>
      <SubHeading>{t.heading}</SubHeading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.url.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.url.placeholder} {...field} />
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
