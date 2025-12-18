"use client";

import { useForm, useWatch } from "react-hook-form";
import { wifiSchema, WifiSchemaType } from "../../schemas/wifi-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubHeading } from "@/components/atoms/text/subHeading";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { useQRGenerator } from "../../store/provider";
import { useLocale } from "next-intl";
import { i18nWifiForm } from "../../i18n/form/wifi";

export function WifiForm() {
  const locale = useLocale();
  const t = i18nWifiForm[locale];

  const { setOptions } = useQRGenerator();

  const form = useForm<WifiSchemaType>({
    resolver: zodResolver(wifiSchema),
    defaultValues: {
      type: "WPA",
      hidden: false,
      ssid: "",
      password: "",
    },
  });

  // Watch the selected security type
  const type = useWatch({ control: form.control, name: "type" });

  const buildWifiUrl = (values: WifiSchemaType) => {
    const { type, ssid, password, hidden } = values;

    let qr = `WIFI:T:${type};S:${escapeValue(ssid)};`;

    if (type !== "nopass") {
      qr += `P:${escapeValue(password)};`;
    }

    if (hidden) {
      qr += `H:true;`;
    }

    return qr + `;`;
  };

  function escapeValue(value: string | undefined): string {
    if (!value) return "";
    return value.replace(/([\\;,":])/g, "\\$1");
  }

  const onSubmit = (values: WifiSchemaType) => {
    const outputUrl = buildWifiUrl(values);
    setOptions((prev) => ({ ...prev, data: outputUrl }));
  };

  return (
    <div>
      <SubHeading>{t.heading}</SubHeading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* Security Type */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.type.label}</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t.type.placeholder} />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="WPA">{t.type.wpa}</SelectItem>
                    <SelectItem value="WEP">{t.type.wep}</SelectItem>
                    <SelectItem value="nopass">{t.type.nopass}</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* SSID */}
          <FormField
            control={form.control}
            name="ssid"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.ssid.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.ssid.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          {type !== "nopass" && (
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.password.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.password.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Hidden SSID */}
          <FormField
            control={form.control}
            name="hidden"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3">
                <FormLabel>{t.hidden.label}</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit">{t.submit}</Button>
        </form>
      </Form>
    </div>
  );
}
