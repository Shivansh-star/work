'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';

interface NavItemProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  onClick?: () => void;
}

export function NavItem({ icon, label, isActive, isCollapsed, onClick }: NavItemProps) {
  return (
    <div className="relative group" onClick={onClick}>
      <Link href="#" className="relative flex items-center h-12 px-3 rounded-xl z-10 w-full transition-colors hover:text-white text-white/60">
        {/* Active Morphic Indicator Background */}
        {isActive && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute inset-0 bg-white/10 rounded-xl z-0"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
        
        {/* Active Glowing Border indicator */}
        {isActive && (
          <motion.div
            layoutId="nav-indicator-border"
            className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-teal-400 rounded-r-full z-10"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
        
        <div className="relative z-10 flex items-center justify-center w-6 h-6 shrink-0 transition-colors">
          {icon}
        </div>
        
        {/* Text is hidden when collapsed on desktop/tablet, or completely hidden on mobile bottom bar */}
        <motion.span 
          className="ml-3 font-medium text-sm hidden md:block whitespace-nowrap overflow-hidden"
          initial={false}
          animate={{ 
            width: isCollapsed ? 0 : "auto", 
            opacity: isCollapsed ? 0 : 1,
            marginLeft: isCollapsed ? 0 : 12 
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>

        {/* Mobile Text (only shown on mobile if we wanted to, but we keep it icon only on bottom bar usually, let's keep it simple) */}
        <span className="md:hidden text-[10px] absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      </Link>
    </div>
  );
}
