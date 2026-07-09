"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, ChevronLeft, Minus, Plus, Check } from "lucide-react";

const productData: Record<string, {
  name: string; nameFa: string; price: number; originalPrice: number | null;
  rating: number; reviews: number; badge: string; badgeColor: string;
  image: string; category: string; brand: string; description: string;
  features: string[]; specs: { label: string; value: string }[];
}> = {
  "1": { name: "Geekvape Aegis Legend 3", nameFa: "جیک‌ویپ ایجیس لجند ۳", price: 1850000, originalPrice: 2200000, rating: 4.9, reviews: 128, badge: "پرفروش", badgeColor: "bg-neon-purple", image: "🎛️", category: "ویپ ماد", brand: "Geekvape", description: "جیک‌ویپ ایجیس لجند ۳ یکی از مقاوم‌ترین ویپ‌های موجود در بازار است. با بدنه مقاوم در برابر آب، گرد و غبار و ضربه، مناسب برای استفاده روزمره و طولانی‌مدت.", features: ["مقاوم در برابر آب و گرد و غبار", "باتری دوگانه 18650", "توان خروجی تا 200 وات", "صفحه نمایش رنگی", "شارژ سریع USB-C"], specs: [{ label: "توان", value: "5-200W" }, { label: "مقاومت", value: "0.05-3 اهم" }, { label: "باتری", value: "2x 18650" }, { label: "وزن", value: "185 گرم" }] },
  "2": { name: "Voopoo Drag S Pro", nameFa: "ووقو درگ اس پرو", price: 980000, originalPrice: 1150000, rating: 4.8, reviews: 89, badge: "جدید", badgeColor: "bg-neon-cyan", image: "🔥", category: "پاد ماد", brand: "Voopoo", description: "ووقو درگ اس پرو با چیپست Gene TT 3.0 و توان خروجی 80 وات، تجربه‌ای بی‌نظیر از ویپینگ را فراهم می‌کند.", features: ["چیپست Gene TT 3.0", "صفحه نمایش 1.08 اینچی", "باتری 3000 میلی‌آمپر", "شارژ سریع 2 آمپر", "سازگار با PnP و TPP"], specs: [{ label: "توان", value: "5-80W" }, { label: "باتری", value: "3000mAh" }, { label: "ظرفیت مخزن", value: "2ml" }, { label: "وزن", value: "120 گرم" }] },
  "3": { name: "Nord 5 Pod Kit", nameFa: "نورد ۵ پاد کیت", price: 750000, originalPrice: 900000, rating: 4.7, reviews: 156, badge: "تخفیف", badgeColor: "bg-neon-pink", image: "⚡", category: "پاد", brand: "SMOK", description: "نورد ۵ با کویل RPM mesh و باتری 2000 میلی‌آمپر، یکی از محبوب‌ترین پادهای بازار است.", features: ["کویل RPM Mesh", "باتری 2000mAh", "ظرفیت 2ml", "شارژ USB-C", "تنظیم جریان هوا"], specs: [{ label: "توان", value: "5-30W" }, { label: "باتری", value: "2000mAh" }, { label: "ظرفیت", value: "2ml" }, { label: "وزن", value: "95 گرم" }] },
  "4": { name: "SMOK RPM 80 Pro", nameFa: "اسموک آر‌پی‌ام ۸۰ پرو", price: 680000, originalPrice: null, rating: 4.6, reviews: 203, badge: "", badgeColor: "", image: "💨", category: "پاد", brand: "SMOK", description: "RPM 80 Pro با توان 80 وات و سازگاری با کویل‌های متنوع RPM، انتخابی عالی برای ویپرهای حرفه‌ای.", features: ["توان 80 وات", "باتری قابل تعویض", "سازگار با RPM Mesh", "صفحه نمایش OLED", "شارژ سریع"], specs: [{ label: "توان", value: "1-80W" }, { label: "باتری", value: "3000mAh" }, { label: "ظرفیت", value: "3ml" }, { label: "وزن", value: "105 گرم" }] },
  "5": { name: "Elf Bar BC5000", nameFa: "الف بار بی‌سی ۵۰۰۰", price: 320000, originalPrice: 380000, rating: 4.5, reviews: 342, badge: "پرفروش", badgeColor: "bg-neon-purple", image: "✨", category: "ویپ یکبار مصرف", brand: "Elf Bar", description: "الف بار BC5000 با بیش از ۳۰ طعم متنوع و 5000 پاف، محبوب‌ترین ویپ یکبار مصرف بازار.", features: ["5000 پاف", "۳۰+ طعم متنوع", "باتری 650mAh", "بدون نیاز به شارژ", "طراحی کامپکت"], specs: [{ label: "پاف", value: "5000" }, { label: "باتری", value: "650mAh" }, { label: "نیکوتین", value: "5%" }, { label: "وزن", value: "35 گرم" }] },
  "6": { name: "Salt Nic Ice Series", nameFa: "سالت نیکوتین آیس سریز", price: 185000, originalPrice: 220000, rating: 4.8, reviews: 567, badge: "جدید", badgeColor: "bg-neon-cyan", image: "🧊", category: "سالت", brand: "Bar Juice", description: "سری آیس با طعم‌های خنک و نیکوتین 30 میلی‌گرم، مناسب برای پادهای کوچک.", features: ["نیکوتین 30mg", "طعم‌های خنک", "حجم 30ml", "کیفیت بالا", "سازگار با انواع پاد"], specs: [{ label: "نیکوتین", value: "30mg" }, { label: "حجم", value: "30ml" }, { label: " VG/PG", value: "50/50" }, { label: "طعم", value: "آیس" }] },
  "7": { name: "Wotofo Recurve AIO", nameFa: "ووتوفو رکرو ای‌آی‌او", price: 520000, originalPrice: null, rating: 4.4, reviews: 67, badge: "", badgeColor: "", image: "🎯", category: "پاد", brand: "Wotofo", description: "Rcurve AIO با طراحی منحصربفرد و کویل‌های D14، تجربه طعم واقعی را ارائه می‌دهد.", features: ["کویل D14 Mesh", "ظرفیت 3.5ml", "باتری 1600mAh", "جریان هوا قابل تنظیم", "بدون نیاز به اتومایزر"], specs: [{ label: "توان", value: "5-80W" }, { label: "باتری", value: "1600mAh" }, { label: "ظرفیت", value: "3.5ml" }, { label: "وزن", value: "110 گرم" }] },
  "8": { name: "Coil Master Tool Kit", nameFa: "ابزار کویل مستر", price: 450000, originalPrice: 550000, rating: 4.9, reviews: 89, badge: "تخفیف", badgeColor: "bg-neon-pink", image: "🔧", category: "لوازم", brand: "Coil Master", description: "ست کامل ابزار برای ساخت و نصب کویل‌های سفارشی با کیفیت بالا.", features: ["ابزار چاپی سیم", "پیچ‌گوشتی میکرو", "انبرک", "قیچی ضد زنگ", "کیف حمل"], specs: [{ label: "تعداد ابزار", value: "۱۵ عدد" }, { label: "جنس", value: "استیل ضد زنگ" }, { label: "کیف", value: "چرمی" }, { label: "وزن", value: "350 گرم" }] },
  "9": { name: "Lost Vape Centaurus", nameFa: "لاست ویپ سنتاوروس", price: 2100000, originalPrice: 2500000, rating: 4.9, reviews: 45, badge: "پرفروش", badgeColor: "bg-neon-purple", image: "🏆", category: "ویپ", brand: "Lost Vape", description: "سنتاوروس با چیپست Quest 2.0 و بدنه استیل ضد زنگ، نماد لوکس بودن در دنیای ویپ.", features: ["چیپست Quest 2.0", "توان 200W", "صفحه نمایش رنگی", "باتری دوگانه 18650", "بدنه استیل"], specs: [{ label: "توان", value: "5-200W" }, { label: "مقاومت", value: "0.1-5 اهم" }, { label: "باتری", value: "2x 18650" }, { label: "وزن", value: "200 گرم" }] },
  "10": { name: "Uwell Caliburn G3", nameFa: "یوول کالیبورن جی۳", price: 620000, originalPrice: null, rating: 4.8, reviews: 312, badge: "جدید", badgeColor: "bg-neon-cyan", image: "🌟", category: "پاد", brand: "Uwell", description: "کالیبورن G3 با فناوری Pro-FOCS و کویل‌های قابل تعویض، بهترین طعم را ارائه می‌دهد.", features: ["فناوری Pro-FOCS", "کویل قابل تعویض", "باتری 900mAh", "ظرفیت 2.5ml", "شارژ USB-C"], specs: [{ label: "توان", value: "25W" }, { label: "باتری", value: "900mAh" }, { label: "ظرفیت", value: "2.5ml" }, { label: "وزن", value: "50 گرم" }] },
  "11": { name: "Freemax M Pro 3", nameFa: "فری‌مکس ام پرو ۳", price: 890000, originalPrice: 1050000, rating: 4.7, reviews: 78, badge: "", badgeColor: "", image: "💎", category: "ویپ", brand: "Freemax", description: "ام پرو ۳ با کویل‌های MESH 904L X و سیستم Fill Max، طعم و بخار فوق‌العاده‌ای تولید می‌کند.", features: ["کویل MESH 904L X", "ظرفیت 5ml", "سیستم Fill Max", "سازگاری با چند نوع کویل", "دریچه هوای قابل تنظیم"], specs: [{ label: "ظرفیت", value: "5ml" }, { label: "قطر", value: "25mm" }, { label: "اتصال", value: "510" }, { label: "وزن", value: "65 گرم" }] },
  "12": { name: "Juice Head Peach", nameFa: "جویس هدل پیچ", price: 295000, originalPrice: null, rating: 4.6, reviews: 234, badge: "", badgeColor: "", image: "🍑", category: "جویس", brand: "Juice Head", description: "جویس پیچ با طعم واقعی هلو و نت‌های خنک، انتخابی عالی برای تابستان.", features: ["طعم هلو طبیعی", "نت خنک", "حجم 100ml", "VG/PG 80/20", "بدون نیکوتین"], specs: [{ label: "حجم", value: "100ml" }, { label: "VG/PG", value: "80/20" }, { label: "نیکوتین", value: "0mg" }, { label: "طعم", value: "هلو" }] },
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"features" | "specs">("features");
  const [added, setAdded] = useState(false);

  const product = productData[resolvedParams.slug] || productData["1"];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-gray-500 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">خانه</Link>
          <ChevronLeft className="w-3 h-3" />
          <Link href="/products" className="hover:text-white transition-colors">محصولات</Link>
          <ChevronLeft className="w-3 h-3" />
          <span className="text-gray-300">{product.nameFa}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 mesh-gradient opacity-30" />
              <div className="absolute w-48 h-48 rounded-full bg-neon-purple/10 blur-3xl top-1/4 right-1/4" />
              <div className="absolute w-32 h-32 rounded-full bg-neon-cyan/10 blur-2xl bottom-1/4 left-1/4" />
              <div className="relative flex items-center justify-center h-80">
                <span className="text-[120px]">{product.image}</span>
              </div>
              {product.badge && (
                <span className={`absolute top-4 right-4 ${product.badgeColor} text-white text-sm font-bold px-4 py-1.5 rounded-full`}>
                  {product.badge}
                </span>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-sm text-neon-purple font-medium mb-2">{product.brand}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{product.nameFa}</h1>
            <p className="text-gray-500 text-sm mb-4">{product.name}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-600"}`} />
                ))}
              </div>
              <span className="text-white font-semibold">{product.rating}</span>
              <span className="text-gray-500 text-sm">({product.reviews} نظر)</span>
            </div>

            {/* Price */}
            <div className="glass rounded-2xl p-6 mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
              {product.originalPrice && (
                <div className="mt-2 inline-block px-3 py-1 rounded-lg bg-neon-pink/20 text-neon-pink text-sm font-semibold">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}٪ تخفیف
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">{product.description}</p>

            {/* Quantity & Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-3 glass rounded-xl">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-white font-bold w-8 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <motion.button
                onClick={handleAdd}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold text-lg flex items-center justify-center gap-2"
              >
                {added ? <><Check className="w-5 h-5" /> اضافه شد!</> : <><ShoppingCart className="w-5 h-5" /> افزودن به سبد</>}
              </motion.button>

              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-neon-pink transition-colors">
                <Heart className="w-5 h-5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors">
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Features badges */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { icon: Truck, text: "ارسال رایگان" },
                { icon: Shield, text: "ضمانت اصالت" },
                { icon: RotateCcw, text: "گارانتی بازگشت" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="glass rounded-xl p-3 text-center">
                  <Icon className="w-5 h-5 text-neon-purple mx-auto mb-1" />
                  <span className="text-xs text-gray-400">{text}</span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="flex border-b border-dark-border">
                <button
                  onClick={() => setActiveTab("features")}
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === "features" ? "text-neon-purple border-b-2 border-neon-purple" : "text-gray-400 hover:text-white"}`}
                >
                  ویژگی‌ها
                </button>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === "specs" ? "text-neon-purple border-b-2 border-neon-purple" : "text-gray-400 hover:text-white"}`}
                >
                  مشخصات فنی
                </button>
              </div>
              <div className="p-6">
                {activeTab === "features" ? (
                  <ul className="space-y-3">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-3">
                    {product.specs.map((s, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-400">{s.label}</span>
                        <span className="text-white font-medium">{s.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
