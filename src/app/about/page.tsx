"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Award, Users, MapPin, Phone, Mail, Clock, Target, Heart, Zap, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "اصالت محصول", desc: "تمامی محصولات با ضمانت اصالت و کیفیت از نمایندگی‌های رسمی" },
  { icon: Heart, title: "رضایت مشتری", desc: "اولویت ما رضایت شماست و همیشه آماده پاسخگویی هستیم" },
  { icon: Zap, title: "ارسال سریع", desc: "ارسال به سراسر کشور در کوتاه‌ترین زمان ممکن" },
  { icon: Shield, title: "امنیت خرید", desc: "پرداخت امن و مطمئن با درگاه‌های بانکی معتبر" },
];

const team = [
  { name: "امیر محمدی", role: "مدیر فروشگاه", emoji: "👨‍💼" },
  { name: "سارا احمدی", role: "کارشناس فروش", emoji: "👩‍💼" },
  { name: "محمد رضایی", role: "پشتیبانی", emoji: "👨‍💻" },
];

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-7xl mx-auto relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="text-gradient">درباره</span>
              <span className="text-white"> ما</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              VAPEZONE از سال ۱۳۹۸ با هدف ارائه بهترین محصولات ویپینگ با کیفیت و قیمت مناسب
              شروع به کار کرد. ما مفتخریم که توانسته‌ایم اعتماد هزاران مشتری را جلب کنیم.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "۸+", label: "سال تجربه", icon: Clock },
              { value: "۱۰K+", label: "مشتری راضی", icon: Users },
              { value: "۵۰۰+", label: "محصول متنوع", icon: Award },
              { value: "۵۰+", label: "برند معتبر", icon: Shield },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-6 h-6 text-neon-purple mx-auto mb-3" />
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">ارزش‌های</span>
            <span className="text-white"> ما</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 text-center group hover:border-neon-purple/20 transition-all duration-500"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center group-hover:shadow-lg group-hover:shadow-neon-purple/20 transition-shadow">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-dark-surface/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">تیم</span>
            <span className="text-white"> ما</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-6 text-center hover:border-neon-purple/20 transition-all"
              >
                <span className="text-5xl block mb-3">{member.emoji}</span>
                <h3 className="text-white font-bold">{member.name}</h3>
                <p className="text-neon-purple text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">تماس</span>
            <span className="text-white"> با ما</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, label: "آدرس", value: "تهران، خیابان ولیعصر، پلاک ۱۲۳", color: "text-neon-purple" },
              { icon: Phone, label: "تلفن", value: "۰۲۱-۱۲۳۴۵۶۷۸", color: "text-neon-cyan" },
              { icon: Mail, label: "ایمیل", value: "info@vapezone.ir", color: "text-neon-pink" },
              { icon: Clock, label: "ساعات کاری", value: "۱۰ صبح تا ۱۰ شب", color: "text-amber-400" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-3`} />
                <h4 className="text-white font-bold text-sm mb-1">{item.label}</h4>
                <p className="text-gray-400 text-xs">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">آماده‌ای تجربه کنی؟</h2>
          <p className="text-gray-400 mb-8">همین الان به جمع هزاران مشتری راضی ما بپیوند</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold text-lg hover:shadow-lg hover:shadow-neon-purple/30 transition-shadow"
          >
            شروع خرید
          </Link>
        </div>
      </section>
    </div>
  );
}
