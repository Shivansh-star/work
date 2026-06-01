export default function Loading() {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
        <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 md:p-10 min-h-[220px] animate-pulse" />
        <div className="md:col-span-1 lg:col-span-1 relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 min-h-[220px] animate-pulse" />
        
        {/* Course Skeleton Placeholders */}
        <div className="rounded-3xl border border-white/5 bg-white/5 h-[180px] animate-pulse" />
        <div className="rounded-3xl border border-white/5 bg-white/5 h-[180px] animate-pulse" />
        <div className="rounded-3xl border border-white/5 bg-white/5 h-[180px] animate-pulse" />
      </div>
    </div>
  );
}
