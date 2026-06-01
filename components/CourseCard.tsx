'use client';
import { motion, Variants } from 'framer-motion';
import { Course } from '@/types';
import { getIcon } from '@/lib/iconRegistry';
import { ProgressBar } from './ProgressBar';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { 
    scale: 1.015,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

export function CourseCard({ course }: { course: Course }) {
  const Icon = getIcon(course.icon_name);

  return (
    <motion.article
      variants={itemVariants}
      whileHover="hover"
      initial="hidden"
      animate="show"
      className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-[#0d0d12] p-6 h-[180px] group cursor-pointer"
    >
      {/* Noise Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Hover Glowing Border via Pseudo-element trick (rendered as an absolute div here for framer motion control) */}
      <motion.div 
        className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-indigo-500/40 via-teal-400/10 to-transparent -z-10"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[#0d0d12] -z-10" />

      <div className="z-10 flex flex-col h-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-teal-400 mb-4 shadow-[0_0_15px_rgba(45,212,191,0.1)] transition-colors group-hover:bg-teal-500/10">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-lg font-medium text-white/90 line-clamp-2 leading-tight mb-2">
          {course.title}
        </h3>
        
        <ProgressBar progress={course.progress} />
      </div>
    </motion.article>
  );
}
