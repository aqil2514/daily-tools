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

export function EmailSmsForm() {
  const { setOptions } = useQRGenerator();
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

      if (subject) {
        params.push(`subject=${encodeURIComponent(subject)}`);
      }

      if (body) {
        params.push(`body=${encodeURIComponent(body)}`);
      }

      if (params.length > 0) {
        url += `?${params.join("&")}`;
      }

      return url;
    }

    if (values.mode === "sms") {
      const { phone, body } = values;

      let url = `sms:${phone}`;

      if (body) {
        url += `?body=${encodeURIComponent(body)}`;
      }

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
      <SubHeading>Email & SMS Data</SubHeading>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-md"
        >
          {/* ===============================
              MODE SELECTOR (email / sms)
             =============================== */}
          <FormField
            control={form.control}
            name="mode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pilih Mode</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih tindakan" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="w-(--radix-select-trigger-width)">
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ===============================
              EMAIL MODE
             =============================== */}
          {mode === "email" && (
            <>
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Subject (optional) */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject (opsional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Judul email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Body (optional) */}
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Isi Pesan (opsional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Isi email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* ===============================
              SMS MODE
             =============================== */}
          {mode === "sms" && (
            <>
              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor Telepon</FormLabel>
                    <FormControl>
                      <Input placeholder="+6281234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Body (optional) */}
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Isi Pesan (opsional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Isi pesan SMS..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
