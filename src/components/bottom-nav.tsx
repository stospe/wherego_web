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

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-nav-bg/95 backdrop-blur-md md:hidden">
      <div className="mx-auto flex h-[64px] max-w-lg items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              className={`flex min-w-[64px] flex-col items-center justify-center gap-1 text-[11px] font-semibold ${
                active ? "text-primary" : "text-secondary"
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.4 : 2} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
