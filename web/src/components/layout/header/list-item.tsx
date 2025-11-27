import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

export function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-tight no-underline outline-none transition-colors hover:bg-slate-700"
        >
          <div className="font-semibold text-amber-100 text-sm">{title}</div>
          <p className="text-amber-100 text-xs leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
