import { cn } from "@/lib/utils";
import Image from "next/image";

interface Items<TValue = string> {
  image: string;
  value: TValue;
}

interface IconSelectorProps<TValue = string> {
  items: Items<TValue>[];
  iconName: TValue;
  setIconName: (iconName: TValue) => void;
  setIconLogo: (iconLogo: string) => void;
}

export function IconSelector<TValue = string>({
  items,
  iconName,
  setIconLogo,
  setIconName,
}: IconSelectorProps<TValue>) {
  return (
    <div className="flex gap-4 justify-center">
      {items.map((item) => {
        const isSelected = item.value === iconName;
        return (
          <div
            key={String(item.value)}
            className={cn(
              "rounded-lg group hover:bg-blue-300 transition duration-100 cursor-pointer",
              isSelected && "bg-blue-300 "
            )}
            onClick={() => {
              setIconName(item.value);
              setIconLogo(item.image);
            }}
          >
            <Image
              width={48}
              height={48}
              src={item.image}
              alt={String(item.value)}
              className={cn(
                "group-hover:scale-75 duration-100 transition",
                isSelected && "scale-75"
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
