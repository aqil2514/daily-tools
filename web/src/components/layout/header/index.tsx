"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { fontLobster } from "@/constants/fonts";
import { usePathname, Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface MenuItem {
  title: string;
  href: string;
  description: string;
}

interface HeaderItem {
  href: string;
  label: string;
  isDynamic: boolean;
}

const items: HeaderItem[] = [
  {
    href: "/",
    label: "Home",
    isDynamic: false,
  },
  {
    href: "/tools",
    label: "Tools",
    isDynamic: true,
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full bg-slate-800 text-amber-100 px-6 py-4 flex gap-8 justify-between lg:justify-start items-center z-10">
      <div className="flex gap-4">
        <SidebarTrigger className="hidden lg:block" />
        <Link href="/" className={cn(fontLobster.className, "font-semibold text-2xl")}>
          FlowTooly
        </Link>
      </div>

        <SidebarTrigger className="block lg:hidden" />

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="flex-wrap">
          {items.map((item, i) => {
            const isActive = item.isDynamic
              ? pathname.startsWith(item.href)
              : pathname === item.href;
            return (
              <NavigationMenuItem
                key={`menu-item-${i + 1}`}
                className={cn(isActive && "text-black bg-white rounded-md")}
              >
                <NavigationMenuLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}

          {/* <ToolsImage />
          <ToolsPDF /> */}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
