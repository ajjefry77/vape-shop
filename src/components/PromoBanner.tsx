"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Percent, Clock, Gift } from "lucide-react";

export default function PromoBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-dark-card to-neon-cyan/20" />
          <div className="absolute inset-0 mesh-gradient" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Percent className="w-5 h-5 text-neon-purple" />
                    <span className="text-neon-purple font-semibold">پیشنهاد ویژه</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                    <span className="text-gradient">۳۰٪ تخفیف</span>
                    <br />
                    روی تمامی سالت‌ها
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    فقط تا پایان هفته! از فرصت استفاده کن و بهترین سالت‌های نیکوتین رو با
                    قیمت باورنکردی تهیه کن.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4 text-neon-cyan" />
                      <span>تا پایان ۳ روز</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Gift className="w-4 h-4 text-neon-pink" />
                      <span>ارسال رایگان بالای ۵۰۰ هزار تومان</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(168, 85, 247, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold text-lg"
                  >
                    خرید با تخفیف
                  </motion.button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                  {/* Rotating rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-64 h-64 rounded-full border border-neon-purple/20"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 rounded-full border border-neon-cyan/20"
                    />
                  </div>
                  {/* Center display */}
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl font-black text-gradient mb-2">۳۰%</div>
                      <div className="text-gray-400 text-lg">تخفیف ویژه</div>
                      <div className="w-20 h-0.5 mx-auto mt-4 neon-line" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
