"use client";

import { Award, ShieldCheck, Target, TrendingUp } from "lucide-react";

export function BrandingPerformanceTracking() {
  return (
    <div className="rounded-3xl border border-ink/8 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ink/8 pb-4 mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800">Telemetry Engine</span>
          <h3 className="text-lg sm:text-xl font-black text-ink mt-0.5">Live Brand Performance Index</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
          <span>BRAND EQUITY: HIGH</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-mono font-bold">
            <Award className="h-4 w-4" />
            <span>RECOGNITION</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">+127%</div>
          <span className="text-[10px] font-bold text-blue-600">Post-Rebrand Lift</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-bold">
            <ShieldCheck className="h-4 w-4" />
            <span>TRUST SCORE</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">+89%</div>
          <span className="text-[10px] font-bold text-emerald-600">Perceived Credibility</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-bold">
            <Target className="h-4 w-4" />
            <span>MARKET RANK</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">Top 10%</div>
          <span className="text-[10px] font-bold text-emerald-600">Category Leader</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-mono font-bold">
            <TrendingUp className="h-4 w-4" />
            <span>REVENUE IMPACT</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">3.0x</div>
          <span className="text-[10px] font-bold text-emerald-600">ROI Multiplier</span>
        </div>
      </div>
    </div>
  );
}
