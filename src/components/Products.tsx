"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Star, ShoppingCart, Heart, Eye, Zap } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Geekvape Aegis Legend 3",
    nameFa: "جیک‌ویپ ایجیس لجند ۳",
    price: 1850000,
    originalPrice: 2200000,
    rating: 4.9,
    reviews: 128,
    badge: "پرفروش",
    badgeColor: "bg-neon-purple",
    image: "🎛️",
    category: "ویپ",
    colors: ["#a855f7", "#06b6d4", "#1a1a2e"],
  },
  {
    id: 2,
    name: "Voopoo Drag S Pro",
    nameFa: "ووقو درگ اس پرو",
    price: 980000,
    originalPrice: 1150000,
    rating: 4.8,
    reviews: 89,
    badge: "جدید",
    badgeColor: "bg-neon-cyan",
    image: "🔥",
    category: "پاد",
    colors: ["#ec4899", "#3b82f6", "#0d0d14"],
  },
  {
    id: 3,
    name: "Nord 5 Pod Kit",
    nameFa: "نورد ۵ پاد کیت",
    price: 750000,
    originalPrice: 900000,
    rating: 4.7,
    reviews: 156,
    badge: "تخفیف ویژه",
    badgeColor: "bg-neon-pink",
    image: "⚡",
    category: "پاد",
    colors: ["#f59e0b", "#10b981", "#6366f1"],
  },
  {
    id: 4,
    name: "SMOK RPM 80 Pro",
    nameFa: "اسموک آر‌پی‌ام ۸۰ پرو",
    price: 680000,
    originalPrice: null,
    rating: 4.6,
    reviews: 203,
    badge: null,
    badgeColor: "",
    image: "💨",
    category: "پاد",
    colors: ["#a855f7", "#ef4444", "#06b6d4"],
  },
  {
    id: 5,
    name: "Elf Bar BC5000",
    nameFa: "الف بار بی‌سی ۵۰۰۰",
    price: 320000,
    originalPrice: 380000,
    rating: 4.5,
    reviews: 342,
    badge: "پرفروش",
    badgeColor: "bg-neon-purple",
    image: "✨",
    category: "ویپ یکبار مصرف",
    colors: ["#ec4899", "#8b5cf6", "#06b6d4"],
  },
  {
    id: 6,
    name: "Salt Nic Ice Series",
    nameFa: "سالت نیکوتین آیس سریز",
    price: 185000,
    originalPrice: 220000,
    rating: 4.8,
    reviews: 567,
    badge: "جدید",
    badgeColor: "bg-neon-cyan",
    image: "🧊",
    category: "سالت",
    colors: ["#06b6d4", "#3b82f6", "#8b5cf6"],
  },
  {
    id: 7,
    name: "Wotofo Recurve AIO",
    nameFa: "ووتوفو رکرو ای‌آی‌او",
    price: 520000,
    originalPrice: null,
    rating: 4.4,
    reviews: 67,
    badge: null,
    badgeColor: "",
    image: "🎯",
    category: "پاد",
    colors: ["#1a1a2e", "#a855f7", "#10b981"],
  },
  {
    id: 8,
    name: "Coil Master Tool Kit",
    nameFa: "ابزار کویل مستر",
    price: 450000,
    originalPrice: 550000,
    rating: 4.9,
    reviews: 89,
    badge: "تخفیف ویژه",
    badgeColor: "bg-neon-pink",
    image: "🔧",
    category: "لوازم",
    colors: ["#f59e0b", "#ef4444", "#10b981"],
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} id="products" className="relative py-24 px-4">
      {/* Section background accent */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">
              <span className="text-gradient">محصولات</span>
              <span className="text-white"> ویژه</span>
            </h2>
            <p className="text-gray-400">محبوب‌ترین محصولات با بهترین قیمت</p>
          </div>
          <div className="flex gap-2">
            {["همه", "ویپ", "پاد", "سالت"].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-xl text-sm glass text-gray-400 hover:text-white hover:border-neon-purple/30 border border-transparent transition-all duration-300"
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group card-hover"
            >
              <Link href={`/products/${product.id}`} className="glass rounded-2xl overflow-hidden h-full flex flex-col block">
                {/* Image */}
                <div className="relative h-56 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-card to-dark-surface" />

                  {/* Animated background orbs */}
                  <motion.div
                    animate={hoveredId === product.id ? { scale: 1.5, opacity: 0.2 } : { scale: 1, opacity: 0.1 }}
                    className="absolute w-32 h-32 rounded-full bg-neon-purple blur-3xl"
                  />
                  <motion.div
                    animate={hoveredId === product.id ? { scale: 1.3, opacity: 0.15 } : { scale: 1, opacity: 0.05 }}
                    className="absolute w-24 h-24 rounded-full bg-neon-cyan blur-2xl translate-x-8 translate-y-4"
                  />

                  <span className="relative text-6xl z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {product.image}
                  </span>

                  {/* Badge */}
                  {product.badge && (
                    <span className={`absolute top-3 right-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>
                      {product.badge}
                    </span>
                  )}

                  {/* Quick actions */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={hoveredId === product.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-pink transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5" />
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={hoveredId === product.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>

                  {/* Color dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {product.colors.map((color, ci) => (
                      <div
                        key={ci}
                        className="w-2.5 h-2.5 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs text-neon-purple/70 font-medium mb-1">{product.category}</span>
                  <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">{product.nameFa}</h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-1">{product.name}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          className={`w-3 h-3 ${si < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-white font-bold text-lg">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 text-xs line-through mr-2 block">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center text-white shadow-lg shadow-neon-purple/20"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-block px-8 py-3 rounded-2xl glass text-gray-300 hover:text-white font-semibold border border-white/10 hover:border-neon-purple/30 transition-all duration-300"
          >
            مشاهده همه محصولات
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
