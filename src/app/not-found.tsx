"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 mesh-gradient" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[150px] font-black text-gradient leading-none mb-4"
        >
          404
        </motion.div>
        <h1 className="text-3xl font-bold text-white mb-3">صفحه پیدا نشد!</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          متأسفانه صفحه‌ای که دنبالش هستی وجود نداره. شاید آدرس رو اشتباه زدی یا صفحه حذف شده.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-semibold flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            بازگشت به خانه
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 rounded-xl glass text-gray-300 hover:text-white font-semibold flex items-center gap-2 border border-white/10 hover:border-neon-purple/30 transition-all"
          >
            مشاهده محصولات
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
