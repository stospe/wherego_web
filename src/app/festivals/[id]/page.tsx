import { Suspense } from "react";
import { Header } from "@/components/header";

type FestivalDetailPageProps = {
  params: Promise<{ id: string }>;
};

async function DetailContent({ params }: FestivalDetailPageProps) {
  const { id } = await params;

  return (
    <p className="mt-2 text-[14px] text-secondary">
      선택한 행사 ID: {decodeURIComponent(id)} · 상세 UI는 이후 단계에서 구현합니다.
    </p>
  );
}

export default function FestivalDetailPage(props: FestivalDetailPageProps) {
  return (
    <div>
      <Header />
      <div className="mx-auto w-full max-w-6xl px-4 pt-6 md:px-8">
        <h1 className="text-[22px] font-bold text-text md:text-[28px]">
          축제 상세
        </h1>
        <Suspense
          fallback={
            <p className="mt-2 text-[14px] text-secondary">불러오는 중…</p>
          }
        >
          <DetailContent {...props} />
        </Suspense>
      </div>
    </div>
  );
}
