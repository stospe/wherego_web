import { Header } from "@/components/header";
import { SearchBar } from "@/components/search-bar";
import { FilterChips } from "@/components/filter-chips";
import { SectionHeader } from "@/components/section-header";
import { FestivalCard } from "@/components/festival-card";
import { CongestionList } from "@/components/congestion-list";
import { MapBanner } from "@/components/map-banner";
import { congestionPlaces, featuredFestivals } from "@/lib/mock-data";

export default function HomePage() {
  const mobileCongestion = congestionPlaces.slice(0, 3);

  return (
    <div className="flex flex-col pb-6">
      <Header />

      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <section className="mt-5 space-y-3 md:mt-8 md:rounded-3xl md:border md:border-border md:bg-surface md:p-8">
          <div className="hidden md:block">
            <p className="text-[28px] font-bold leading-tight tracking-tight text-text">
              이번 주말, 어디 갈까?
            </p>
            <p className="mt-2 text-[15px] text-secondary">
              축제부터 실시간 혼잡도까지 한눈에
            </p>
          </div>

          <div className="space-y-3 md:mt-5 md:max-w-2xl">
            <SearchBar />
            <FilterChips />
          </div>
        </section>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)] lg:items-start lg:gap-10">
          <section>
            <SectionHeader
              title="추천 축제"
              href="/festivals"
              className="md:mb-4"
            />
            <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0">
              {featuredFestivals.map((festival) => (
                <FestivalCard key={festival.id} festival={festival} />
              ))}
            </div>
            <p className="mt-2 text-[11px] text-secondary md:mt-3">
              예시 데이터 · 실제 API 연결 예정
            </p>
          </section>

          <section>
            <SectionHeader
              title="실시간 혼잡도"
              href="/crowd"
              className="md:mb-4"
            />
            <div className="lg:hidden">
              <CongestionList places={mobileCongestion} columns="one" />
            </div>
            <div className="hidden lg:block">
              <CongestionList places={congestionPlaces} columns="one" />
            </div>
            <p className="mt-2 text-[11px] text-secondary md:mt-3">
              서울시 제공 혼잡도 등급 예시 · 실제 데이터 아님
            </p>
          </section>
        </div>

        <div className="mt-6 md:mt-8">
          <MapBanner />
        </div>
      </div>
    </div>
  );
}
