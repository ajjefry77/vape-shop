"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, TrendingUp, Award } from "lucide-react";

const brands = [
  { name: "Geekvape", nameFa: "جیک‌ویپ", products: 45, tier: "gold", emoji: "🏆" },
  { name: "Voopoo", nameFa: "ووقو", products: 38, tier: "gold", emoji: "🥇" },
  { name: "SMOK", nameFa: "اسموک", products: 52, tier: "platinum", emoji: "💎" },
  { name: "Lost Vape", nameFa: "لاست ویپ", products: 28, tier: "silver", emoji: "⭐" },
  { name: "Uwell", nameFa: "یوول", products: 33, tier: "silver", emoji: "🌟" },
  { name: "Elf Bar", nameFa: "الف بار", products: 41, tier: "gold", emoji: "👑" },
  { name: "Wotofo", nameFa: "ووتوفو", products: 24, tier: "silver", emoji: "🔥" },
  { name: "Freemax", nameFa: "فری‌مکس", products: 30, tier: "bronze", emoji: "✨" },
];

export default function Brands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="brands" className="relative py-24 px-4">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">برندهای</span>
            <span className="text-white"> معتبر</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            فقط محصولات اصل و اورجینال از معتبرترین برندهای جهانی
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="group glass rounded-2xl p-6 cursor-pointer hover:border-neon-purple/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{brand.emoji}</span>
                <div>
                  <h3 className="text-white font-bold">{brand.name}</h3>
                  <p className="text-gray-500 text-xs">{brand.nameFa}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">{brand.products} محصول</span>
                <div className="flex items-center gap-1">
                  {brand.tier === "platinum" && <Award className="w-3 h-3 text-neon-cyan" />}
                  {brand.tier === "gold" && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
                  {brand.tier === "silver" && <TrendingUp className="w-3 h-3 text-gray-400" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
