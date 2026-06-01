'use client';
import { motion } from 'framer-motion';

export function SkeletonCard() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 h-[180px] flex flex-col justify-between"
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      <div className="w-12 h-12 rounded-xl bg-white/10 mb-4" />
      <div className="space-y-2 mb-4">
        <div className="w-3/4 h-5 bg-white/10 rounded-md" />
        <div className="w-1/2 h-5 bg-white/10 rounded-md" />
      </div>
      <div className="w-full h-1.5 bg-white/10 rounded-full" />
    </motion.div>
  );
}
