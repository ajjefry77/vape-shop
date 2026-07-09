"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, Flame, User, Phone } from "lucide-react";
import dynamic from "next/dynamic";

const PodModel = dynamic(() => import("@/components/three/PodModel"), { ssr: false });

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="min-h-screen flex">
      {/* Left side - 3D Pod */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-dark-card to-background" />
        <div className="absolute inset-0 mesh-gradient opacity-30" />

        <PodModel className="w-full h-full absolute inset-0" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 text-center p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            به جمع <span className="text-gradient">ویپرهای</span> ما بپیوند
          </h3>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            با ثبت‌نام از ارسال رایگان و تخفیف‌های ویژه بهره‌مند شو
          </p>
        </motion.div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 relative">
        <div className="absolute inset-0 mesh-gradient opacity-50" />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
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

          <h2 className="text-3xl font-bold text-white mb-2">ثبت نام</h2>
          <p className="text-gray-400 mb-8">حساب جدید بساز و از تخفیفا لذت ببر!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">نام و نام خانوادگی</label>
              <div className="relative">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="علی رضایی"
                  className="w-full pr-11 pl-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">ایمیل</label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="example@email.com"
                  className="w-full pr-11 pl-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">شماره موبایل</label>
              <div className="relative">
                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="09123456789"
                  dir="ltr"
                  className="w-full pr-11 pl-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300 text-right"
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
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
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

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">تکرار رمز عبور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type={showConfirm ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={(e) => update("confirmPassword", e.target.value)}
                  placeholder="••••••••"
                  className="w-full pr-11 pl-11 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-dark-border bg-dark-surface accent-neon-purple" />
              <span>
                <Link href="#" className="text-neon-purple hover:underline">قوانین و مقررات</Link> رو مطالعه کردم و می‌پذیرم
              </span>
            </label>

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
                  در حال ثبت نام...
                </div>
              ) : (
                "ثبت نام"
              )}
            </motion.button>
          </form>

          {/* Login link */}
          <p className="text-center text-gray-500 text-sm mt-8">
            قبلا ثبت نام کردید؟{" "}
            <Link href="/auth/login" className="text-neon-purple hover:text-neon-cyan transition-colors font-semibold">
              وارد شوید
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
