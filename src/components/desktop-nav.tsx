"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Home, Map, Users } from "lucide-react";

const tabs = [
  { href: "/", label: "홈", icon: Home },
  { href: "/festivals", label: "축제", icon: CalendarDays },
  { href: "/map", label: "지도", icon: Map },
  { href: "/crowd", label: "혼잡도", icon: Users },
] as const;

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 md:flex">
      {tabs.map(({ href, label, icon: Icon }) => {
        const active =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={href}
            href={href}
            className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors ${
              active
                ? "bg-primary-soft text-primary"
                : "text-secondary hover:bg-surface hover:text-text"
            }`}
          >
            <Icon size={16} strokeWidth={active ? 2.4 : 2} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
