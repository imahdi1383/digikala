const sorts = [
  "مرتبط‌ترین",
  "پربازدیدترین",
  "جدیدترین",
  "پرفروش‌ترین",
  "ارزان‌ترین",
  "گران‌ترین",
  "سریع‌ترین ارسال",
  "پیشنهاد خریداران",
  "منتخب",
];

export default function SortBar() {
  return (
    <div className="scrollbar-sm hidden h-14 items-center overflow-x-auto border-b border-neutral-200 lg:flex">
      <span className="ml-4 shrink-0 text-sm font-bold">☷ مرتب‌سازی:</span>

      <div className="flex items-center gap-5 text-xs whitespace-nowrap text-neutral-500">
        {sorts.map((sort, index) => (
          <button
            key={sort}
            className={
              index === sorts.length - 1
                ? "text-rose-500"
                : "hover:text-neutral-900"
            }
          >
            {sort}
          </button>
        ))}
      </div>

      <span className="ms-auto w-0 shrink-0 ps-5 text-xs text-neutral-400 lg:w-auto">
        ۹,۹۷۶ کالا
      </span>
    </div>
  );
}
