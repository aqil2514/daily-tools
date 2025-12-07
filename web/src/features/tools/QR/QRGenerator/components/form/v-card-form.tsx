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

import { SubHeading } from "@/components/atoms/subHeading";
import { vcardSchema, VCardSchemaType } from "../../schemas/v-card-schema";
import { useQRGenerator } from "../../store/provider";

export function VCardForm() {
  const { setOptions } = useQRGenerator();
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
    const outputVCard = buildVCard(values);

    setOptions((prev) => ({ ...prev, data: outputVCard }));
  };

  return (
    <div>
      <SubHeading>Contact / vCard</SubHeading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Depan</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Depan..." {...field} />
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
                <FormLabel>Nama Belakang</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Belakang..." {...field} />
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
                <FormLabel>Nomor Telepon</FormLabel>
                <FormControl>
                  <Input placeholder="+628123456789" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.com" {...field} />
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
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://your-web.com" {...field} />
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
                <FormLabel>Organisasi / Perusahaan</FormLabel>
                <FormControl>
                  <Input placeholder="Your organization..." {...field} />
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
                <FormLabel>Jabatan</FormLabel>
                <FormControl>
                  <Input placeholder="Jabatan Anda...." {...field} />
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
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Input placeholder="Jakarta Selatan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

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

  // Format name: N:Last;First;Middle;Prefix;Suffix
  vcard += `N:${escapeVCard(lastName)};${escapeVCard(firstName)};;;\n`;

  // FN = Full Name (display name)
  const fullName = `${firstName}${lastName ? ` ${lastName}` : ""}`;
  vcard += `FN:${escapeVCard(fullName)}\n`;

  if (organization) vcard += `ORG:${escapeVCard(organization)}\n`;
  if (title) vcard += `TITLE:${escapeVCard(title)}\n`;
  if (phone) vcard += `TEL:${escapeVCard(phone)}\n`;
  if (email) vcard += `EMAIL:${escapeVCard(email)}\n`;
  if (website) vcard += `URL:${escapeVCard(website)}\n`;

  // ADR Format: ADR:;;Street;City;State;Postal;Country
  // Flowtooly only accepts a simple address text → put it on street field
  if (address) vcard += `ADR:;;${escapeVCard(address)};;;;\n`;

  vcard += "END:VCARD";

  return vcard;
}

function escapeVCard(value?: string): string {
  if (!value) return "";
  return value
    .replace(/\\/g, "\\\\") // Backslash
    .replace(/\n/g, "\\n") // New line
    .replace(/;/g, "\\;") // Semicolon
    .replace(/,/g, "\\,"); // Comma
}
