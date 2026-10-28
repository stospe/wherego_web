import Image from "next/image";
import { Heart } from "lucide-react";
import type { Festival } from "@/lib/mock-data";

const tagClass: Record<string, string> = {
  진행중: "bg-[#EF4444] text-white",
  무료: "bg-primary text-white",
};

export function FestivalCard({ festival }: { festival: Festival }) {
  const tags = festival.tags.filter((tag) => tag in tagClass);

  return (
    <article className="w-[248px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-surface lg:w-auto">
      <div className="relative h-[140px] w-full lg:h-[120px]">
        <Image
          src={festival.image}
          alt={festival.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 16vw, 248px"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-1 text-[12px] font-semibold leading-none ${tagClass[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          aria-label="관심 행사"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#334155]"
        >
          <Heart size={16} strokeWidth={2} />
        </button>
      </div>
      <div className="space-y-1 p-4">
        <h3 className="line-clamp-2 text-[16px] font-semibold leading-snug text-text">
          {festival.title}
        </h3>
        <p className="truncate text-[12px] font-normal text-secondary">
          {festival.location}
        </p>
        <p className="truncate text-[12px] font-normal text-secondary">
          {festival.dateRange}
        </p>
      </div>
    </article>
  );
}
