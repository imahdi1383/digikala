export function MobileBottomNav() {
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 grid h-16 grid-cols-5 border-t border-neutral-200 bg-white lg:hidden">
      {["خانه", "دسته‌بندی", "سبد خرید", "پرس‌وجو", "دیجی‌کالای من"].map(
        (item) => (
          <button
            key={item}
            className="flex flex-col items-center justify-center gap-1 text-[10px] text-neutral-500"
          >
            <span className="text-xl">○</span>
            {item}
          </button>
        ),
      )}
    </nav>
  );
}
