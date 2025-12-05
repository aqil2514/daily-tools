import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

interface LocaleSwitcherProps {
  showLabel?: boolean;
}

export function LocaleSwitcher({ showLabel }: LocaleSwitcherProps) {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition(); // Untuk state loading

  const isChecked = currentLocale === "en";

  const handleChange = (checked: boolean) => {
    const newLocale = checked ? "en" : "id";

    startTransition(() => {
      router.replace(pathname, { locale: newLocale, scroll: false });
    });
  };

  return (
    <div className="flex items-center space-x-2">
      {showLabel && (
        <Label
          htmlFor="locale-switch"
          className={
            !isChecked ? "font-bold text-primary" : "text-muted-foreground"
          }
        >
          ID
        </Label>
      )}

      {/* Komponen Switch */}
      <Switch
        id="locale-switch"
        checked={isChecked}
        onCheckedChange={handleChange}
        disabled={isPending}
      />

      {/* Label Kanan (Misalnya, EN) */}
      {showLabel && (
        <Label
          htmlFor="locale-switch"
          className={
            isChecked ? "font-bold text-primary" : "text-muted-foreground"
          }
        >
          EN
        </Label>
      )}
    </div>
  );
}
