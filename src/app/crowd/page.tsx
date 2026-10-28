import { Header } from "@/components/header";
import { CongestionGrid } from "@/components/congestion-grid";
import { congestionPlaces } from "@/lib/mock-data";

export default function CrowdPage() {
  return (
    <div>
      <Header />
      <div className="mx-auto w-full max-w-6xl px-4 pt-6 md:px-8">
        <h1 className="text-[22px] font-bold text-text md:text-[28px]">
          서울 실시간 혼잡도
        </h1>
        <p className="mt-2 text-[14px] text-secondary">
          주요 장소 미리보기 · 표시 등급은 예시 데이터입니다.
        </p>
        <div className="mt-6 max-w-3xl">
          <CongestionGrid places={congestionPlaces} />
        </div>
      </div>
    </div>
  );
}
