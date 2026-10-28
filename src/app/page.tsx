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

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-7 px-4 pt-4 md:gap-10 md:px-8 md:pt-6">
        <HeroSection />

        <section>
          <SectionHeader
            title="이번 주말 축제"
            description="가로로 넘겨보며 관심 행사를 골라보세요 · 예시 데이터"
            href="/festivals"
          />
          <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 lg:grid-cols-3">
            {weekendFestivals.map((festival) => (
              <FestivalCard key={festival.id} festival={festival} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            title="서울 실시간 혼잡도"
            description="서울시 주요 장소 기준 · 등급은 예시이며 실제 수치가 아닙니다"
            href="/crowd"
            linkLabel="전체보기"
          />
          <CongestionGrid places={congestionPlaces} />
        </section>

        <section>
          <SectionHeader
            title="오늘 진행 중인 행사"
            description="목록형으로 빠르게 훑어보는 예시 행사"
            href="/festivals?when=today"
          />
          <TodayEventList events={todayFestivals} />
        </section>

        <section>
          <SectionHeader
            title="테마별 축제 탐색"
            description="검증 가능한 분류로만 연결할 예정 · 현재는 진입 경로 예시"
          />
          <ThemeGrid themes={festivalThemes} />
        </section>

        <MapBanner />
      </div>
    </div>
  );
}
