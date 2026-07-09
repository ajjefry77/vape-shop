"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Star, TrendingUp, ExternalLink } from "lucide-react";

const brands = [
  { name: "Geekvape", nameFa: "جیک‌ویپ", description: "یکی از پیشروترین برندهای ویپ با محصولات مقاوم و باکیفیت", products: 45, tier: "gold", emoji: "🏆", founded: 2015, country: "چین" },
  { name: "Voopoo", nameFa: "ووقو", description: "برند محبوب با چیپست‌های قدرتمند و طراحی زیبا", products: 38, tier: "gold", emoji: "🥇", founded: 2017, country: "چین" },
  { name: "SMOK", nameFa: "اسموک", description: "بزرگترین تولیدکننده ویپ در جهان با تنوع بی‌نظیر", products: 52, tier: "platinum", emoji: "💎", founded: 2010, country: "چین" },
  { name: "Lost Vape", nameFa: "لاست ویپ", description: "برند لوکس با محصولات پریمیوم و طراحی خاص", products: 28, tier: "gold", emoji: "⭐", founded: 2014, country: "چین" },
  { name: "Uwell", nameFa: "یوول", description: "نوآور در طراحی پاد با سیستم‌های منحصربفرد", products: 33, tier: "silver", emoji: "🌟", founded: 2015, country: "چین" },
  { name: "Elf Bar", nameFa: "الف بار", description: "پیشرو در ویپ‌های یکبار مصرف با طعم‌های متنوع", products: 41, tier: "gold", emoji: "👑", founded: 2018, country: "چین" },
  { name: "Wotofo", nameFa: "ووتوفو", description: "برند متخصص در کویل و اتمایزر با کیفیت ساخت بالا", products: 24, tier: "silver", emoji: "🔥", founded: 2016, country: "چین" },
  { name: "Freemax", nameFa: "فری‌مکس", description: "پیشرو در فناوری کویل‌های مESH با طعم بی‌نظیر", products: 30, tier: "silver", emoji: "✨", founded: 2013, country: "چین" },
  { name: "Innokin", nameFa: "اینوکین", description: "برند قابل اعتماد با محصولات مقرون‌به‌صرفه و باکیفیت", products: 26, tier: "bronze", emoji: "🎯", founded: 2011, country: "چین" },
  { name: "Aspire", nameFa: "اسپایر", description: "یکی از قدیمی‌ترین برندها با تجربه و کیفیت اثبات شده", products: 22, tier: "bronze", emoji: "🏅", founded: 2013, country: "چین" },
  { name: "Puff Bar", nameFa: "پاف بار", description: "برند محبوب ویپ‌های یکبار مصرف با طعم‌های متنوع", products: 35, tier: "gold", emoji: "💨", founded: 2019, country: "آمریکا" },
  { name: "Nord", nameFa: "نورد", description: "زیرمجموعه SMOK با تمرکز بر پادهای قابل حمل", products: 18, tier: "silver", emoji: "⚡", founded: 2019, country: "چین" },
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">برندهای</span>
            <span className="text-white"> معتبر</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            فقط محصولات اصل و اورجینال از معتبرترین برندهای جهانی
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 group hover:border-neon-purple/20 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{brand.emoji}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{brand.name}</h3>
                    <p className="text-gray-500 text-sm">{brand.nameFa}</p>
                  </div>
                </div>
                {brand.tier === "platinum" && <Award className="w-5 h-5 text-neon-cyan" />}
                {brand.tier === "gold" && <Star className="w-5 h-5 text-amber-400 fill-amber-400" />}
                {brand.tier === "silver" && <TrendingUp className="w-5 h-5 text-gray-400" />}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{brand.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span>{brand.products} محصول</span>
                <span>تاسیس {brand.founded}</span>
                <span>{brand.country}</span>
              </div>

              <div className="h-px bg-dark-border mb-4" />

              <a
                href="#"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl glass text-sm text-gray-400 hover:text-neon-purple hover:border-neon-purple/20 border border-transparent transition-all duration-300"
              >
                مشاهده محصولات
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
