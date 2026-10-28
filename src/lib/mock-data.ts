export type CongestionLevel = "붐빔" | "보통" | "여유";

export type Festival = {
  id: string;
  title: string;
  location: string;
  dateRange: string;
  image: string;
  tags: string[];
};

export type CongestionPlace = {
  id: string;
  name: string;
  level: CongestionLevel;
  updatedAt: string;
};

export const FILTER_CHIPS = ["이번 주말", "오늘", "무료 행사", "서울"] as const;

export const featuredFestivals: Festival[] = [
  {
    id: "1",
    title: "석촌호수 벚꽃축제",
    location: "서울 송파구",
    dateRange: "04.05 - 04.13",
    image:
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80",
    tags: ["진행중", "무료"],
  },
  {
    id: "2",
    title: "여의도 봄꽃축제",
    location: "서울 영등포구",
    dateRange: "04.01 - 04.12",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    tags: ["진행중"],
  },
];

export const congestionPlaces: CongestionPlace[] = [
  {
    id: "seongsu",
    name: "성수동 카페거리",
    level: "붐빔",
    updatedAt: "방금 전",
  },
  {
    id: "hongdae",
    name: "홍대 관광특구",
    level: "보통",
    updatedAt: "3분 전",
  },
  {
    id: "yeouido",
    name: "여의도 한강공원",
    level: "여유",
    updatedAt: "5분 전",
  },
];
