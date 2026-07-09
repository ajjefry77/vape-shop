"use client";

import { motion } from "framer-motion";
import { Flame, Globe, MessageCircle, Phone, MapPin, Mail } from "lucide-react";

const footerLinks = {
  "محصولات": ["ویپ ماد", "پاد سیستم", "سالت نیکوتین", "جویس", "کویل", "لوازم جانبی"],
  "خدمات": ["ضمانت اصالت", "ارسال سریع", "گارانتی بازگشت", "مشاوره تخصصی"],
  "درباره ما": ["معرفی فروشگاه", "شرایط و قوانین", "حریم خصوصی", "تماس با ما"],
};

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4 border-t border-white/5">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient">VAPEZONE</h3>
                <p className="text-[10px] text-gray-500 tracking-widest">PREMIUM VAPE SHOP</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              فروشگاه تخصصی ویپ و محصولات مرتبط با بیش از ۵۰۰ محصول اصل از معتبرترین
              برندهای جهانی. ارسال سریع به سراسر ایران.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: "#", label: "Website" },
                { icon: MessageCircle, href: "#", label: "Chat" },
                { icon: Phone, href: "#", label: "Phone" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-purple/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-4 text-sm">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-neon-purple text-sm transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="glass rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-neon-purple" />
              <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-neon-cyan" />
              <span>info@vapezone.ir</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neon-pink" />
              <span>تهران، خیابان ولیعصر</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center">
          <div className="neon-line mb-6" />
          <p className="text-gray-600 text-xs">
            © ۱۴۰۵ VAPEZONE. تمامی حقوق محفوظ است.
          </p>
          <p className="text-gray-700 text-[10px] mt-2">
            خرید فقط برای افراد بالای ۲۱ سال
          </p>
        </div>
      </div>
    </footer>
  );
}
