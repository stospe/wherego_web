import { Suspense } from "react";
import { Header } from "@/components/header";

type CrowdAreaPageProps = {
  params: Promise<{ area: string }>;
};

async function AreaContent({ params }: CrowdAreaPageProps) {
  const { area } = await params;

  return (
    <>
      <p className="mt-2 text-[14px] text-secondary">
        선택한 지역: {decodeURIComponent(area)}
      </p>
      <p className="mt-1 text-[13px] text-secondary">
        상세 UI는 이후 단계에서 구현합니다.
      </p>
    </>
  );
}

export default function CrowdAreaPage(props: CrowdAreaPageProps) {
  return (
    <div>
      <Header />
      <div className="mx-auto w-full max-w-6xl px-4 pt-6 md:px-8">
        <h1 className="text-[22px] font-bold text-text md:text-[28px]">
          지역 상세
        </h1>
        <Suspense
          fallback={
            <p className="mt-2 text-[14px] text-secondary">불러오는 중…</p>
          }
        >
          <AreaContent {...props} />
        </Suspense>
      </div>
    </div>
  );
}
