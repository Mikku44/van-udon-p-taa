import { FaShieldAlt, FaLeaf, FaMicrophoneAlt, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "ประกันชั้น 1 ทุกคัน",
    desc: "มั่นใจทุกการเดินทางด้วยประกันภัยชั้น 1 ครอบคลุมผู้โดยสารทุกคน",
  },
  {
    icon: <FaLeaf />,
    title: "สะอาด ปลอดภัย",
    desc: "รถตู้ภายในสะอาด มีการทำความสะอาดฆ่าเชื้อก่อนให้บริการทุกครั้ง",
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "สิ่งอำนวยความสะดวก",
    desc: "ระบบแสง สี เสียง และเทคโนโลยีครบครัน ตลอดการเดินทาง",
  },
  {
    icon: <FaClock />,
    title: "จองด่วนใน 1 ชม.",
    desc: "ทีมงานพร้อมสแตนด์บาย จองง่าย ได้รถไว ไม่ต้องรอนาน",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-base text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
