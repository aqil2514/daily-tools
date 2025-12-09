import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface UseLogoSwitcherProps {
  withLogo: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function UseLogoSwitcher({
  onCheckedChange,
  withLogo,
}: UseLogoSwitcherProps) {
  return (
    <div className="flex gap-4">
      <Label htmlFor="use-logo">Use Logo</Label>
      <Switch
        id="use-logo"
        checked={withLogo}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
}
