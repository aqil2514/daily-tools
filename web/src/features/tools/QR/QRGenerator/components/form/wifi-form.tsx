"use client";

import { useForm } from "react-hook-form";
import { wifiSchema, WifiSchemaType } from "../../schemas/wifi-schema";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { useWatch } from "react-hook-form";
import { useQRGenerator } from "../../store/provider";

export function WifiForm() {
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
  const type = useWatch({
    control: form.control,
    name: "type",
  });

  const buildWifiUrl = (values: WifiSchemaType) => {
    const { type, ssid, password, hidden } = values;

    let qr = `WIFI:T:${type};S:${escapeValue(ssid)};`;

    if (type !== "nopass") {
      qr += `P:${escapeValue(password)};`;
    }

    if (hidden) {
      qr += `H:true;`;
    }

    qr += `;`;

    return qr;
  };

  function escapeValue(value: string | undefined): string {
    if (!value) return "";
    return value.replace(/([\\;,":])/g, "\\$1");
  }

  const onSubmit = (values: WifiSchemaType) => {
    const outpurUrl = buildWifiUrl(values);

    setOptions((prev) => ({ ...prev, data: outpurUrl }));
  };

  return (
    <div>
      <SubHeading>WiFi Data</SubHeading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* ===========================
              WIFI TYPE (WPA, WEP, nopass)
             =========================== */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jenis Keamanan</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih jenis keamanan" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="w-(--radix-select-trigger-width)">
                    <SelectItem value="WPA">WPA / WPA2 / WPA3</SelectItem>
                    <SelectItem value="WEP">WEP (jadul)</SelectItem>
                    <SelectItem value="nopass">Tanpa Password</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* ===========================
              SSID (Nama Wifi)
             =========================== */}
          <FormField
            control={form.control}
            name="ssid"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SSID (Nama WiFi)</FormLabel>
                <FormControl>
                  <Input placeholder="Contoh: Wifi Rumah..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ===========================
              PASSWORD (hanya WPA / WEP)
             =========================== */}
          {type !== "nopass" && (
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Password WiFi" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* ===========================
              HIDDEN NETWORK
             =========================== */}
          <FormField
            control={form.control}
            name="hidden"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3">
                <FormLabel>SSID disembunyikan?</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* ===========================
              SUBMIT BUTTON
             =========================== */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
