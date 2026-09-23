"use client";

import { Eye, Search, TrendingUp, Award } from "lucide-react";

export function SeoPerformanceTracking() {
  return (
    <div className="rounded-3xl border border-ink/8 bg-gradient-to-br from-white via-blue-50/20 to-slate-50 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ink/8 pb-4 mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800">Telemetry Engine</span>
          <h3 className="text-lg sm:text-xl font-black text-ink mt-0.5">Live Organic Rank Index</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
          <span>ORGANIC PIPELINE: ACTIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-bold">
            <Search className="h-4 w-4" />
            <span>ORGANIC VISIBILITY</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">94.2%</div>
          <span className="text-[10px] font-bold text-emerald-600">↑ Top 3 Positions</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-mono font-bold">
            <Eye className="h-4 w-4" />
            <span>ORGANIC CTR</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">18.6%</div>
          <span className="text-[10px] font-bold text-emerald-600">Rich Snippets Active</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-bold">
            <Award className="h-4 w-4" />
            <span>DOMAIN AUTHORITY</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">DA 68</div>
          <span className="text-[10px] font-bold text-emerald-600">High Trust Flow</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-mono font-bold">
            <TrendingUp className="h-4 w-4" />
            <span>ORGANIC LEADS</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">3.5x</div>
          <span className="text-[10px] font-bold text-emerald-600">Conversion Multiplier</span>
        </div>
      </div>
    </div>
  );
}
