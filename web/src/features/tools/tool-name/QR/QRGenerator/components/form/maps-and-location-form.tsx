"use client";

import { useForm, useWatch } from "react-hook-form";
import {
  mapLocationSchema,
  MapLocationSchemaType,
} from "../../schemas/map-location-schema";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { IconSelector } from "./sub/IconSelector";
import { UseLogoSwitcher } from "./sub/UseLogoSwitcher";
import { useQRGenerator } from "../../store/provider";

import { useLocale } from "next-intl";
import { i18nMapsLocationForm } from "../../i18n/form/maps-location";

type MapAndLocationName = "waze" | "google-maps";

interface Items {
  image: string;
  value: MapAndLocationName;
}

const mapAndLocationItems: Items[] = [
  {
    image: "/logo/google-maps.png",
    value: "google-maps",
  },
  {
    image: "/logo/waze.png",
    value: "waze",
  },
];

export function MapsAndLocationForm() {
  const { setOptions } = useQRGenerator();

  const locale = useLocale();
  const t = i18nMapsLocationForm[locale];

  const form = useForm<MapLocationSchemaType>({
    resolver: zodResolver(mapLocationSchema),
    defaultValues: {
      source: "link",
      link: "",
    },
  });

  const [mapApp, setMapApp] = useState<MapAndLocationName>("google-maps");
  const [imageLogo, setImageLogo] = useState<string>("/logo/google-maps.png");
  const [withLogo, setWithLogo] = useState<boolean>(false);

  const source = useWatch({
    control: form.control,
    name: "source",
  });

  const buildLink = (values: MapLocationSchemaType) => {
    if (values.source === "link") return;

    if (mapApp === "google-maps") {
      return `https://www.google.com/maps?q=${values.latitude},${values.longitude}`;
    }

    if (mapApp === "waze") {
      return `https://waze.com/ul?ll=${values.latitude},${values.longitude}&navigate=yes`;
    }
  };

  const onSubmit = (values: MapLocationSchemaType) => {
    const outputLink =
      values.source === "link" ? values.link : buildLink(values);

    setOptions((prev) => ({ ...prev, data: outputLink }));
  };

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

      <IconSelector
        iconName={mapApp}
        setIconLogo={(iconLogo) => {
          setImageLogo(iconLogo);
          setOptions((prev) => ({ ...prev, data: "", image: "" }));
          form.reset();
        }}
        setIconName={setMapApp}
        items={mapAndLocationItems}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* SOURCE SELECTION */}
          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.source.label}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t.source.placeholder} />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="w-(--radix-select-trigger-width)">
                    <SelectItem value="link">{t.source.link}</SelectItem>
                    <SelectItem value="coordinate">{t.source.coordinate}</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* INPUT LINK */}
          {source === "link" && (
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.link.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.link.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* COORDINATES */}
          {source === "coordinate" && (
            <>
              {/* LATITUDE */}
              <FormField
                control={form.control}
                name="latitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.latitude.label}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        type="number"
                        placeholder={t.latitude.placeholder}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* LONGITUDE */}
              <FormField
                control={form.control}
                name="longitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.longitude.label}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        type="number"
                        placeholder={t.longitude.placeholder}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* USE LOGO */}
          <UseLogoSwitcher
            withLogo={withLogo}
            onCheckedChange={logoHandler}
          />

          <Button type="submit">{t.submit}</Button>
        </form>
      </Form>
    </div>
  );
}
