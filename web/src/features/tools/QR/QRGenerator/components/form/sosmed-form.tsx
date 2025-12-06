import { SubHeading } from "@/components/atoms/subHeading";
import z from "zod";
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
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  username: z.string().min(1),
});

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
  {
    image: "/logo/facebook.png",
    value: "facebook",
  },
  {
    image: "/logo/instagram.png",
    value: "instagram",
  },
  {
    image: "/logo/linkedin.png",
    value: "linkedin",
  },
  {
    image: "/logo/tiktok.png",
    value: "tiktok",
  },
  {
    image: "/logo/twitter.png",
    value: "twitter",
  },
  {
    image: "/logo/youtube.png",
    value: "youtube",
  },
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
  const [sosmed, setSosmed] = useState<SosmedName>("facebook");
  const [imageLogo, setImageLogo] = useState<string>("/logo/facebook.png");
  const [withLogo, setWithLogo] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const value = `${prefixMapping[sosmed]}${values.username.replaceAll(
      "@",
      ""
    )}`;
    setOptions((prev) => ({
      ...prev,
      data: value,
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
      <SubHeading>Social Media Data</SubHeading>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-4 justify-center">
            {sosmedItems.map((item) => {
              const isSelected = item.value === sosmed;
              return (
                <div
                  key={item.value}
                  className={cn(
                    "rounded-lg group hover:bg-blue-300 transition duration-100 cursor-pointer",
                    isSelected && "bg-blue-300 "
                  )}
                  onClick={() => {
                    setSosmed(item.value);
                    setImageLogo(item.image);
                  }}
                >
                  <Image
                    width={48}
                    height={48}
                    src={item.image}
                    alt={item.value}
                    className={cn(
                      "group-hover:scale-75 duration-100 transition",
                      isSelected && "scale-75"
                    )}
                  />
                </div>
              );
            })}
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username123" {...field} />
                </FormControl>
                <FormDescription>Username without @</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <Label htmlFor="use-logo">Use Logo</Label>
            <Switch
              id="use-logo"
              checked={withLogo}
              onCheckedChange={logoHandler}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
