"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "홈" },
  { href: "/festivals", label: "축제" },
  { href: "/map", label: "지도" },
  { href: "/crowd", label: "혼잡도" },
] as const;

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 md:flex">
      {tabs.map(({ href, label }) => {
        const active =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={href}
            href={href}
            className={`inline-flex h-9 items-center px-3 text-[15px] font-semibold transition-colors ${
              active ? "text-primary" : "text-secondary hover:text-text"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
