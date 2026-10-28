import type { Festival } from "@/lib/mock-data";

export const FESTIVAL_IMAGE_FALLBACK =
  "/images/placeholders/festival-default.svg";

function normalizeTourApiImage(url?: string) {
  if (!url) return undefined;
  return url.replace(/^http:\/\//, "https://");
}

/**
 * TourAPI 이미지 우선순위:
 * 대표 이미지(firstimage) → 추가 이미지 → 썸네일(firstimage2) → 공통 플레이스홀더
 */
export function getFestivalImage(festival: Festival) {
  return (
    normalizeTourApiImage(festival.firstimage) ||
    normalizeTourApiImage(festival.additionalImages?.find(Boolean)) ||
    normalizeTourApiImage(festival.firstimage2) ||
    FESTIVAL_IMAGE_FALLBACK
  );
}

export const REGION_IMAGES = {
  seoul: "/images/regions/seoul.svg",
  gyeonggi: "/images/regions/gyeonggi.svg",
  incheon: "/images/regions/incheon.svg",
  busan: "/images/regions/busan.svg",
  gangwon: "/images/regions/gangwon.svg",
  jeju: "/images/regions/jeju.svg",
} as const;
