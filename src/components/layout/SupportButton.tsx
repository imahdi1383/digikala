import { SupportIcon } from "../ui/Icons";

export default function SupportButton() {
  return (
    <button className="fixed bottom-20 left-5 z-40 flex h-12 items-center gap-3 rounded-full bg-linear-to-br from-purple-500 via-indigo-500 to-blue-500 px-3 text-sm font-bold text-white shadow-lg lg:bottom-8">
      <SupportIcon />
      <span className="inline">پشتیبانی</span>
    </button>
  );
}
