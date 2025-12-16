// src/features/search/components/SearchResultItem.tsx
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { SearchableTool } from "../types";

interface Props {
  tool: SearchableTool;
  active?: boolean;
  onMouseEnter?: () => void;
  onSelect?: () => void;
  innerRef?: (el: HTMLAnchorElement | null) => void;
}

export function SearchResultItem({
  tool,
  active,
  onMouseEnter,
  onSelect,
  innerRef,
}: Props) {
  return (
    <Link
      ref={innerRef}
      href={tool.href}
      onClick={onSelect}
      onMouseEnter={onMouseEnter}
      className={cn(
        "block rounded-md px-3 py-2 transition",
        active ? "bg-muted" : "hover:bg-muted"
      )}
    >
      <div className="text-sm font-medium">{tool.title}</div>
      {tool.description && (
        <div className="text-xs text-muted-foreground line-clamp-2">
          {tool.description}
        </div>
      )}
    </Link>
  );
}
