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
  /** 예시 UI용 표시 시각. 실제 API 연동 전엔 실시간처럼 표현하지 않음 */
  sampleTimeLabel: string;
  image: string;
};

export type ThemeItem = {
  id: string;
  label: string;
  description: string;
  href: string;
  tone: "pink" | "orange" | "violet" | "indigo";
};

export const FILTER_CHIPS = [
  { id: "weekend", label: "이번 주말" },
  { id: "today", label: "오늘" },
  { id: "free", label: "무료 행사" },
  { id: "region", label: "지역별", hasMenu: true },
] as const;

/** 이번 주말 축제 — 예시 카드. 실제 진행 여부와 무관 */
export const weekendFestivals: Festival[] = [
  {
    id: "w1",
    title: "석촌호수 봄빛 축제",
    location: "서울 송파구",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80",
    tags: ["예시", "무료"],
  },
  {
    id: "w2",
    title: "한강 문화 한마당",
    location: "서울 영등포구",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    tags: ["예시"],
  },
  {
    id: "w3",
    title: "남산 야간 산책 페스티벌",
    location: "서울 중구",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    tags: ["예시", "야간"],
  },
  {
    id: "w4",
    title: "부산 해변 뮤직 페스타",
    location: "부산 해운대구",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    tags: ["예시"],
  },
  {
    id: "w5",
    title: "제주 올레 푸드 마켓",
    location: "제주 제주시",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    tags: ["예시", "무료"],
  },
  {
    id: "w6",
    title: "강릉 커피 거리 축제",
    location: "강원 강릉시",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    tags: ["예시"],
  },
];

/** 오늘 진행 중 섹션용 예시 목록 — 실제 '오늘' 여부와 무관 */
export const todayFestivals: Festival[] = [
  {
    id: "t1",
    title: "광화문 광장 문화 행사",
    location: "서울 종로구",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=400&q=80",
    tags: ["예시"],
  },
  {
    id: "t2",
    title: "성수 로컬 마켓 데이",
    location: "서울 성동구",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80",
    tags: ["예시", "무료"],
  },
  {
    id: "t3",
    title: "인천 차이나타운 거리 공연",
    location: "인천 중구",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=400&q=80",
    tags: ["예시"],
  },
  {
    id: "t4",
    title: "판교 테크 오픈데이",
    location: "경기 성남시",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
    tags: ["예시"],
  },
  {
    id: "t5",
    title: "해운대 선셋 버스킹",
    location: "부산 해운대구",
    dateRange: "일정 예시",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=80",
    tags: ["예시", "야간"],
  },
];

/** 서울시 주요 관광특구·대표 장소명 예시 (혼잡도 수치는 샘플) */
export const congestionPlaces: CongestionPlace[] = [
  {
    id: "seongsu",
    name: "성수카페거리",
    level: "붐빔",
    sampleTimeLabel: "예시 시각",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "hongdae",
    name: "홍대 관광특구",
    level: "보통",
    sampleTimeLabel: "예시 시각",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "yeouido",
    name: "여의도",
    level: "여유",
    sampleTimeLabel: "예시 시각",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "jamsil",
    name: "잠실 관광특구",
    level: "보통",
    sampleTimeLabel: "예시 시각",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "itaewon",
    name: "이태원 관광특구",
    level: "여유",
    sampleTimeLabel: "예시 시각",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "gangnam",
    name: "강남 관광특구",
    level: "붐빔",
    sampleTimeLabel: "예시 시각",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=200&q=80",
  },
];

export const festivalThemes: ThemeItem[] = [
  {
    id: "nature",
    label: "꽃·자연",
    description: "야외·자연 테마",
    href: "/festivals?theme=nature",
    tone: "pink",
  },
  {
    id: "food",
    label: "음식·맛집",
    description: "푸드·마켓",
    href: "/festivals?theme=food",
    tone: "orange",
  },
  {
    id: "culture",
    label: "문화·예술",
    description: "공연·전시",
    href: "/festivals?theme=culture",
    tone: "violet",
  },
  {
    id: "night",
    label: "야간 행사",
    description: "밤 행사",
    href: "/festivals?theme=night",
    tone: "indigo",
  },
];
