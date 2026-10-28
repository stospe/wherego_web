import Link from "next/link";
import { Flower2, MoonStar, Palette, Utensils } from "lucide-react";
import type { ThemeItem } from "@/lib/mock-data";

const toneClass: Record<
  ThemeItem["tone"],
  { card: string; iconWrap: string; icon: string }
> = {
  pink: {
    card: "border-[#f1dfe4] bg-[#fffafb] dark:border-[#3b2a31] dark:bg-[#21191d]",
    iconWrap: "bg-[#fbe8ee] dark:bg-[#3b242d]",
    icon: "text-[#c94f73] dark:text-[#f28baa]",
  },
  orange: {
    card: "border-[#eee5d5] bg-[#fffdf8] dark:border-[#3c3324] dark:bg-[#211e18]",
    iconWrap: "bg-[#f8eedc] dark:bg-[#3a2e1d]",
    icon: "text-[#b7791f] dark:text-[#e8b65e]",
  },
  violet: {
    card: "border-[#e5e1f1] bg-[#fcfbff] dark:border-[#332d43] dark:bg-[#1d1a24]",
    iconWrap: "bg-[#eeeafb] dark:bg-[#302742]",
    icon: "text-[#7056b8] dark:text-[#ad97ea]",
  },
  indigo: {
    card: "border-[#dfe8f2] bg-[#f9fcff] dark:border-[#293747] dark:bg-[#171e26]",
    iconWrap: "bg-[#e5f0fa] dark:bg-[#223347]",
    icon: "text-[#3478a8] dark:text-[#78b7e1]",
  },
};

const icons = {
  nature: Flower2,
  food: Utensils,
  culture: Palette,
  night: MoonStar,
} as const;

export function ThemeGrid({ themes }: { themes: ThemeItem[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {themes.map((theme) => {
        const Icon = icons[theme.id as keyof typeof icons] ?? Flower2;
        const tone = toneClass[theme.tone];

        return (
          <li key={theme.id}>
            <Link
              href={theme.href}
              className={`flex min-h-[96px] flex-col justify-between rounded-2xl border p-4 ${tone.card}`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${tone.iconWrap}`}
              >
                <Icon size={18} strokeWidth={2} className={tone.icon} />
              </span>
              <div>
                <p className="text-[14px] font-semibold text-text md:text-[16px]">
                  {theme.label}
                </p>
                <p className="mt-1 text-[12px] font-normal text-secondary">
                  {theme.description}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
