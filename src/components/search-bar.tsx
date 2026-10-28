import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <label className="relative block w-full">
      <span className="sr-only">축제, 지역, 장소 검색</span>
      <Search
        size={18}
        strokeWidth={2}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]"
      />
      <input
        type="search"
        placeholder="축제, 지역, 장소를 검색해 보세요"
        className="h-12 w-full rounded-2xl border border-white/40 bg-white pl-11 pr-4 text-[14px] text-[#0f172a] outline-none placeholder:text-[#64748b] focus:border-primary md:h-14 md:text-[15px]"
      />
    </label>
  );
}
