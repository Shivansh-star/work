'use client';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { 
    scale: 1.015,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

export function ActivityTile() {
  // Generate a mock 7x12 grid of contribution dots
  const weeks = 12;
  const days = 7;
  const grid = Array.from({ length: weeks * days }).map((_, i) => {
    const intensity = Math.random();
    let bgClass = "bg-white/5";
    if (intensity > 0.8) bgClass = "bg-teal-400";
    else if (intensity > 0.5) bgClass = "bg-teal-500/60";
    else if (intensity > 0.3) bgClass = "bg-indigo-500/40";
    
    return bgClass;
  });

  return (
    <motion.article
      variants={itemVariants}
      whileHover="hover"
      className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#0d0d12] p-6 h-full flex flex-col md:col-span-1 lg:col-span-1 min-h-[220px]"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white/90">Activity</h3>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/60">
          Last 12 weeks
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="grid grid-flow-col gap-1.5 md:gap-2 justify-between">
          {Array.from({ length: weeks }).map((_, weekIdx) => (
            <div key={weekIdx} className="grid grid-rows-7 gap-1.5 md:gap-2">
              {Array.from({ length: days }).map((_, dayIdx) => {
                const index = weekIdx * days + dayIdx;
                const bgClass = grid[index];
                return (
                  <motion.div
                    key={dayIdx}
                    whileHover={{ scale: 1.5, zIndex: 10 }}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm ${bgClass} cursor-pointer transition-colors duration-300`}
                    title="Activity detail"
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
