'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavItem } from './NavItem';
import { Home, Compass, BookOpen, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: <Home size={20} />, id: 'dashboard' },
  { label: 'Discover', icon: <Compass size={20} />, id: 'discover' },
  { label: 'My Learning', icon: <BookOpen size={20} />, id: 'learning' },
  { label: 'Settings', icon: <Settings size={20} />, id: 'settings' },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setIsCollapsed(true);
      } else if (window.innerWidth > 1024) {
        setIsCollapsed(false);
      }
    };
    
    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-[#0a0a0f]/80 backdrop-blur-xl border-t border-white/10 z-50 flex items-center justify-around px-4 pb-safe">
        {NAV_ITEMS.map((item) => (
          <div key={item.id} className="w-16 flex justify-center">
            <NavItem
              icon={item.icon}
              label={item.label}
              isActive={activeItem === item.id}
              onClick={() => setActiveItem(item.id)}
              isCollapsed={true}
            />
          </div>
        ))}
      </nav>
    );
  }

  return (
    <motion.aside
      className="fixed top-0 left-0 bottom-0 bg-[#0d0d12] border-r border-white/5 z-40 flex flex-col hidden md:flex"
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center h-20 px-6 pt-2 mb-6 justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center shrink-0">
            <div className="w-3 h-3 bg-[#0d0d12] rounded-sm transform rotate-45" />
          </div>
          <motion.span 
            className="font-bold text-lg text-white tracking-wide whitespace-nowrap"
            initial={false}
            animate={{ opacity: isCollapsed ? 0 : 1, display: isCollapsed ? 'none' : 'block' }}
          >
            Nexus
          </motion.span>
        </div>
      </div>

      <div className="flex-1 px-4 space-y-2">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </div>

      <div className="p-4 mt-auto">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-center w-full h-10 rounded-xl bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </motion.aside>
  );
}
