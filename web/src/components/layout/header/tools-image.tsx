import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./list-item";
import { MenuItem } from ".";

const toolsItems: MenuItem[] = [
  {
    title: "Image Converter",
    href: "/tools/image-converter",
    description:
      "Convert images between formats like JPG, PNG, WebP, and more.",
  },
  {
    title: "Image Resizer",
    href: "/tools/image-resizer",
    description: "Resize your images while maintaining optimal clarity.",
  },
  {
    title: "Image Compressor",
    href: "/tools/image-compressor",
    description: "Reduce image file size without noticeable quality loss.",
  },
  {
    title: "Image Cropper",
    href: "/tools/image-cropper",
    description: "Crop your images with precision and full control.",
  },
  {
    title: "Image Rotate",
    href: "/tools/image-rotate",
    description: "Rotate images instantly to fix orientation issues.",
  },
  {
    title: "Image to PDF",
    href: "/tools/image-to-pdf",
    description: "Convert one or multiple images into a clean PDF document.",
  },
];

export function ToolsImage() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent">
        Image Tools
      </NavigationMenuTrigger>

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
}
