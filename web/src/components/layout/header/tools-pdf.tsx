import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./list-item";
import { MenuItem } from ".";

const toolsItems: MenuItem[] = [
  {
    title: "PDF Merge",
    href: "/tools/pdf-merge",
    description: "Combine multiple PDF files into a single organized document.",
  },
  {
    title: "PDF Split",
    href: "/tools/pdf-split",
    description: "Split PDF pages into separate files with full flexibility.",
  },
  {
    title: "PDF Compress",
    href: "/tools/pdf-compress",
    description: "Compress PDF documents to reduce file size efficiently.",
  },
];

export function ToolsPDF() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent">
        PDF Tools
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
