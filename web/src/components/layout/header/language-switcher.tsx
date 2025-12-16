import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { fontPoppins } from "@/constants/fonts";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const { isMobile } = useSidebar();
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const hiddenMobile = isMobile && pathname !== "/";

  if(hiddenMobile) return null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant={"ghost"}>
          {locale.toUpperCase()}{" "}
          <ChevronDown
            className={cn("transition duration-200", open && "rotate-180")}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className={cn(fontPoppins.className, "text-foreground text-center")}>
          Language
        </p>
        <Separator />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link href={pathname} locale="id">
            <Button
              className="w-full"
              variant={locale === "id" ? "default" : "outline"}
            >
              ID
            </Button>
          </Link>
          <Link href={pathname} locale="en">
            <Button
              className="w-full"
              variant={locale === "en" ? "default" : "outline"}
            >
              EN
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
