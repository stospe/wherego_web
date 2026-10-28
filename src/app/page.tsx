import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
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

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pt-4 md:px-8 md:pt-6">
        <HeroSection />

        <section>
          <SectionHeader title="이번 주말 축제" href="/festivals" />
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-6 lg:gap-3 lg:overflow-visible lg:px-0">
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
          <TodayEventList events={todayFestivals.slice(0, 3)} />
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
