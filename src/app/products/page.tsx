"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Star, ShoppingCart, Heart, Eye, Grid3X3, LayoutList, ChevronDown, X } from "lucide-react";

const allProducts = [
  { id: 1, name: "Geekvape Aegis Legend 3", nameFa: "جیک‌ویپ ایجیس لجند ۳", price: 1850000, originalPrice: 2200000, rating: 4.9, reviews: 128, badge: "پرفروش", badgeColor: "bg-neon-purple", image: "🎛️", category: "ویپ", brand: "Geekvape" },
  { id: 2, name: "Voopoo Drag S Pro", nameFa: "ووقو درگ اس پرو", price: 980000, originalPrice: 1150000, rating: 4.8, reviews: 89, badge: "جدید", badgeColor: "bg-neon-cyan", image: "🔥", category: "پاد", brand: "Voopoo" },
  { id: 3, name: "Nord 5 Pod Kit", nameFa: "نورد ۵ پاد کیت", price: 750000, originalPrice: 900000, rating: 4.7, reviews: 156, badge: "تخفیف", badgeColor: "bg-neon-pink", image: "⚡", category: "پاد", brand: "SMOK" },
  { id: 4, name: "SMOK RPM 80 Pro", nameFa: "اسموک آر‌پی‌ام ۸۰ پرو", price: 680000, originalPrice: null, rating: 4.6, reviews: 203, badge: null, badgeColor: "", image: "💨", category: "پاد", brand: "SMOK" },
  { id: 5, name: "Elf Bar BC5000", nameFa: "الف بار بی‌سی ۵۰۰۰", price: 320000, originalPrice: 380000, rating: 4.5, reviews: 342, badge: "پرفروش", badgeColor: "bg-neon-purple", image: "✨", category: "ویپ یکبار مصرف", brand: "Elf Bar" },
  { id: 6, name: "Salt Nic Ice Series", nameFa: "سالت نیکوتین آیس سریز", price: 185000, originalPrice: 220000, rating: 4.8, reviews: 567, badge: "جدید", badgeColor: "bg-neon-cyan", image: "🧊", category: "سالت", brand: "Bar Juice" },
  { id: 7, name: "Wotofo Recurve AIO", nameFa: "ووتوفو رکرو ای‌آی‌او", price: 520000, originalPrice: null, rating: 4.4, reviews: 67, badge: null, badgeColor: "", image: "🎯", category: "پاد", brand: "Wotofo" },
  { id: 8, name: "Coil Master Tool Kit", nameFa: "ابزار کویل مستر", price: 450000, originalPrice: 550000, rating: 4.9, reviews: 89, badge: "تخفیف", badgeColor: "bg-neon-pink", image: "🔧", category: "لوازم", brand: "Coil Master" },
  { id: 9, name: "Lost Vape Centaurus", nameFa: "لاست ویپ سنتاوروس", price: 2100000, originalPrice: 2500000, rating: 4.9, reviews: 45, badge: "پرفروش", badgeColor: "bg-neon-purple", image: "🏆", category: "ویپ", brand: "Lost Vape" },
  { id: 10, name: "Uwell Caliburn G3", nameFa: "یوول کالیبورن جی۳", price: 620000, originalPrice: null, rating: 4.8, reviews: 312, badge: "جدید", badgeColor: "bg-neon-cyan", image: "🌟", category: "پاد", brand: "Uwell" },
  { id: 11, name: "Freemax M Pro 3", nameFa: "فری‌مکس ام پرو ۳", price: 890000, originalPrice: 1050000, rating: 4.7, reviews: 78, badge: null, badgeColor: "", image: "💎", category: "ویپ", brand: "Freemax" },
  { id: 12, name: "Juice Head Peach", nameFa: "جویس هدل پیچ", price: 295000, originalPrice: null, rating: 4.6, reviews: 234, badge: null, badgeColor: "", image: "🍑", category: "جویس", brand: "Juice Head" },
];

