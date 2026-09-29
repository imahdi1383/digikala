import { useEffect, useRef, useState } from "react";
import {
  SearchIcon,
  BellIcon,
  UserIcon,
  ChevronDown2,
  CartIcon,
  MenuIcon,
  LocationIcon,
} from "../ui/Icons";

export default function Header() {
  const [navOpen, setNavOpen] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const threshold = 20;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 100) {
        setNavOpen(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(delta) < threshold) return;

      if (delta > 0) {
        setNavOpen(false);
      }

      if (delta < 0) {
        setNavOpen(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop */}
      <div
        className={`sticky top-0 right-0 left-0 z-50 hidden overflow-hidden bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-[height] duration-200 lg:block ${
          navOpen ? "h-27" : "h-17"
        }`}
      >
        {/* Top section - always visible */}
        <div className="h-17 bg-white">
          <div className="mx-auto flex h-full w-full max-w-[1676px] items-center px-4">
            <div className="flex w-full items-center">
              {/* Logo */}
              <img
                src="https://www.digikala.com/brand/full-horizontal.svg"
                alt="لوگوی دیجی‌کالا"
                className="ml-5 h-7.5 w-48.75 shrink-0 object-contain"
              />

              {/* Search */}
              <div className="ml-auto flex grow">
                <div className="max-w-full flex-1">
                  <div className="flex h-7.5 w-125 min-w-0 flex-1 grow items-center rounded-full bg-neutral-100 px-4">
                    <div className="flex min-w-0 grow items-center justify-between gap-2">
                      <SearchIcon />

                      <input
                        type="text"
                        placeholder="جستجو"
                        readOnly
                        className="h-10 min-w-0 grow bg-transparent px-2 text-sm font-medium text-neutral-500 outline-none"
                      />

                      <span
                        dir="ltr"
                        className="shrink-0 text-xs text-neutral-400"
                      >
                        Ctrl+K
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex shrink-0 items-center">
                <button className="ml-3 flex h-10 w-10 items-center justify-center">
                  <BellIcon />
                </button>

                <button className="flex items-center p-2">
                  <UserIcon />
                  <ChevronDown2 />
                </button>

                <span className="mx-3 h-6 w-px bg-neutral-200" />

                <button className="relative flex h-10 w-10 items-center justify-center">
                  <CartIcon />

                  <span className="absolute right-0 bottom-0 flex h-4 min-w-4 items-center justify-center rounded bg-rose-500 px-1 text-[10px] font-bold text-white">
                    ۱
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav
          className={`h-10 bg-white transition-all duration-200 ${
            navOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="mx-auto flex h-full w-full max-w-[1676px] items-center justify-between px-4">
            <div className="flex h-full items-center">
              <button className="flex h-full items-center text-sm font-bold whitespace-nowrap text-neutral-700">
                <MenuIcon />
                <span className="mr-1">دسته‌بندی کالاها</span>
              </button>

              <span className="mx-4 h-5 w-px bg-neutral-200" />

              <button className="h-full px-3 text-xs text-neutral-600">
                ٪ شگفت‌انگیزها
              </button>

              <button className="h-full px-3 text-xs text-neutral-600">
                🛒 سوپرمارکت
              </button>

              <button className="h-full px-3 text-xs text-neutral-600">
                ◉ طلا و نقره دیجیتال
              </button>

              <button className="h-full px-3 text-xs text-neutral-600">
                🔥 پرفروش‌ترین‌ها
              </button>

              <button className="h-full px-3 text-xs text-neutral-600">
                ♧ دیجی‌استایل
              </button>

              <button className="h-full px-3 text-xs text-neutral-600">
                در دیجی‌کالا بفروشید!
              </button>
            </div>

            <button className="flex items-center text-xs text-neutral-700">
              <LocationIcon />
              <span className="mr-2">تحویل به خانه</span>
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile */}
      <div className="sticky top-0 z-50 hidden w-full bg-white max-lg:block">
        {/* Super App Tabs */}
        <div className="h-12 w-full bg-white">
          <div className="flex h-full scrollbar-none items-center gap-2 overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden">
            {/* Super app icon */}
            <button className="flex h-7.5 min-w-7.5 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white px-1.5 py-2 text-xs">
              <img
                width="30"
                height="30"
                src="https://dkstatics-public.digikala.com/superapp-file/4f1a58293164d31b1a3cf1ef41f6ba4ba4fa4087_1739791745.png?x-oss-process=image/resize,w_300/quality,q_90"
                alt="سرویس&zwnj;ها"
              />
            </button>

            {/* Active */}
            <button className="h-7.5 min-w-17 shrink-0 rounded-lg bg-rose-600 px-2 py-2 text-xs text-white">
              دیجی‌کالا
            </button>

            {[
              "سوپرمارکت",
              "طلا و نقره",
              "بازار",
              "استایل",
              "اعتبار خرید",
              "گیشه",
              "دارو",
              "هایپرمارکت",
            ].map((item) => (
              <button
                key={item}
                className="h-7.5 min-w-17 shrink-0 rounded-lg border border-neutral-200 bg-white px-1.5 py-2 text-xs text-neutral-800"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="h-16 w-full bg-white px-5 py-2">
          <div className="flex h-full items-center gap-2">
            {/* Back */}
            <button className="flex h-12 w-10 shrink-0 items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Search box */}
            <div className="flex h-12 min-w-0 flex-1 items-center rounded-full border border-neutral-200 bg-[#00000005] px-3">
              <SearchIcon />

              <div className="mr-3 flex items-center gap-1">
                <span className="text-sm font-medium text-neutral-500/70">
                  جستجو در
                </span>

                <img
                  src="https://www.digikala.com/brand/typography.svg"
                  alt="دیجی‌کالا"
                  className="h-4 w-15.25 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
