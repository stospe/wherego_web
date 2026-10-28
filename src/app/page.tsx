import { Header } from "@/components/header";
import { SearchBar } from "@/components/search-bar";
import { FilterChips } from "@/components/filter-chips";
import { SectionHeader } from "@/components/section-header";
import { FestivalCard } from "@/components/festival-card";
import { CongestionList } from "@/components/congestion-list";
import { MapBanner } from "@/components/map-banner";
import { congestionPlaces, featuredFestivals } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 pb-6">
      <Header />

      <div className="space-y-3">
        <SearchBar />
        <FilterChips />
      </div>

      <section>
        <SectionHeader title="추천 축제" href="/festivals" />
        <div className="no-scrollbar flex gap-3 overflow-x-auto px-4">
          {featuredFestivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </div>
        <p className="mt-2 px-4 text-[11px] text-secondary">
          예시 데이터 · 실제 API 연결 예정
        </p>
      </section>

      <section>
        <SectionHeader title="실시간 혼잡도" href="/crowd" />
        <CongestionList places={congestionPlaces} />
        <p className="mt-2 px-4 text-[11px] text-secondary">
          서울시 제공 혼잡도 등급 예시 · 실제 데이터 아님
        </p>
      </section>

      <MapBanner />
    </div>
  );
}
