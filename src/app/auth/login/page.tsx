"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, Flame, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const PodModel = dynamic(() => import("@/components/three/PodModel"), { ssr: false });

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 relative">
        <div className="absolute inset-0 mesh-gradient opacity-50" />

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-md"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">VAPEZONE</h1>
              <p className="text-[10px] text-gray-500 -mt-1 tracking-widest">PREMIUM VAPE SHOP</p>
            </div>
          </Link>

          <h2 className="text-3xl font-bold text-white mb-2">ورود به حساب</h2>
          <p className="text-gray-400 mb-8">خوش اومدی! اطلاعاتت رو وارد کن.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">ایمیل</label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full pr-11 pl-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">رمز عبور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pr-11 pl-11 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-dark-border bg-dark-surface accent-neon-purple" />
                مرا به خاطر بسپار
              </label>
              <a href="#" className="text-sm text-neon-purple hover:text-neon-cyan transition-colors">
                رمز عبور را فراموش کردید؟
              </a>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold text-lg relative overflow-hidden disabled:opacity-70"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  در حال ورود...
                </div>
              ) : (
                "ورود"
              )}
            </motion.button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-dark-border" />
              <span className="text-xs text-gray-500">یا با</span>
              <div className="flex-1 h-px bg-dark-border" />
            </div>

            {/* Social login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="py-3 rounded-xl glass text-gray-400 text-sm font-medium hover:text-white hover:border-neon-purple/20 border border-transparent transition-all duration-300"
              >
                Google
              </button>
              <button
                type="button"
                className="py-3 rounded-xl glass text-gray-400 text-sm font-medium hover:text-white hover:border-neon-purple/20 border border-transparent transition-all duration-300"
              >
                Telegram
              </button>
            </div>
          </form>

          {/* Register link */}
          <p className="text-center text-gray-500 text-sm mt-8">
            حساب ندارید؟{" "}
            <Link href="/auth/register" className="text-neon-purple hover:text-neon-cyan transition-colors font-semibold">
              ثبت نام کنید
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Left side - 3D Pod */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-background via-dark-card to-background" />
        <div className="absolute inset-0 mesh-gradient opacity-30" />

        <PodModel className="w-full h-full absolute inset-0" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 text-center p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            به دنیای <span className="text-gradient">ویپینگ</span> خوش اومدی
          </h3>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            با ورود به حسابت از تخفیف‌ها و پیشنهادات ویژه بهره‌مند شو
          </p>
        </motion.div>
      </div>
    </div>
  );
}
