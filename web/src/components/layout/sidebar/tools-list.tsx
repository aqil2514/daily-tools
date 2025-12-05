"use client";

import { sidebarSections } from "@/features/tools/registry";
import Link from "next/link";
import { usePathname } from "@/i18n/navigation";

export function ToolsList() {
  const pathname = usePathname();

  return (
    <div className="py-3 space-y-6">
      <p className="text-lg underline font-semibold text-slate-700">
        Tools List
      </p>

      {sidebarSections.map((list, i) => (
        <div key={`sidebar-tools-${i + 1}`} className="space-y-3">
          <p className="text-sm font-semibold text-slate-700 tracking-wide">
            {list.sectionTitle}
          </p>

          <ul className="space-y-1.5">
            {list.sectionItem.map((item, idx) => {
              const isActive = pathname === item.href;

              return (
                <li key={`list-${list.sectionTitle}-${idx + 1}`}>
                  <Link
                    href={item.href}
                    className={`
                      block px-2 py-1 rounded-md text-sm transition
                      ${isActive
                        ? "bg-slate-200 text-slate-900 font-semibold border-l-4 border-slate-500"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }
                    `}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
