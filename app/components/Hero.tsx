import { useState, useEffect } from "react";

type Props = {
  images: string[];
};

export default function Hero({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-20 lg:py-32 bg-bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              อุบลราชธานี • พร้อมคนขับ
            </span>

            <h1 className="mt-8 text-6xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight text-slate-900">
              เช่ารถตู้อุบล<br />
              <span className="text-primary italic">พรีเมียม</span>
            </h1>

            <p className="mt-8 text-xl text-slate-500 leading-relaxed max-w-xl">
              บริการรถตู้ VIP รุ่นใหม่มากกว่า 100 คัน 
              เน้นความสะอาด ปลอดภัย ชำนาญเส้นทางไทย-ลาว 
              พร้อมคนขับมืออาชีพที่ดูแลคุณเหมือนครอบครัว
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="https://line.me/ti/p/~ta303064"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 shadow-lg shadow-blue-900/10 transition-all active:scale-95"
              >
                จองรถทันที
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95"
              >
                ชมรูปรถ
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] rotate-3 -z-10" />
            <div className="relative rounded-[32px] h-[500px] lg:h-[640px] w-full overflow-hidden shadow-2xl group">
              {/* Slides Container */}
              <div 
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((img) => (
                  <div key={img} className="min-w-full h-full">
                    <img
                      src={img}
                      className="w-full h-full object-cover"
                      alt="รถตู้อุบลนายต๊ะวีไอพี VIP"
                    />
                  </div>
                ))}
              </div>

              {/* Dot Pagination */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "w-8 bg-white" 
                        : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}