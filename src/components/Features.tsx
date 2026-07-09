"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Shield, Headphones, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "ارسال سریع",
    titleEn: "Fast Shipping",
    desc: "ارسال به سراسر کشور در ۲ تا ۵ روز کاری",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Shield,
    title: "ضمانت اصالت",
    titleEn: "Authenticity",
    desc: "تمامی محصولات با ضمانت اصالت و کیفیت",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Headphones,
    title: "پشتیبانی ۲۴/۷",
    titleEn: "24/7 Support",
    desc: "مشاوره تخصصی و پشتیبانی در تمام ساعات",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: RotateCcw,
    title: "گارانتی بازگشت",
    titleEn: "Returns",
    desc: "۷ روز گارانتی بازگشت بدون قید و شرط",
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 px-4">
      <div className="neon-line mb-20" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="group text-center p-8 rounded-2xl glass hover:border-neon-purple/20 transition-all duration-500"
              >
                <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${feat.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{feat.title}</h3>
                <p className="text-neon-purple/60 text-xs mb-3 tracking-wider">{feat.titleEn}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="neon-line mt-20" />
    </section>
  );
}
