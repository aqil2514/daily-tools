import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link, usePathname } from "@/i18n/navigation";
import { BadgeInfo, Home, Pickaxe } from "lucide-react";
import { SidebarItem } from "../interface";
import { useLocale } from "next-intl";

export function MainGroup() {
  const pathname = usePathname();
  const locale = useLocale();
  
  const sidebarItems: SidebarItem[] = [
    {
      href: "/",
      icon: Home,
      label: locale === "id" ? "Beranda" : "Home",
    },
    {
      href: "/tools",
      icon: Pickaxe,
      label: locale === "id" ? "Alat" : "Tools",
    },
    {
      href: "/about",
      icon: BadgeInfo,
      label: locale === "id" ? "Tentang" : "About",
    },
  ];
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarGroupContent>
        {sidebarItems.map((item, i) => (
          <SidebarMenuButton
            key={`main-sidebar-${i}`}
            asChild
            isActive={item.href === pathname}
          >
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        ))}
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
