import type { MetaFunction } from "react-router";
import {
  FaFacebookF,
  FaLine,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPlane,
  FaMapMarkedAlt,
  FaUsers,
  FaGlobeAsia,
  FaIndustry,
  FaPhone,
} from "react-icons/fa";
import Navbar from "~/components/navbar";
import Hero from "~/components/Hero";
import WhyChooseUs from "~/components/WhyChooseUs";
import FloatingButton from "~/components/FloatingButton";

export const meta: MetaFunction = () => [
  {
    title: "รถตู้อุบลนายต๊ะวีไอพี | เช่ารถตู้พร้อมคนขับ อุบล-อีสาน-ทั่วไทย",
  },
  {
    name: "description",
    content:
      "เช่ารถตู้อุบลราชธานี พร้อมคนขับ เริ่มต้น 2,000–2,500 บาท บริการรถตู้ VIP 8-14 ที่นั่ง ท่องเที่ยวไทย-ลาว ประชุม สัมมนา มีรถมากกว่า 100 คัน จองด่วนใน 1 ชม.",
  },
  {
    property: "og:title",
    content: "รถตู้อุบลนายต๊ะวีไอพี | เช่ารถตู้พร้อมคนขับ อุบล-อีสาน-ทั่วไทย",
  },
  {
    property: "og:description",
    content: "เช่ารถตู้อุบลราชธานี พร้อมคนขับ เริ่มต้น 2,000–2,500 บาท บริการรถตู้ VIP 8-14 ที่นั่ง ท่องเที่ยวไทย-ลาว ประชุม สัมมนา มีรถมากกว่า 100 คัน จองด่วนใน 1 ชม.",
  },
  {
    property: "og:image",
    content: "/logo.webp",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:site_name",
    content: "รถตู้อุบลนายต๊ะวีไอพี",
  },
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
  {
    name: "twitter:title",
    content: "รถตู้อุบลนายต๊ะวีไอพี | เช่ารถตู้พร้อมคนขับ อุบล-อีสาน-ทั่วไทย",
  },
  {
    name: "twitter:description",
    content: "เช่ารถตู้อุบลราชธานี พร้อมคนขับ เริ่มต้น 2,000–2,500 บาท บริการรถตู้ VIP 8-14 ที่นั่ง ท่องเที่ยวไทย-ลาว ประชุม สัมมนา มีรถมากกว่า 100 คัน จองด่วนใน 1 ชม.",
  },
  {
    name: "twitter:image",
    content: "/logo.webp",
  },
];

const images = [
  "/images/296682_0.jpg",
  "/images/296683_0.jpg",
  "/images/296684_0.jpg",
  "/images/296685_0.jpg",
  "/images/296686_0.jpg",
  "/images/296687_0.jpg",
  "/images/296688_0.jpg",
  "/images/296689_0.jpg",
  "/images/296690_0.jpg",
  "/images/296691_0.jpg",
  "/images/296692_0.jpg",
  "/images/296693_0.jpg",
  "/images/296694_0.jpg",
  "/images/inside.png",
  "/images/inside2.png",
  "/images/inside3.png",
  "/images/inside4.png",
  "/images/inside5.png",
  "/images/inside6.png",
  "/images/inside8.png",
  "/images/inside9.png",
  "/images/selfie.png",
  "/images/van.png",
  "/images/van2.png",
  "/images/van3.png",
  "/images/vans.png",
];

const services = [
  {
    label: "เช่ารถรายวัน",
    sub: "ยืดหยุ่น ราคาเป็นกันเอง",
    icon: <FaCalendarAlt />,
  },
  {
    label: "รับส่งสนามบิน",
    sub: "ตรงเวลา ไม่มีเซอร์ไพรส์",
    icon: <FaPlane />,
  },
  {
    label: "เหมารถต่างจังหวัด",
    sub: "ทั่วไทย ปลายทางไหนก็ไป",
    icon: <FaMapMarkedAlt />,
  },
  {
    label: "ประชุม / สัมมนา",
    sub: "รองรับกลุ่มองค์กรและหน่วยงานราชการ",
    icon: <FaUsers />,
  },
  {
    label: "ทริปท่องเที่ยวไทย-ลาว",
    sub: "ชำนาญเส้นทางทั้งในและต่างประเทศ",
    icon: <FaGlobeAsia />,
  },
  {
    label: "งานดูงาน / โรงงาน",
    sub: "บริการรับส่งพนักงานและตรวจงาน",
    icon: <FaIndustry />,
  },
];

