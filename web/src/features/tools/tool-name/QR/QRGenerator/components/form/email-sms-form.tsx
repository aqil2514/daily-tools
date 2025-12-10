"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailSmsSchema,
  EmailSmsSchemaType,
} from "../../schemas/email-sms-schema";
import { useWatch } from "react-hook-form";

import { SubHeading } from "@/components/atoms/subHeading";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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

import { useQRGenerator } from "../../store/provider";

import { useLocale } from "next-intl";
import { i18nEmailSmsForm } from "../../i18n/form/email-sms";

export function EmailSmsForm() {
  const { setOptions } = useQRGenerator();
  const locale = useLocale();
  const t = i18nEmailSmsForm[locale];

  const form = useForm<EmailSmsSchemaType>({
    resolver: zodResolver(emailSmsSchema),
    defaultValues: {
      mode: "email",
      email: "",
      subject: "",
      body: "",
    },
  });

  const mode = useWatch({
    control: form.control,
    name: "mode",
  });

  const buildEmailSms = (values: EmailSmsSchemaType) => {
    if (values.mode === "email") {
      const { email, subject, body } = values;

      let url = `mailto:${email}`;
      const params: string[] = [];

      if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
      if (body) params.push(`body=${encodeURIComponent(body)}`);

      if (params.length > 0) url += `?${params.join("&")}`;
      return url;
    }

    if (values.mode === "sms") {
      const { phone, body } = values;
      let url = `sms:${phone}`;
      if (body) url += `?body=${encodeURIComponent(body)}`;
      return url;
    }

    return "";
  };

  const onSubmit = (values: EmailSmsSchemaType) => {
    const outputUrl = buildEmailSms(values);
    setOptions((prev) => ({ ...prev, data: outputUrl }));
  };

  return (
    <div>
      <SubHeading>{t.heading}</SubHeading>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-md"
        >

          {/* MODE SELECT */}
          <FormField
            control={form.control}
            name="mode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.mode.label}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t.mode.placeholder} />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="w-(--radix-select-trigger-width)">
                    <SelectItem value="email">{t.mode.email}</SelectItem>
                    <SelectItem value="sms">{t.mode.sms}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* =======================
                EMAIL MODE
          ======================= */}
          {mode === "email" && (
            <>
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.email.address}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t.email.addressPlaceholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Subject */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.email.subject}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t.email.subjectPlaceholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Body */}
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.email.body}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.email.bodyPlaceholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* =======================
                SMS MODE
          ======================= */}
          {mode === "sms" && (
            <>
              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.sms.phone}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t.sms.phonePlaceholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Body */}
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.sms.body}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.sms.bodyPlaceholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <Button type="submit">{t.submit}</Button>
        </form>
      </Form>
    </div>
  );
}
