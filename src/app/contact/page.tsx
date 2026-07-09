"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">تماس</span>
            <span className="text-white"> با ما</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            سوالی داری؟ ما اینجاییم کمکت کنیم. پیام بذار تا سریع جواب بدیم.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, title: "تلفن", value: "۰۲۱-۱۲۳۴۵۶۷۸", sub: "شنبه تا جمعه، ۱۰ تا ۲۲", color: "text-neon-purple", bg: "from-purple-500/20 to-indigo-500/20" },
              { icon: Mail, title: "ایمیل", value: "info@vapezone.ir", sub: "پاسخ ظرف ۲۴ ساعت", color: "text-neon-cyan", bg: "from-cyan-500/20 to-blue-500/20" },
              { icon: MapPin, title: "آدرس", value: "تهران، ولیعصر، پلاک ۱۲۳", sub: "فروشگاه حضوری", color: "text-neon-pink", bg: "from-pink-500/20 to-rose-500/20" },
              { icon: Clock, title: "ساعات کاری", value: "۱۰ صبح تا ۱۰ شب", sub: "همه روزه", color: "text-amber-400", bg: "from-amber-500/20 to-orange-500/20" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-neon-purple/20 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Quick contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="text-white font-bold text-sm mb-3">ارتباط سریع</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="py-2.5 rounded-xl glass text-xs text-gray-400 hover:text-white hover:border-neon-purple/20 border border-transparent transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5" />
                  تلگرام
                </button>
                <button className="py-2.5 rounded-xl glass text-xs text-gray-400 hover:text-white hover:border-neon-purple/20 border border-transparent transition-all flex items-center justify-center gap-2">
                  <Headphones className="w-3.5 h-3.5" />
                  واتساپ
                </button>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-6">پیام بفرست</h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">پیامت ارسال شد!</h3>
                  <p className="text-gray-400">به زودی باهات تماس می‌گیریم</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">نام</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="نام شما"
                        className="w-full px-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">ایمیل</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="example@email.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">تلفن</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        className="w-full px-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">موضوع</label>
                      <select
                        value={form.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        className="w-full appearance-none px-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white focus:border-neon-purple/50 focus:outline-none cursor-pointer"
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="order">پیگیری سفارش</option>
                        <option value="support">پشتیبانی فنی</option>
                        <option value="return">گارانتی و بازگشت</option>
                        <option value="wholesale">خرید عمده</option>
                        <option value="other">سایر</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">پیام</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={5}
                      placeholder="پیام خود رو بنویسید..."
                      className="w-full px-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-600 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold text-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    ارسال پیام
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
