'use client';
import { motion, Variants } from 'framer-motion';
import { Flame } from 'lucide-react';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { 
    scale: 1.015,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

export function HeroTile({ name = "Student" }: { name?: string }) {
  return (
    <motion.section
      variants={itemVariants}
      whileHover="hover"
      className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#12121a] to-[#0a0a0f] p-8 md:p-10 md:col-span-2 lg:col-span-2 flex flex-col justify-center min-h-[220px]"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">{name}</span>
          </h1>
          <p className="text-white/60 text-lg">
            Ready to continue your learning journey?
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 self-start md:self-auto backdrop-blur-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
            <Flame size={24} strokeWidth={2} />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">12 Days</div>
            <div className="text-xs font-medium text-white/50 uppercase tracking-wider">Current Streak</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
