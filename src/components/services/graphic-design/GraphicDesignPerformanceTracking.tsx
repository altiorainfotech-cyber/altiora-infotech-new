"use client";

import { Sparkles, Palette, Layers, CheckCircle2 } from "lucide-react";

export function GraphicDesignPerformanceTracking() {
  return (
    <div className="rounded-3xl border border-ink/8 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ink/8 pb-4 mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800">Telemetry Engine</span>
          <h3 className="text-lg sm:text-xl font-black text-ink mt-0.5">Live Brand Design Index</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
          <span>DESIGN SYSTEM: ACTIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-mono font-bold">
            <Sparkles className="h-4 w-4" />
            <span>BRAND RECALL</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">96.8%</div>
          <span className="text-[10px] font-bold text-blue-600">↑ High Visual Recognition</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-bold">
            <Palette className="h-4 w-4" />
            <span>FORMAT COMPATIBILITY</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">100%</div>
          <span className="text-[10px] font-bold text-emerald-600">SVG, EPS, PNG, PDF</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-bold">
            <Layers className="h-4 w-4" />
            <span>ASSET LIBRARY</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">30+</div>
          <span className="text-[10px] font-bold text-emerald-600">Templates & Tokens</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-mono font-bold">
            <CheckCircle2 className="h-4 w-4" />
            <span>COMMERCIAL RIGHTS</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">Full</div>
          <span className="text-[10px] font-bold text-emerald-600">100% Client Ownership</span>
        </div>
      </div>
    </div>
  );
}
