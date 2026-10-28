import Link from "next/link";
import { Flower2, MoonStar, Palette, Utensils } from "lucide-react";
import type { ThemeItem } from "@/lib/mock-data";

const toneClass: Record<ThemeItem["tone"], string> = {
  pink: "bg-[#FFF1F2] text-[#BE123C] dark:bg-[#3f1d28] dark:text-[#fda4af]",
  orange: "bg-[#FFF7ED] text-[#C2410C] dark:bg-[#3f2a14] dark:text-[#fdba74]",
  violet: "bg-[#F5F3FF] text-[#6D28D9] dark:bg-[#2e1f4d] dark:text-[#c4b5fd]",
  indigo: "bg-[#EEF2FF] text-[#3730A3] dark:bg-[#1e2448] dark:text-[#a5b4fc]",
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
        return (
          <li key={theme.id}>
            <Link
              href={theme.href}
              className={`flex min-h-[108px] flex-col justify-between rounded-2xl p-4 transition-opacity hover:opacity-90 ${toneClass[theme.tone]}`}
            >
              <Icon size={22} strokeWidth={2.1} />
              <p className="text-[15px] font-bold">{theme.label}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
