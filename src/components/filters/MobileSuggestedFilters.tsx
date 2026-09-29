const suggestedFilters = [
  "تحویل سریع امروز",
  "پشتیبانی 5G",
  "256GB حافظه",
  "8GB رم",
  "512GB حافظه",
  "12GB رم",
  "مشکی",
  "سفید",
];

export default function MobileSuggestedFilters() {
  return (
    <div className="bg-white lg:hidden">
      <div className="flex scrollbar-none gap-2 overflow-x-auto px-3 py-2 [&::-webkit-scrollbar]:hidden">
        <div className="relative shrink-0">
          <span className="absolute -top-2 left-2 rounded-full bg-rose-500 px-2 text-[10px] text-white">
            جدید
          </span>

          <button className="h-8 shrink-0 rounded-full border border-neutral-200 px-3 text-xs">
            تحویل ۳ ساعته
          </button>
        </div>

        {suggestedFilters.map((item) => (
          <button
            key={item}
            className="h-8 shrink-0 rounded-full border border-neutral-200 px-3 text-xs"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
