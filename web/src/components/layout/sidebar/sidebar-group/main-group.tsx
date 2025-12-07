import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link, usePathname } from "@/i18n/navigation";
import { Home, Pickaxe } from "lucide-react";
import { SidebarItem } from "../interface";

const sidebarItems: SidebarItem[] = [
  {
    href: "/",
    icon: Home,
    label: "Home",
  },
  {
    href: "/tools",
    icon: Pickaxe,
    label: "Tools",
  },
];

export function MainGroup() {
  const pathname = usePathname();
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
