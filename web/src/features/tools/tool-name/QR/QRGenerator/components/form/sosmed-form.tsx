"use client";

import { SubHeading } from "@/components/atoms/subHeading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useQRGenerator } from "../../store/provider";
import { useState } from "react";
import { IconSelector } from "./sub/IconSelector";
import { UseLogoSwitcher } from "./sub/UseLogoSwitcher";
import { sosmedSchema, SosmedSchemaType } from "../../schemas/sosmed-schema";

import { useLocale } from "next-intl";
import { i18nSocialMediaForm } from "../../i18n/form/social-media";

type SosmedName =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "tiktok"
  | "twitter"
  | "youtube";

interface Items {
  image: string;
  value: SosmedName;
}

const sosmedItems: Items[] = [
  { image: "/logo/facebook.png", value: "facebook" },
  { image: "/logo/instagram.png", value: "instagram" },
  { image: "/logo/linkedin.png", value: "linkedin" },
  { image: "/logo/tiktok.png", value: "tiktok" },
  { image: "/logo/twitter.png", value: "twitter" },
  { image: "/logo/youtube.png", value: "youtube" },
];

const prefixMapping: Record<SosmedName, string> = {
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  twitter: "https://x.com/",
  tiktok: "https://tiktok.com/@",
  linkedin: "https://linkedin.com/in/",
  youtube: "https://youtube.com/@",
};

export function SocialMediaForm() {
  const { setOptions } = useQRGenerator();

  const locale = useLocale();
  const t = i18nSocialMediaForm[locale];

  const [sosmed, setSosmed] = useState<SosmedName>("facebook");
  const [imageLogo, setImageLogo] = useState<string>("/logo/facebook.png");
  const [withLogo, setWithLogo] = useState<boolean>(false);

  const form = useForm<SosmedSchemaType>({
    resolver: zodResolver(sosmedSchema),
    defaultValues: { username: "" },
  });

  function onSubmit(values: SosmedSchemaType) {
    const value = `${prefixMapping[sosmed]}${values.username.replaceAll(
      "@",
      ""
    )}`;
    setWithLogo(false);

    setOptions((prev) => ({
      ...prev,
      data: value,
      image: "",
    }));
  }

  const logoHandler = (checked: boolean) => {
    setWithLogo(checked);
    setOptions((prev) => ({
      ...prev,
      image: checked ? imageLogo : "",
    }));
  };

  return (
    <div>
      <SubHeading>{t.heading}</SubHeading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <IconSelector
            iconName={sosmed}
            setIconName={setSosmed}
            setIconLogo={setImageLogo}
            items={sosmedItems}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.username.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.username.placeholder} {...field} />
                </FormControl>
                <FormDescription>{t.username.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <UseLogoSwitcher
            onCheckedChange={logoHandler}
            withLogo={withLogo}
          />

          <Button type="submit">{t.submit}</Button>
        </form>
      </Form>
    </div>
  );
}
