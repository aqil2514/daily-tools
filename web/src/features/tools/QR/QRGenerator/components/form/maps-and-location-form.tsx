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
    let outputUrl: string = "";

    if (mapApp === "google-maps")
      outputUrl = `https://www.google.com/maps?q=${values.latitude},${values.longitude}`;
    if (mapApp === "waze")
      outputUrl = `https://waze.com/ul?ll=${values.latitude},${values.longitude}&navigate=yes`;

    return outputUrl;
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
      <SubHeading>Map and Location Data</SubHeading>

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
          {/** ----------------------------
           * SELECT SOURCE
           * ----------------------------- */}
          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sumber</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih sumber lokasi" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="w-(--radix-select-trigger-width)">
                    <SelectItem value="link">Link Maps</SelectItem>
                    <SelectItem value="coordinate">Koordinat</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/** ----------------------------
           * INPUT LINK
           * ----------------------------- */}
          {source === "link" && (
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input placeholder="Link...." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/** ----------------------------
           * INPUT KOORDINAT
           * ----------------------------- */}
          {source === "coordinate" && (
            <>
              <FormField
                control={form.control}
                name="latitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Latitude (Lintang)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        type="number"
                        placeholder="-6.200000"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="longitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude (Bujur)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        type="number"
                        placeholder="106.816666"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <UseLogoSwitcher onCheckedChange={logoHandler} withLogo={withLogo} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
