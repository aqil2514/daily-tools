"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { fontLobster } from "@/constants/fonts";
import { usePathname, Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { CustomSidebarTrigger } from "./custom-sidebar";
import { LanguageSwitcher } from "./language-switcher";
import { SearchSheet } from "./search-sheet";

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
    <header
      className={cn(
        "sticky top-0 w-full z-50",
        "bg-slate-800/90 backdrop-blur supports-backdrop-filter:bg-slate-800",
        "border-b border-white/10",
        "text-amber-100 px-6 py-4"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl",
          "flex gap-8 justify-between items-center"
        )}
      >
        <div className="flex gap-4 items-center">
          {pathname !== "/" && (
            <CustomSidebarTrigger className="hidden lg:flex" />
          )}
          <Link
            href="/"
            className={cn(fontLobster.className, "font-semibold text-2xl")}
          >
            FlowTooly
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex-wrap">
              {items.map((item, i) => {
                const isActive = item.isDynamic
                  ? pathname.startsWith(item.href)
                  : pathname === item.href;

                return (
                  <NavigationMenuItem
                    key={i}
                    className={cn(
                      "px-3 py-1 rounded-md",
                      isActive && "bg-white text-black"
                    )}
                  >
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop */}
          <div className="hidden lg:block">
            <SearchSheet />
          </div>

          {/* Mobile */}
          <div className="block lg:hidden">
            <SearchSheet compact />
          </div>

          <LanguageSwitcher />

          {pathname !== "/" && (
            <CustomSidebarTrigger className="flex lg:hidden" />
          )}
        </div>
      </div>
    </header>
  );
}
