import { Sidebar } from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0a0a0f] text-white">
      <Sidebar />
      <div className="flex-1 transition-all duration-300 md:ml-[80px] lg:ml-[260px] pb-24 md:pb-0">
        {/* On mobile, pb-24 leaves room for bottom nav. On tablet, ml-80px. On desktop, ml-260px. */}
        <main className="p-4 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
