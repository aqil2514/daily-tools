// src/features/search/components/SearchResultGroup.tsx
import { SearchableTool } from "../types";
import { SearchResultItem } from "./SearchResultItem";

interface Props {
  category: string;
  tools: SearchableTool[];
  activeIndex: number;
  startIndex: number;
  onHover: (index: number) => void;
  onSelect: () => void;
  setItemRef: (index: number, el: HTMLAnchorElement | null) => void;
}

export function SearchResultGroup({
  category,
  tools,
  activeIndex,
  startIndex,
  onHover,
  onSelect,
  setItemRef,
}: Props) {
  return (
    <div className="space-y-1">
      <div className="px-3 pt-4 text-xs font-semibold uppercase text-muted-foreground">
        {category}
      </div>

      <div className="space-y-1">
        {tools.map((tool, i) => {
          const index = startIndex + i;

          return (
            <SearchResultItem
              key={tool.name}
              tool={tool}
              active={index === activeIndex}
              onMouseEnter={() => onHover(index)}
              onSelect={onSelect}
              innerRef={(el) => setItemRef(index, el)}
            />
          );
        })}
      </div>
    </div>
  );
}
