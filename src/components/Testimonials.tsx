"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "امیر حسین",
    role: "ویپر حرفه‌ای",
    text: "بهترین فروشگاهی که تا حالا ازش خرید کردم. اصالت محصولات تضمینیه و ارسالشون خیلی سریعه.",
    rating: 5,
    avatar: "🧑",
  },
  {
    name: "سارا",
    role: "مشتری جدید",
    text: "برای اولین بار از این فروشگاه خرید کردم و واقعاً از کیفیت و قیمت‌ها راضی‌ام. حتماً دوباره خرید می‌کنم.",
    rating: 5,
    avatar: "👩",
  },
  {
    name: "محمد",
    role: "ویپر ۳ ساله",
    text: "تنوع محصولاتشون عالیه و پشتیبانیشون واقعاً کمک‌کننده بود. بهترین برندای دنیا رو دارن.",
    rating: 5,
    avatar: "🧔",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = direction === "left" ? -350 : 350;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">
              <span className="text-gradient">نظرات</span>
              <span className="text-white"> مشتریان</span>
            </h2>
            <p className="text-gray-400">بیش از ۱۰,۰۰۰ مشتری راضی</p>
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="min-w-[320px] sm:min-w-[380px] glass rounded-2xl p-6 group hover:border-neon-purple/20 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-neon-purple/20 mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{t.avatar}</span>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <span key={si} className="text-amber-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
