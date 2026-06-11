
import { FaLine } from "react-icons/fa";

const nav = [
  ["บริการ", "services"],
  ["รถของเรา", "gallery"],
  ["วิดีโอ", "videos"],
  ["ราคา", "pricing"],
  ["พื้นที่", "coverage"],
  ["FAQ", "faq"],
  ["ติดต่อ", "contact"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-16 lg:h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/logo.webp" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg font-display font-bold tracking-tight text-slate-900">
              รถตู้อุบลนายต๊ะวีไอพี
              <span className="text-accent ml-0.5">VIP</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-10">
            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-medium text-slate-500 hover:text-primary transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://line.me/ti/p/~ta303064"
            target="_blank"
            rel="noreferrer"
            className="bg-[#06C755] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#05a346] shadow-sm transition-all flex items-center gap-2"
          >
            <FaLine className="text-xl" />
            <span>จองผ่าน LINE</span>
          </a>

        </div>
      </div>
    </header>
  );
}