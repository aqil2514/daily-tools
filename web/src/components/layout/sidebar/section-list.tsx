import { usePathname, Link } from "@/i18n/navigation";

interface SetionListItem {
  label: string;
  link: string;
}

const sectionItems: SetionListItem[] = [
  { label: "Home", link: "/" },
  {
    label: "Tools",
    link: "/tools",
  },
];

export function SectionList() {
  const pathname = usePathname();
  return (
    <div className="py-3 space-y-6">
      <p className="text-lg underline font-semibold text-slate-700">
        Section List
      </p>

      <ul className="space-y-1.5">
        {sectionItems.map((item, i) => {
          const isActive = pathname === item.link;
          return (
            <li key={i}>
              <Link
                href={item.link}
                className={`
                      block px-2 py-1 rounded-md text-sm transition
                      ${
                        isActive
                          ? "bg-slate-200 text-slate-900 font-semibold border-l-4 border-slate-500"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }
                    `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
