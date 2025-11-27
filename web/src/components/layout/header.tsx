import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface MenuItem {
  title: string;
  href: string;
  description: string;
}

export default function Header() {
  return (
    <header className="w-full bg-slate-800 text-amber-100 px-6 py-4 flex gap-8 items-center">
      <Link href="/" className="font-semibold text-lg">File Tools</Link>

      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <ConvertMenu />

        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

const convertItems: MenuItem[] = [
  {
    title: "Image Converter",
    href: "/convert/image",
    description: "Convert your image from one type to another type.",
  },
  {
    title: "Soon Service",
    href: "#",
    description: "This service will available in the future.",
  },
  {
    title: "Soon Service",
    href: "#",
    description: "This service will available in the future.",
  },
  {
    title: "Soon Service",
    href: "#",
    description: "This service will available in the future.",
  },
  {
    title: "Soon Service",
    href: "#",
    description: "This service will available in the future.",
  },
  {
    title: "Soon Service",
    href: "#",
    description: "This service will available in the future.",
  },
  {
    title: "Soon Service",
    href: "#",
    description: "This service will available in the future.",
  },
  {
    title: "Soon Service",
    href: "#",
    description: "This service will available in the future.",
  },
];

const ConvertMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent">Converter</NavigationMenuTrigger>

      <NavigationMenuContent className="bg-slate-800 border-slate-400">
        <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {convertItems.map((component, i) => (
            <ListItem
              key={`menu-${i}`}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>

    </NavigationMenuItem>
  );
};

function ListItem({
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
          <p className="text-amber-100 text-xs leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
