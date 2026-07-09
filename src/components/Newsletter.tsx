"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Check } from "lucide-react";

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-3xl p-8 sm:p-12 text-center overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-neon-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />

          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center"
            >
              <Send className="w-7 h-7 text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              از تخفیف‌ها <span className="text-gradient">باخبر شو</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              با عضویت در خبرنامه، اولین نفری باش که از تخفیف‌ها و محصولات جدید مطلع میشه
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل خود رو وارد کنید..."
                  className="w-full px-6 py-4 rounded-2xl bg-dark-surface border border-dark-border text-white placeholder-gray-500 focus:border-neon-purple/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-semibold flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    ثبت شد!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    عضویت
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
