import Link from "next/link";
import { usePathname } from "next/navigation";

export function SectionList() {
  const pathname = usePathname();
  return (
    <div className="py-3 space-y-6">
      <p className="text-lg underline font-semibold text-slate-700">
        Section List
      </p>

      <ul className="space-y-1.5">
        <li>
          <Link
            href={"/"}
            className={`
                      block px-2 py-1 rounded-md text-sm transition
                      ${
                        pathname === "/"
                          ? "bg-slate-200 text-slate-900 font-semibold border-l-4 border-slate-500"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }
                    `}
          >
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
