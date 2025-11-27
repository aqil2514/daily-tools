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

          <ToolsMenu />

        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

const toolsItems: MenuItem[] = [
  {
    title: "Image Converter",
    href: "/tools/image-converter",
    description: "Convert your image from one type to another type.",
  },
  {
    title: "Image Resizer",
    href: "/tools/image-resizer",
    description: "Resize your image.",
  },
  {
    title: "Image Comporessor",
    href: "/tools/image-compressor",
    description: "Compress your image.",
  },
  {
    title: "Image Cropper",
    href: "/tools/image-cropper",
    description: "Crop your Image",
  },
  {
    title: "Image Rotate",
    href: "/tools/image-rotate",
    description: "Rotate your image.",
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

const ToolsMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent">Tools</NavigationMenuTrigger>

      <NavigationMenuContent className="bg-slate-800 border-slate-400">
        <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {toolsItems.map((component, i) => (
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
