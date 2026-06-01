'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <div ref={ref} className="flex items-center gap-3 w-full mt-auto">
      <div 
        className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden relative"
        role="progressbar" 
        aria-valuenow={progress} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? progress / 100 : 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        />
      </div>
      <span className="text-xs font-medium text-white/50 w-8 text-right font-mono">{progress}%</span>
    </div>
  );
}
