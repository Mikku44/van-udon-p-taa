import { FaLine, FaFacebookMessenger } from "react-icons/fa";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 sm:bottom-8 sm:right-8">
      {/* LINE Button */}
      <a
        href="https://line.me/ti/p/~ta303064"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#06C755] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group relative"
        aria-label="Contact via LINE"
      >
        <span className="absolute right-full mr-3 bg-white text-stone-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-stone-100">
          คุยผ่าน LINE
        </span>
        <FaLine size={30} />
      </a>

      {/* Facebook Button */}
      <a
        href="https://web.facebook.com/profile.php?id=100094713742678"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#0084FF] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group relative"
        aria-label="Contact via Facebook"
      >
        <span className="absolute right-full mr-3 bg-white text-stone-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-stone-100">
          ทักแชท Facebook
        </span>
        <FaFacebookMessenger size={28} />
      </a>
    </div>
  );
}
