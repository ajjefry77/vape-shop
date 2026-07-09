"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Truck, Shield, CreditCard } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  nameFa: string;
  price: number;
  image: string;
  qty: number;
}

const initialItems: CartItem[] = [
  { id: 1, name: "Geekvape Aegis Legend 3", nameFa: "جیک‌ویپ ایجیس لجند ۳", price: 1850000, image: "🎛️", qty: 1 },
  { id: 2, name: "Voopoo Drag S Pro", nameFa: "ووقو درگ اس پرو", price: 980000, image: "🔥", qty: 2 },
  { id: 6, name: "Salt Nic Ice Series", nameFa: "سالت نیکوتین آیس سریز", price: 185000, image: "🧊", qty: 3 },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal > 500000 ? 0 : 45000;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-gradient">سبد</span>
            <span className="text-white"> خرید</span>
          </h1>
          <p className="text-gray-400">{items.length} محصول در سبد شما</p>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <ShoppingBag className="w-20 h-20 text-gray-700 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">سبد خرید خالیه!</h3>
            <p className="text-gray-400 mb-8">محصولات مورد علاقه‌ات رو به سبد اضافه کن</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold text-lg"
            >
              مشاهده محصولات
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30, height: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="glass rounded-2xl p-4 sm:p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-br from-dark-card to-dark-surface flex items-center justify-center text-4xl flex-shrink-0">
                        {item.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold mb-1 truncate">{item.nameFa}</h3>
                        <p className="text-gray-500 text-xs truncate">{item.name}</p>
                        <p className="text-white font-bold mt-2">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                        <div className="flex items-center gap-2 glass rounded-xl">
                          <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-white font-bold text-sm w-6 text-center">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-neon-purple font-bold text-sm">{formatPrice(item.price * item.qty)}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:sticky lg:top-24 h-fit"
            >
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-6">خلاصه سفارش</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">جمع کل</span>
                    <span className="text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">هزینه ارسال</span>
                    <span className={shipping === 0 ? "text-neon-cyan font-semibold" : "text-white"}>
                      {shipping === 0 ? "رایگان" : formatPrice(shipping)}
                    </span>
                  </div>
                  {promoApplied && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-neon-cyan">تخفیف کد تخفیف (۱۰٪)</span>
                      <span className="text-neon-cyan">-{formatPrice(discount)}</span>
                    </motion.div>
                  )}
                  <div className="h-px bg-dark-border" />
                  <div className="flex justify-between">
                    <span className="text-white font-bold">مبلغ قابل پرداخت</span>
                    <span className="text-white font-black text-lg">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Promo code */}
                <div className="flex gap-2 mb-6">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="کد تخفیف"
                    className="flex-1 px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white text-sm placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { if (promoCode) setPromoApplied(true); }}
                    className="px-4 py-3 rounded-xl glass text-neon-purple text-sm font-semibold hover:bg-neon-purple/10 transition-all"
                  >
                    <Tag className="w-4 h-4" />
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold text-lg flex items-center justify-center gap-2 mb-4"
                >
                  <CreditCard className="w-5 h-5" />
                  تکمیل خرید
                </motion.button>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Truck, text: "ارسال رایگان بالای ۵۰۰K" },
                    { icon: Shield, text: "ضمانت اصالت" },
                    { icon: CreditCard, text: "پرداخت امن" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="text-center py-2">
                      <Icon className="w-4 h-4 text-neon-purple mx-auto mb-1" />
                      <span className="text-[10px] text-gray-500 leading-tight block">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
