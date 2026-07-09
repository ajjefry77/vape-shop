"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cigarette, Droplets, Battery, Wrench, Flame, Sparkles } from "lucide-react";

const categories = [
  {
    name: "ویپ",
    nameEn: "Vape Mods",
    icon: Flame,
    count: 48,
    gradient: "from-purple-500 to-indigo-500",
    glow: "rgba(168, 85, 247, 0.3)",
  },
  {
    name: "پاد سیستم",
    nameEn: "Pod Systems",
    icon: Cigarette,
    count: 35,
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6, 182, 212, 0.3)",
  },
  {
    name: "سالت نیکوتین",
    nameEn: "Salt Nicotine",
    icon: Droplets,
    count: 72,
    gradient: "from-pink-500 to-rose-500",
    glow: "rgba(236, 72, 153, 0.3)",
  },
  {
    name: "کویل",
    nameEn: "Coils",
    icon: Battery,
    count: 56,
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245, 158, 11, 0.3)",
  },
  {
    name: "لوازم جانبی",
    nameEn: "Accessories",
    icon: Wrench,
    count: 90,
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16, 185, 129, 0.3)",
  },
  {
    name: "پیشنهاد ویژه",
    nameEn: "Special Offers",
    icon: Sparkles,
    count: 24,
    gradient: "from-red-500 to-pink-500",
    glow: "rgba(239, 68, 68, 0.3)",
  },
];

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">دسته‌بندی</span>
            <span className="text-white"> محصولات</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            مجموعه کاملی از بهترین برندهای ویپ و لوازم جانبی
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: `0 20px 40px ${cat.glow}` }}
                className="group cursor-pointer"
              >
                <div className="glass rounded-2xl p-6 text-center h-full transition-all duration-500 hover:border-transparent relative overflow-hidden">
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className={`relative w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1 relative">{cat.name}</h3>
                  <p className="text-gray-500 text-xs relative">{cat.nameEn}</p>
                  <p className="text-gray-600 text-xs mt-2 relative">{cat.count} محصول</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
