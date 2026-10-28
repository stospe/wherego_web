import Image from "next/image";
import { SearchBar } from "@/components/search-bar";
import { FilterChips } from "@/components/filter-chips";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-surface">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=80"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="(min-width: 768px) 1152px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
      </div>

      <div className="relative space-y-4 px-4 py-6 md:px-8 md:py-10">
        <div className="max-w-xl text-white">
          <h2 className="text-[24px] font-bold leading-tight tracking-tight md:text-[32px]">
            이번 주말, 어디 갈까?
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-white/85 md:text-[15px]">
            전국 축제부터 실시간 혼잡도까지 한눈에
          </p>
        </div>

        <div className="space-y-3 md:max-w-2xl">
          <SearchBar />
          <FilterChips />
        </div>
      </div>
    </section>
  );
}