const provinces = [
  "อุบลราชธานี",
  "บุรีรัมย์",
  "อุดรธานี",
  "หนองคาย",
  "หนองบัวลำภู",
  "เลย",
  "ขอนแก่น",
  "สกลนคร",
  "นครพนม",
  "บึงกาฬ",
  "ทั่วไทย",
];

const vanTypes = [
  { name: "VIP 8 ที่นั่ง", desc: "หรูหรา กว้างขวาง เป็นส่วนตัว" },
  { name: "VIP 9 ที่นั่ง", desc: "เบาะนุ่ม นั่งสบาย สไตล์ VIP" },
  { name: "VIP 10 ที่นั่ง", desc: "คุ้มค่า รองรับกลุ่มเพื่อนและครอบครัว" },
  { name: "กึ่ง VIP 12-14 ที่นั่ง", desc: "ประหยัด เหมาะสำหรับหมู่คณะใหญ่" },
];

const faqs = [
  {
    q: "เช่ารถตู้พร้อมคนขับ วันละเท่าไร",
    a: "ราคาเริ่มต้น 2,000–2,500 บาทต่อวัน (ไม่รวมน้ำมัน) สอบถามราคาที่แน่นอนตามระยะทางได้ทาง LINE หรือ Facebook",
  },
  {
    q: "จองรถต้องรอนานไหม",
    a: "เรามีรถตู้พร้อมให้บริการมากกว่า 100 คัน สามารถจองด่วนและพร้อมออกเดินทางได้ภายใน 1 ชม.",
  },
  {
    q: "มีบริการจัดทริปท่องเที่ยวไหม",
    a: "เรามีบริการจัดทริปท่องเที่ยวแบบหารเฉลี่ย ในราคาประหยัด พร้อมคนขับที่ชำนาญเส้นทางท่องเที่ยว",
  },
  {
    q: "เดินทางไปประเทศลาวได้ไหม",
    a: "ได้ครับ เรามีบริการเช่า-เหมา สำหรับเดินทางท่องเที่ยวทั้งในไทยและลาว พร้อมเอกสารข้ามแดน",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <Navbar />

      {/* ─── HERO ─── */}
      <Hero images={[images[0], images[5], images[14], images[17], images[18]]} />

      {/* ─── QUICK CONTACT CTA ─── */}
      <section className="py-12 px-6 bg-white border-b border-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Phone */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-slate-50 text-primary flex items-center justify-center text-xl shrink-0">
                <FaPhone className="rotate-[10deg]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">โทรจองเลย</p>
                <a href="tel:0952784209" className="text-xl font-display font-black tracking-tight text-slate-900 hover:text-primary transition-colors">095-278-4209</a>
              </div>
            </div>

            {/* LINE */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#06C755]/5 text-[#06C755] flex items-center justify-center text-2xl shrink-0">
                <FaLine />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">LINE ID</p>
                <a href="https://line.me/ti/p/~ta303064" target="_blank" rel="noreferrer" className="text-xl font-display font-black tracking-tight text-slate-900 hover:text-[#06C755] transition-colors">ta303064</a>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#0084FF]/5 text-[#0084FF] flex items-center justify-center text-xl shrink-0">
                <FaFacebookF />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Facebook</p>
                <a href="https://web.facebook.com/profile.php?id=100094713742678" target="_blank" rel="noreferrer" className="text-xl font-display font-black tracking-tight text-slate-900 hover:text-[#0084FF] transition-colors">รถตู้นายต๊ะ VIP</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold tracking-widest uppercase text-primary">Our Services</p>
            <h2 className="mt-4 text-4xl lg:text-5xl font-display font-black tracking-tight text-slate-900">
              บริการระดับพรีเมียม
            </h2>
            <p className="mt-6 text-lg text-slate-500">เลือกบริการที่ตอบโจทย์การเดินทางของคุณ ไม่ว่าจะใกล้หรือไกล เราพร้อมดูแล</p>
          </div>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ label, sub, icon }, i) => (
              <div
                key={label}
                className="bg-white p-10 rounded-[32px] border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all text-xl">
                  {icon}
                </div>
                <h3 className="mt-8 text-xl font-bold">{label}</h3>
                <p className="mt-3 text-base text-slate-500 leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>

        </div>
        </section>

        {/* ─── FULL SIZE IMAGE 1 ─── */}
        <section className="w-full h-[400px] lg:h-[600px] overflow-hidden">
        <img src={images[5]} className="w-full h-full object-cover" alt="รถตู้อุบลนายต๊ะวีไอพี VIP" />
        </section>

        {/* ─── VAN TYPES ─── */}
        <section id="fleet" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-primary/40">Vehicle Options</p>
                <h2 className="mt-6 text-5xl lg:text-7xl font-display font-black tracking-tight text-slate-900 leading-[0.9]">
                  เลือกขนาดรถ<br />ที่เหมาะกับทริปคุณ
                </h2>
              </div>
              <div className="lg:pb-2">
                <p className="text-slate-500 text-xl font-medium max-w-sm leading-relaxed border-l-4 border-accent pl-6">
                  ทุกคันคือมาตรฐาน VIP รุ่นใหม่ ภายในสะอาด พร้อมสิ่งอำนวยความสะดวกระดับพรีเมียม
                </p>
              </div>
            </div>

            <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {vanTypes.map((type, i) => (
                <div 
                  key={type.name} 
                  className="group relative"
                >
                  <div className="text-[120px] font-display font-black text-slate-50 absolute -top-16 -left-4 pointer-events-none group-hover:text-blue-50 transition-colors duration-500">
                    0{i + 1}
                  </div>
                  <div className="relative pt-8">
                    <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                      Premium Van
                    </span>
                    <h3 className="text-2xl font-display font-black text-slate-900 group-hover:text-primary transition-colors">{type.name}</h3>
                    <p className="mt-4 text-slate-500 leading-relaxed font-medium">{type.desc}</p>
                    <a 
                      href="https://line.me/ti/p/~ta303064"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 flex items-center gap-3 text-slate-300 group-hover:text-primary transition-all cursor-pointer w-fit"
                    >
                      <div className="h-px w-8 bg-current" />
                      <span className="text-xs font-bold uppercase tracking-widest">Book Now</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ─── FULL SIZE IMAGE 2 ─── */}
        <section className="w-full h-[400px] lg:h-[800px] overflow-hidden flex justify-center items-center">
        <img src={images[9]} className="w-full h-full object-cover" alt="ภายในรถตู้อุบลนายต๊ะวีไอพี VIP" />
        </section>

        {/* ─── VIDEOS ─── */}
      <section id="videos" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold tracking-widest uppercase text-primary">Videos</p>
            <h2 className="mt-4 text-4xl lg:text-5xl font-display font-black tracking-tight text-slate-900">
              บรรยากาศการเดินทาง
            </h2>
            <p className="mt-6 text-lg text-slate-500">สัมผัสประสบการณ์การเดินทางที่แสนพิเศษกับรถตู้อุบลนายต๊ะวีไอพี</p>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-[32px] overflow-hidden shadow-2xl bg-black aspect-[9/16]">
              <video 
                src="/videos/wat_prayai.mp4" 
                controls 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[32px] overflow-hidden shadow-2xl bg-black aspect-[9/16]">
              <video 
                src="/videos/pai.mp4" 
                controls 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[32px] overflow-hidden shadow-2xl bg-black aspect-[9/16]">
              <video 
                src="/videos/rakthai.mp4" 
                controls 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}

      <section id="gallery" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-primary">Our Fleet</p>
              <h2 className="mt-4 text-4xl lg:text-5xl font-display font-black tracking-tight text-slate-900">แกลเลอรี่รถของเรา</h2>
            </div>
            <p className="text-slate-500 text-lg max-w-md">สัมผัสความหรูหราและมาตรฐานความสะอาดของรถตู้นายต๊ะ VIP</p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="rounded-[24px] overflow-hidden aspect-[4/3] group shadow-lg shadow-slate-200/50">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="รถตู้อุบลนายต๊ะวีไอพี VIP" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── FULL SIZE IMAGE 3 ─── */}
      <section className="w-full h-[400px] lg:h-[800px] overflow-hidden">
        <img src={images[images.length-1]} className="w-full h-full object-cover" alt="รถตู้อุบลนายต๊ะวีไอพี VIP ภายนอก" />
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">

            <div className="lg:col-span-2">
              <p className="text-sm font-bold tracking-widest uppercase text-primary">Transparent Pricing</p>
              <h2 className="mt-4 text-4xl lg:text-5xl font-display font-black tracking-tight text-slate-900">
                ราคายุติธรรม<br />ไม่มีบวกเพิ่ม
              </h2>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                เรามีเรทราคามาตรฐานที่ชัดเจน พร้อมการดูแลระดับพรีเมียมตลอดการเดินทาง
              </p>

              <div className="mt-10 p-8 bg-white border border-slate-100 rounded-[32px] shadow-xl shadow-blue-900/5">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">เริ่มต้นเพียง</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-6xl font-black text-primary">฿2,000</span>
                  <span className="text-xl text-slate-400">/ วัน</span>
                </div>
                <p className="mt-4 text-slate-500 text-sm italic">*ราคาไม่รวมน้ำมันและค่าทางด่วน</p>
              </div>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {[
                ["คนขับมืออาชีพ", "ประสบการณ์สูง สุภาพ ชำนาญทาง"],
                ["เดินทางต่างจังหวัด", "ไปได้ทุกจังหวัดทั่วไทยและลาว"],
                ["จองง่าย ได้รถไว", "พร้อมสแตนด์บายตลอด 24 ชม."],
                ["มาตรฐานความสะอาด", "ฆ่าเชื้อและทำความสะอาดทุกทริป"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-white border border-slate-100 rounded-[24px] p-8 flex flex-col gap-4 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-xl">✓</div>
                  <div>
                    <div className="font-bold text-lg text-slate-900">{title}</div>
                    <div className="text-base text-slate-500 mt-2">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── COVERAGE ─── */}
      <section id="coverage" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold tracking-widest uppercase text-primary">Our Coverage</p>
            <h2 className="mt-4 text-4xl lg:text-5xl font-display font-black tracking-tight text-slate-900">
              พื้นที่ให้บริการ
            </h2>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {provinces.map((p) => (
              <div
                key={p}
                className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-full px-8 py-4 text-base font-bold text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
              >
                <FaMapMarkerAlt className="text-accent" />
                {p}
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[40px] overflow-hidden h-64 bg-slate-900 relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative text-center z-10 px-6">
              <p className="text-blue-200 text-xl font-medium italic">
                "เราชำนาญเส้นทางภาคอีสานและแหล่งท่องเที่ยวทั่วไทย-ลาว"
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">

          <p className="text-sm font-bold tracking-widest uppercase text-primary text-center">FAQ</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-display font-black tracking-tight text-center text-slate-900">
            คำถามที่พบบ่อย
          </h2>

          <div className="mt-20 space-y-6">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-sm"
              >
                <h3 className="font-bold text-xl text-slate-900">{q}</h3>
                <p className="mt-6 text-lg text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-primary rounded-[48px] p-12 lg:p-24 overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-full h-full opacity-30 
            bg-[url('/images/inside.png')] bg-cover bg-center pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <p className="text-blue-300 font-bold tracking-widest uppercase text-sm">Ready to travel?</p>
              <h2 className="mt-6 text-5xl lg:text-7xl font-black text-white leading-tight">
                จองรถได้ทันที<br />ตลอด 24 ชม.
              </h2>
              <p className="mt-8 text-xl text-blue-100 leading-relaxed">
                เช็คคิวรถฟรี ปรึกษาทริปท่องเที่ยวไทย-ลาว<br />ทีมงานนายต๊ะ VIP พร้อมดูแลคุณทุกเส้นทาง
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <a
                  href="https://line.me/ti/p/~ta303064"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#06C755] text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl"
                >
                  <FaLine size={24} />
                  แอดไลน์จองรถ
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=100094713742678"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl"
                >
                  <FaFacebookF size={20} />
                  ทักเฟซบุ๊ก
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-slate-100">
              <img src="/logo.webp" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-lg text-slate-900">
              รถตู้อุบลนายต๊ะวีไอพี <span className="text-accent">VIP</span>
            </span>
          </div>

          <div className="flex gap-8">
            <a href="#services" className="text-slate-500 hover:text-primary font-medium">บริการ</a>
            <a href="#pricing" className="text-slate-500 hover:text-primary font-medium">ราคา</a>
            <a 
              href="https://line.me/ti/p/~ta303064" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-500 hover:text-primary font-medium"
            >
              ติดต่อเรา
            </a>
          </div>

          <p className="text-slate-400 font-medium">© 2026 รถตู้อุบลนายต๊ะวีไอพี · All rights reserved</p>
        </div>
      </footer>

      <FloatingButton />
    </main>
  );
}