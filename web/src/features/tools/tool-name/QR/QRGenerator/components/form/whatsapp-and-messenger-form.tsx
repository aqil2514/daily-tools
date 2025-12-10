"use client";

import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
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

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { IconSelector } from "./sub/IconSelector";
import { UseLogoSwitcher } from "./sub/UseLogoSwitcher";
import { useQRGenerator } from "../../store/provider";

import {
  whatsAppMessengerSchema,
  WhatsAppMessengerSchemaType,
} from "../../schemas/whatsapp-messenger-schema";

import { useLocale } from "next-intl";
import { i18nWhatsappMessengerForm } from "../../i18n/form/whatsapp-messenger";

type MessageName = "whatsapp" | "telegram";

interface Items {
  image: string;
  value: MessageName;
}

const messageItems: Items[] = [
  { image: "/logo/telegram.png", value: "telegram" },
  { image: "/logo/whatsapp.png", value: "whatsapp" },
];

const prefixMapping: Record<MessageName, string> = {
  whatsapp: "https://wa.me/",
  telegram: "https://t.me/",
};

export function WhatsappAndMessengerForm() {
  const { setOptions } = useQRGenerator();
  const locale = useLocale();
  const t = i18nWhatsappMessengerForm[locale];

  const [message, setMessage] = useState<MessageName>("whatsapp");
  const [messageLogo, setMessageLogo] = useState("/logo/whatsapp.png");
  const [withLogo, setWithLogo] = useState(false);

  const form = useForm<WhatsAppMessengerSchemaType>({
    resolver: zodResolver(whatsAppMessengerSchema),
    defaultValues: {
      phone: "",
      message: "",
      username: "",
    },
  });

  function onSubmit(values: WhatsAppMessengerSchemaType) {
    // WhatsApp mode
    if (message === "whatsapp") {
      if (!values.phone || !isValidPhoneNumber(values.phone)) {
        form.setError("phone", { message: t.error.invalidPhone });
        return;
      }

      const phoneNoPlus = values.phone.replaceAll("+", "");
      const prefix = prefixMapping[message];
      const msg = values.message;

      const url = `${prefix}${phoneNoPlus}${
        msg ? `?text=${encodeURIComponent(msg)}` : ""
      }`;

      setOptions((prev) => ({ ...prev, data: url }));
    }

    // Telegram mode
    if (message === "telegram") {
      if (!values.username) {
        form.setError("username", { message: t.error.usernameRequired });
        return;
      }

      const prefix = prefixMapping[message];
      const url = `${prefix}${values.username.replaceAll("@", "")}`;

      setOptions((prev) => ({ ...prev, data: url }));
    }
  }

  const logoHandler = (checked: boolean) => {
    setWithLogo(checked);
    setOptions((prev) => ({
      ...prev,
      image: checked ? messageLogo : "",
    }));
  };

  return (
    <div>
      <SubHeading>{t.heading}</SubHeading>

      <IconSelector
        iconName={message}
        items={messageItems}
        setIconLogo={setMessageLogo}
        setIconName={setMessage}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

          {/* Telegram */}
          {message === "telegram" && (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.telegram.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.telegram.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* WhatsApp */}
          {message === "whatsapp" && (
            <>
              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.whatsapp.phoneLabel}</FormLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        className="border border-gray-500 p-2 rounded-2xl"
                        defaultCountry="ID"
                        international
                        withCountryCallingCode
                        placeholder={t.whatsapp.phonePlaceholder}
                        value={field.value || ""}
                        onChange={(v) => field.onChange(v)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.whatsapp.messageLabel}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.whatsapp.messagePlaceholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <UseLogoSwitcher withLogo={withLogo} onCheckedChange={logoHandler} />
          <Button type="submit">{t.submit}</Button>
        </form>
      </Form>
    </div>
  );
}
