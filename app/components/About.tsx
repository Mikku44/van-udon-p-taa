
import {  FaStar, FaAward, FaHandshake } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaAward className="text-accent" />,
      title: "ประสบการณ์กว่า 10 ปี",
      desc: "เชี่ยวชาญทุกเส้นทางในไทยและลาว"
    },
    {
      icon: <FaStar className="text-accent" />,
      title: "บริการระดับ VIP",
      desc: "ดูแลดุจญาติมิตร ตลอดการเดินทาง"
    },
    {
      icon: <FaShieldAlt className="text-accent" />,
      title: "ความปลอดภัยสูงสุด",
      desc: "รถใหม่ เช็คระยะสม่ำเสมอ ประกันครบ"
    },
    {
      icon: <FaHandshake className="text-accent" />,
      title: "ราคายุติธรรม",
      desc: "โปร่งใส ไม่มีค่าธรรมเนียมแอบแฝง"
    }
  ];

  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Image Side */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-blue-900/10 aspect-[4/5] lg:aspect-auto lg:h-[700px]">
              <img 
                src="/images/vans.png" 
                alt="ฝูงรถตู้อุบลนายต๊ะวีไอพี" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-12">
                <div className="text-white">
                  <p className="text-4xl font-black font-display tracking-tight">100+</p>
                  <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">พร้อมให้บริการทั่วไทย</p>
                </div>
              </div>
            </div>

          
          </div>

          {/* Right: Content Side */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-primary mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              รู้จักกับเรา
            </div>

            <h2 className="text-4xl lg:text-6xl font-display font-black tracking-tight text-slate-900 leading-[1.1]">
              ผู้นำด้านบริการ<br />
              <span className="text-primary italic">เช่ารถตู้อุบล</span>
            </h2>

            <div className="mt-10 space-y-6 text-lg text-slate-500 leading-relaxed font-medium">
              <p>
                หากคุณกำลังมองหาบริการ <b>เช่ารถตู้อุบล</b> ที่มีความเป็นมืออาชีพและเน้นความปลอดภัยเป็นอันดับหนึ่ง <b>รถตู้อุบลนายต๊ะวีไอพี</b> คือคำตอบที่ดีที่สุดของคุณ เราให้บริการเช่ารถตู้พร้อมคนขับในพื้นที่จังหวัดอุบลราชธานี ครอบคลุมไปถึงภูมิภาคอีสาน และพร้อมเดินทางไปทุกที่ทั่วไทย
              </p>
              <p>
                เราคือผู้เชี่ยวชาญด้านการเดินทางในเขตภาคอีสานและทั่วไทย ด้วยจำนวนรถตู้ในเครือข่ายมากกว่า 100 คัน ทำให้เราสามารถตอบสนองความต้องการของลูกค้าได้อย่างรวดเร็ว แม้จะเป็นการจองด่วนภายใน 1 ชั่วโมง เราก็พร้อมสแตนด์บายให้บริการคุณเสมอ รถตู้ทุกคันของเราเป็นรุ่นใหม่ที่มีการตกแต่งภายในแบบพรีเมียม (VIP)
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-xl mt-1 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100 flex items-center gap-6">
              <img 
                src="/images/selfie.webp" 
                alt="นายต๊ะ เจ้าของบริการ" 
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 p-1"
                loading="lazy"
              />
              <div>
                <p className="font-bold text-slate-900 text-lg">นายต๊ะ (Ta)</p>
                <p className="text-slate-400 font-medium">เจ้าของบริการ รถตู้อุบลนายต๊ะวีไอพี</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom expanded content for SEO */}
        <div className="mt-32 pt-20 border-t border-slate-50">
          <div className="prose prose-lg text-slate-400 max-w-none grid md:grid-cols-2 gap-12 text-sm italic">
            <p>
              <b>ทำไมต้องเลือกเช่ารถตู้กับเรา?</b> เพราะเราให้ความสำคัญกับมาตรฐานความสะอาดและการบำรุงรักษารถอย่างสม่ำเสมอ คนขับรถของเราทุกคนผ่านการคัดสรรมาเป็นอย่างดี มีประสบการณ์สูง สุภาพ และที่สำคัญคือชำนาญเส้นทางทั้งในประเทศไทยและเส้นทางท่องเที่ยวในประเทศลาว ทำให้คุณมั่นใจได้ว่าการเดินทางของคุณจะเป็นไปอย่างราบรื่นและปลอดภัยที่สุด
            </p>
            <p>
              สำหรับการเดินทางข้ามแดนไปยังประเทศลาว เรามีประสบการณ์ในการจัดเตรียมเอกสารและอำนวยความสะดวกในการข้ามพรมแดนอย่างครบถ้วน ทำให้การท่องเที่ยวต่างประเทศของคุณเป็นเรื่องง่ายและสะดวกสบายเหมือนเดินทางในไทย ทีมงานนายต๊ะ VIP พร้อมยินดีให้คำปรึกษาและวางแผนการเดินทางให้กับคุณตลอด 24 ชั่วโมง เพื่อให้ทุกการเดินทางคือความสุขที่แท้จริง
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

import { FaShieldAlt } from "react-icons/fa";

