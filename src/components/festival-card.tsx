import Image from "next/image";
import { Heart } from "lucide-react";
import type { Festival } from "@/lib/mock-data";

export function FestivalCard({ festival }: { festival: Festival }) {
  return (
    <article className="w-[248px] shrink-0 overflow-hidden rounded-2xl border border-border bg-surface md:w-auto md:min-w-0">
      <div className="relative h-[148px] w-full md:h-[168px]">
        <Image
          src={festival.image}
          alt={festival.title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 25vw, 248px"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {festival.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-semibold text-text"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          aria-label="관심 행사 저장 (준비 중)"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm"
        >
          <Heart size={16} strokeWidth={2.2} />
        </button>
      </div>
      <div className="space-y-1 p-3.5">
        <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-text">
          {festival.title}
        </h3>
        <p className="text-[12px] text-secondary">
          {festival.location} · {festival.dateRange}
        </p>
      </div>
    </article>
  );
}
