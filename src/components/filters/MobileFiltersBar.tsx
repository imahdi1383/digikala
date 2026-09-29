import { ChevronDown } from "../ui/Icons";

export default function MobileFiltersBar() {
  return (
    <div className="sticky top-28 z-40 bg-white lg:hidden">
      <div className="flex scrollbar-none items-center gap-2 overflow-x-auto px-3 py-2 font-extralight [&::-webkit-scrollbar]:hidden">
        <button className="flex h-8 shrink-0 flex-row-reverse items-center gap-2 rounded-full border border-neutral-200 px-3 text-xs">
          منتخب
          <span>☷</span>
        </button>

        <button className="flex h-8 shrink-0 flex-row-reverse items-center gap-2 rounded-full border border-neutral-200 px-3 text-xs">
          فیلتر
          <span>☷</span>
        </button>

        <button className="h-8 shrink-0 rounded-full border border-neutral-200 px-3 text-xs">
          جستجوی توصیفی
        </button>

        <button className="flex h-8 shrink-0 items-center gap-2 rounded-full border border-neutral-200 px-3 text-xs">
          محدوده قیمت
          <ChevronDown className="w-3" />
        </button>

        <button className="flex h-8 shrink-0 items-center gap-2 rounded-full border border-neutral-200 px-3 text-xs">
          برند
          <ChevronDown className="w-3" />
        </button>

        <button className="flex h-8 shrink-0 items-center gap-2 rounded-full border border-neutral-200 px-3 text-xs">
          رنگ
          <ChevronDown className="w-3" />
        </button>

        <button className="flex h-8 shrink-0 items-center gap-2 rounded-full border border-neutral-200 px-3 text-xs">
          حافظه داخلی
          <ChevronDown className="w-3" />
        </button>
      </div>
    </div>
  );
}
