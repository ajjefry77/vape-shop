"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), { ssr: false });

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "۱۰,۰۰۰+", label: "مشتری راضی", color: "text-neon-purple" },
    { value: "۵۰۰+", label: "محصول متنوع", color: "text-neon-cyan" },
    { value: "۵۰+", label: "برند معتبر", color: "text-neon-pink" },
    { value: "۹۸٪", label: "رضایتمندی", color: "text-amber-400" },
  ];

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      <ParticleBackground />
      <div className="relative max-w-7xl mx-auto">
        <div className="glass-strong rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
                  className={`text-4xl sm:text-5xl font-black ${stat.color} mb-2`}
                  style={{ textShadow: `0 0 30px currentColor` }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
