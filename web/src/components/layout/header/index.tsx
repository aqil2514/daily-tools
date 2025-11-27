import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ToolsImage } from "./tools-image";
import { ToolsPDF } from "./tools-pdf";

export interface MenuItem {
  title: string;
  href: string;
  description: string;
}

export default function Header() {
  return (
    <header className="w-full bg-slate-800 text-amber-100 px-6 py-4 flex gap-8 items-center">
      <Link href="/" className="font-semibold text-lg">
        File Tools
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <ToolsImage />
          <ToolsPDF />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
