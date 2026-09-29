import { ChevronDown } from "../ui/Icons";

const filters = [
  "محدوده قیمت",
  "برند",
  "رنگ",
  "حافظه داخلی",
  "مقدار RAM",
  "شبکه‌های مخابراتی",
  "رزولوشن دوربین اصلی",
  "دسته بندی",
  "محدوده ظرفیت باتری",
  "سیستم عامل",
  "نوع گوشی موبایل",
];

export default function FiltersSidebar() {
  return (
    <aside className="sticky top-22 hidden h-[calc(100vh-112px)] overflow-y-auto rounded-xl border border-neutral-200 bg-white px-6 lg:block">
      <h2 className="py-6 text-xl font-bold">فیلترها</h2>

      <section className="border-b border-neutral-200 pb-5">
        <button className="flex w-full items-center justify-between py-2 text-base font-bold">
          تحویل سریع
          <ChevronDown />
        </button>

        <div className="mt-2 flex gap-2">
          <span className="rounded bg-blue-600 px-2 py-1 text-xs font-bold text-white">
            سریع امروز
          </span>

          <span className="rounded bg-yellow-400 px-2 py-1 text-xs font-bold text-neutral-900">
            ۳ ساعته
          </span>
        </div>
      </section>

      {filters.map((filter) => (
        <button
          key={filter}
          className="flex w-full items-center justify-between border-b border-neutral-200 py-6 text-base font-bold text-neutral-700"
        >
          {filter}

          <ChevronDown />
        </button>
      ))}
    </aside>
  );
}
