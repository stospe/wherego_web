import Image from "next/image";
import type { Festival } from "@/lib/mock-data";

export function FestivalCard({ festival }: { festival: Festival }) {
  return (
    <article className="w-[260px] shrink-0 overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative h-[150px] w-full">
        <Image
          src={festival.image}
          alt={festival.title}
          fill
          className="object-cover"
          sizes="260px"
        />
        <div className="absolute left-3 top-3 flex gap-1.5">
          {festival.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-text dark:bg-black/70 dark:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-[16px] font-semibold leading-snug text-text">
          {festival.title}
        </h3>
        <p className="text-[13px] text-secondary">
          {festival.location} · {festival.dateRange}
        </p>
      </div>
    </article>
  );
}