const categories = ["همه", "ویپ", "پاد", "سالت", "جویس", "لوازم", "ویپ یکبار مصرف"];
const sortOptions = ["پرفروش‌ترین", "ارزان‌ترین", "گران‌ترین", "جدیدترین", "بیشترین امتیاز"];

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("همه");
  const [sortBy, setSortBy] = useState("پرفروش‌ترین");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000000]);

  const filtered = allProducts
    .filter((p) => (activeCategory === "همه" || p.category === activeCategory))
    .filter((p) => p.nameFa.includes(search) || p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-gradient">فروشگاه</span>
            <span className="text-white"> محصولات</span>
          </h1>
          <p className="text-gray-400">{filtered.length} محصول یافت شد</p>
        </motion.div>

        {/* Search & Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-4 mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="جستجوی محصول..."
                className="w-full pr-11 pl-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pr-10 pl-8 py-3 rounded-xl bg-dark-surface border border-dark-border text-white text-sm focus:border-neon-purple/50 focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* View Toggle */}
            <div className="flex gap-1 glass rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${viewMode === "grid" ? "bg-neon-purple/20 text-neon-purple" : "text-gray-500 hover:text-white"}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${viewMode === "list" ? "bg-neon-purple/20 text-neon-purple" : "text-gray-500 hover:text-white"}`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl glass text-gray-400 hover:text-white text-sm transition-all"
            >
              <SlidersHorizontal className="w-4 h-4" />
              فیلترها
            </button>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Price filter */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-dark-border">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400 min-w-24">محدوده قیمت:</span>
                    <input
                      type="range"
                      min={0}
                      max={3000000}
                      step={50000}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="flex-1 accent-neon-purple"
                    />
                    <span className="text-sm text-neon-purple">{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Products Grid */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" : "space-y-4"}>
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                {viewMode === "grid" ? (
                  <a href={`/products/${product.id}`} className="block group card-hover">
                    <div className="glass rounded-2xl overflow-hidden h-full">
                      <div className="relative h-48 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-dark-card to-dark-surface" />
                        <div className="absolute w-24 h-24 rounded-full bg-neon-purple/10 blur-2xl group-hover:bg-neon-purple/20 transition-all" />
                        <span className="relative text-5xl group-hover:scale-110 transition-transform duration-500">{product.image}</span>
                        {product.badge && (
                          <span className={`absolute top-3 right-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{product.badge}</span>
                        )}
                        <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-pink"><Heart className="w-3.5 h-3.5" /></button>
                          <button className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-cyan"><Eye className="w-3.5 h-3.5" /></button>
                        </div>
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-neon-purple/70 font-medium">{product.category}</span>
                        <h3 className="text-white font-semibold text-sm mt-1 mb-1">{product.nameFa}</h3>
                        <p className="text-gray-500 text-xs mb-3">{product.name}</p>
                        <div className="flex items-center gap-1 mb-3">
                          {Array.from({ length: 5 }).map((_, si) => (
                            <Star key={si} className={`w-3 h-3 ${si < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-600"}`} />
                          ))}
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-white font-bold">{formatPrice(product.price)}</span>
                            {product.originalPrice && <span className="text-gray-500 text-xs line-through block">{formatPrice(product.originalPrice)}</span>}
                          </div>
                          <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center text-white shadow-lg shadow-neon-purple/20 hover:scale-110 transition-transform">
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <a href={`/products/${product.id}`} className="block glass rounded-2xl p-4 hover:border-neon-purple/20 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-dark-card to-dark-surface flex items-center justify-center text-3xl flex-shrink-0">
                        {product.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-neon-purple/70">{product.category}</span>
                          {product.badge && <span className={`${product.badgeColor} text-white text-[10px] px-2 py-0.5 rounded-full`}>{product.badge}</span>}
                        </div>
                        <h3 className="text-white font-semibold">{product.nameFa}</h3>
                        <p className="text-gray-500 text-xs">{product.name}</p>
                      </div>
                      <div className="text-left flex-shrink-0">
                        <span className="text-white font-bold block">{formatPrice(product.price)}</span>
                        {product.originalPrice && <span className="text-gray-500 text-xs line-through block">{formatPrice(product.originalPrice)}</span>}
                        <button className="mt-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-xs font-semibold">
                          افزودن به سبد
                        </button>
                      </div>
                    </div>
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🔍</p>
            <h3 className="text-xl font-bold text-white mb-2">محصولی یافت نشد</h3>
            <p className="text-gray-400">فیلترها رو تغییر بده یا عبارت دیگه‌ای جستجو کن</p>
          </div>
        )}
      </div>
    </div>
  );
}
