import Link from "next/link";
import { Flower2, MoonStar, Palette, Utensils } from "lucide-react";
import type { ThemeItem } from "@/lib/mock-data";

const toneClass: Record<
  ThemeItem["tone"],
  { card: string; iconWrap: string; icon: string }
> = {
  pink: {
    card: "border-border bg-surface hover:border-[#94A3B8]/50",
    iconWrap: "bg-[#F1F5F9] dark:bg-[#1E293B]",
    icon: "text-[#0F766E] dark:text-[#5EEAD4]",
  },
  orange: {
    card: "border-border bg-surface hover:border-[#94A3B8]/50",
    iconWrap: "bg-[#F1F5F9] dark:bg-[#1E293B]",
    icon: "text-[#B45309] dark:text-[#FBBF24]",
  },
  violet: {
    card: "border-border bg-surface hover:border-[#94A3B8]/50",
    iconWrap: "bg-[#F1F5F9] dark:bg-[#1E293B]",
    icon: "text-[#1D4ED8] dark:text-[#93C5FD]",
  },
  indigo: {
    card: "border-border bg-surface hover:border-[#94A3B8]/50",
    iconWrap: "bg-[#F1F5F9] dark:bg-[#1E293B]",
    icon: "text-[#334155] dark:text-[#CBD5E1]",
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
              className={`flex min-h-[104px] flex-col justify-between rounded-2xl border p-4 transition-colors ${tone.card}`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${tone.iconWrap}`}
              >
                <Icon size={18} strokeWidth={2} className={tone.icon} />
              </span>
              <p className="text-[14px] font-semibold text-text md:text-[15px]">
                {theme.label}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
