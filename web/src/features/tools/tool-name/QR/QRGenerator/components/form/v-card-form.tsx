"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

import { SubHeading } from "@/components/atoms/text/subHeading";
import { vcardSchema, VCardSchemaType } from "../../schemas/v-card-schema";
import { useQRGenerator } from "../../store/provider";

import { useLocale } from "next-intl";
import { i18nVCardForm } from "../../i18n/form/vcard";

export function VCardForm() {
  const { setOptions } = useQRGenerator();
  const locale = useLocale();
  const t = i18nVCardForm[locale];

  const form = useForm<VCardSchemaType>({
    resolver: zodResolver(vcardSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      website: "",
      organization: "",
      title: "",
      address: "",
    },
  });

  const onSubmit = (values: VCardSchemaType) => {
    const output = buildVCard(values);
    setOptions((prev) => ({ ...prev, data: output }));
  };

  return (
    <div>
      <SubHeading>{t.heading}</SubHeading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.firstName.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.firstName.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.lastName.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.lastName.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.phone.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.phone.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.email.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.email.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Website */}
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.website.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.website.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Organization */}
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.organization.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.organization.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Title */}
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

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.address.label}</FormLabel>
                <FormControl>
                  <Input placeholder={t.address.placeholder} {...field} />
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

/* --------------------------
  vCard Builder (unchanged)
--------------------------- */

function buildVCard(data: VCardSchemaType): string {
  const {
    firstName,
    lastName,
    phone,
    email,
    website,
    organization,
    title,
    address,
  } = data;

  let vcard = "BEGIN:VCARD\nVERSION:3.0\n";

  vcard += `N:${escapeVCard(lastName)};${escapeVCard(firstName)};;;\n`;

  const fullName = `${firstName}${lastName ? ` ${lastName}` : ""}`;
  vcard += `FN:${escapeVCard(fullName)}\n`;

  if (organization) vcard += `ORG:${escapeVCard(organization)}\n`;
  if (title) vcard += `TITLE:${escapeVCard(title)}\n`;
  if (phone) vcard += `TEL:${escapeVCard(phone)}\n`;
  if (email) vcard += `EMAIL:${escapeVCard(email)}\n`;
  if (website) vcard += `URL:${escapeVCard(website)}\n`;
  if (address) vcard += `ADR:;;${escapeVCard(address)};;;;\n`;

  vcard += "END:VCARD";
  return vcard;
}

function escapeVCard(value?: string): string {
  if (!value) return "";
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}
