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
import { useState } from "react";
import { IconSelector } from "./sub/IconSelector";
import { useQRGenerator } from "../../store/provider";
import { UseLogoSwitcher } from "./sub/UseLogoSwitcher";
import { Input } from "@/components/ui/input";
import { whatsAppMessengerSchema, WhatsAppMessengerSchemaType } from "../../schemas/whatsapp-messenger-schema";

type MessageName = "whatsapp" | "telegram";

interface Items {
  image: string;
  value: MessageName;
}

const messageItems: Items[] = [
  {
    image: "/logo/telegram.png",
    value: "telegram",
  },
  {
    image: "/logo/whatsapp.png",
    value: "whatsapp",
  },
];

const prefixMapping: Record<MessageName, string> = {
  whatsapp: "https://wa.me/",
  telegram: "https://t.me/",
};


export function WhatsappAndMessengerForm() {
  const { setOptions } = useQRGenerator();
  const [message, setMessage] = useState<MessageName>("whatsapp");
  const [messageLogo, setMessageLogo] = useState<string>("/logo/whatsapp.png");
  const [withLogo, setWithLogo] = useState<boolean>(false);

  const form = useForm<WhatsAppMessengerSchemaType>({
    resolver: zodResolver(whatsAppMessengerSchema),
    defaultValues: {
      phone: "",
      message: "",
      username: "",
    },
  });

  function onSubmit(values: WhatsAppMessengerSchemaType) {
    if (message === "whatsapp") {
      if (!values.phone || !isValidPhoneNumber(values.phone)) {
        form.setError("phone", { message: "Nomor telepon tidak valid" });
        return;
      }

      const newPhone = values.phone.replaceAll("+", "");
      const prefixUrl = prefixMapping[message];
      const messageText = values.message;

      const newUrl = `${prefixUrl}${newPhone}${
        messageText ? `?text=${encodeURI(messageText)}` : ""
      }`;
      setOptions((prev) => ({ ...prev, data: newUrl }));
    }

    if (message === "telegram") {
      if (!values.username) {
        form.setError("username", { message: "Username wajib diisi" });
        return;
      }

      const prefixUrl = prefixMapping[message];
      const newUrl = `${prefixUrl}${values.username.replaceAll("@", "")}`;

      setOptions((prev) => ({ ...prev, data: newUrl }));
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
      <SubHeading>Whatsapp & Messenger Data</SubHeading>

      <IconSelector
        iconName={message}
        items={messageItems}
        setIconLogo={setMessageLogo}
        setIconName={setMessage}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {message === "telegram" && (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username Telegram</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {message == "whatsapp" && (
            <>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        className="border border-gray-500 p-2 rounded-2xl"
                        defaultCountry="ID"
                        international
                        withCountryCallingCode
                        placeholder="Masukkan nomor telepon"
                        value={field.value || ""}
                        onChange={(val) => field.onChange(val)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <UseLogoSwitcher withLogo={withLogo} onCheckedChange={logoHandler} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
