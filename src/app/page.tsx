import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SearchBar } from "@/components/search-bar";
import { FilterChips } from "@/components/filter-chips";
import { SectionHeader } from "@/components/section-header";
import { FestivalCard } from "@/components/festival-card";
import { CongestionGrid } from "@/components/congestion-grid";
import { TodayEventList } from "@/components/today-event-list";
import { ThemeGrid } from "@/components/theme-grid";
import { MapBanner } from "@/components/map-banner";
import {
  congestionPlaces,
  festivalThemes,
  todayFestivals,
  weekendFestivals,
} from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="flex flex-col pb-6">
      <Header />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-7 px-4 pt-4 md:gap-10 md:px-8 md:pt-6">
        <div className="space-y-3">
          <HeroSection />
          <SearchBar />
          <FilterChips />
        </div>

        <section>
          <SectionHeader title="이번 주말 축제" href="/festivals" />
          <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0">
            {weekendFestivals.map((festival) => (
              <FestivalCard key={festival.id} festival={festival} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="서울 실시간 혼잡도" href="/crowd" />
          <CongestionGrid places={congestionPlaces} />
        </section>

        <section>
          <SectionHeader
            title="오늘 열리는 행사"
            href="/festivals?when=today"
          />
          <TodayEventList events={todayFestivals} />
        </section>

        <section>
          <SectionHeader title="테마별 축제 탐색" />
          <ThemeGrid themes={festivalThemes} />
        </section>

        <MapBanner />
      </div>
    </div>
  );
}
