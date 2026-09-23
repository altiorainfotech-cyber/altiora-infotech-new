"use client";

import { Award, Settings, TrendingUp, DollarSign } from "lucide-react";

export function BusinessConsultingPerformanceTracking() {
  return (
    <div className="rounded-3xl border border-ink/8 bg-gradient-to-br from-white via-blue-50/20 to-slate-50 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ink/8 pb-4 mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800">Telemetry Engine</span>
          <h3 className="text-lg sm:text-xl font-black text-ink mt-0.5">Live Advisory Index</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
          <span>GROWTH METRICS: OPTIMIZED</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-bold">
            <Settings className="h-4 w-4" />
            <span>EFFICIENCY LIFT</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">3.8x</div>
          <span className="text-[10px] font-bold text-blue-600">Workflow Automation</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-mono font-bold">
            <DollarSign className="h-4 w-4" />
            <span>COST OPTIMIZATION</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">-28%</div>
          <span className="text-[10px] font-bold text-blue-600">Operational Overhead</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-bold">
            <TrendingUp className="h-4 w-4" />
            <span>REVENUE GROWTH</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">+45%</div>
          <span className="text-[10px] font-bold text-blue-600">YoY Scaling</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-mono font-bold">
            <Award className="h-4 w-4" />
            <span>STRATEGIC CLARITY</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">99%</div>
          <span className="text-[10px] font-bold text-blue-600">Executive Alignment</span>
        </div>
      </div>
    </div>
  );
}
