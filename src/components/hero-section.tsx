import Image from "next/image";
import { SearchBar } from "@/components/search-bar";
import { FilterChips } from "@/components/filter-chips";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border">
      <Image
        src="https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=1600&q=85"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="(min-width: 768px) 1152px, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 dark:from-[#0b0f19]/95 dark:via-[#0b0f19]/80 dark:to-[#0b0f19]/30" />

      <div className="relative flex min-h-[220px] flex-col justify-center p-4 md:min-h-[280px] md:p-8">
        <div className="max-w-2xl">
          <h2 className="text-[24px] font-bold leading-tight text-text">
            이번 주말, <span className="text-primary">어디 갈까?</span>
          </h2>
          <p className="mt-2 text-[14px] font-normal text-secondary">
            전국 축제부터 실시간 혼잡도까지 한눈에
          </p>

          <div className="mt-6 max-w-xl space-y-3">
            <SearchBar />
            <FilterChips />
          </div>
        </div>
      </div>
    </section>
  );
}
