'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Dashboard Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 rounded-3xl border border-red-500/20 bg-red-500/5">
      <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 mb-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
      </div>
      <h2 className="text-2xl font-semibold text-white mb-2">Connection Interrupted</h2>
      <p className="text-white/60 max-w-md mb-8">
        We encountered an issue while connecting to the learning database. This might be a temporary network hiccup or missing credentials.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
