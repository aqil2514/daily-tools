"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
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
    <header className="fixed top-0 left-0 w-full bg-slate-800 text-amber-100 px-6 py-4 flex gap-8 items-center">
      <Link href="/" className="font-semibold text-lg">
        Flowtooly
      </Link>

      <NavigationMenu>
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
