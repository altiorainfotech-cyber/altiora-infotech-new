"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Eye, TrendingUp } from "lucide-react";

export function InfluencerPerformanceTracking() {
  return (
    <div className="rounded-3xl border border-ink/8 bg-gradient-to-br from-white via-blue-50/20 to-slate-50 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ink/8 pb-4 mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800">Telemetry Engine</span>
          <h3 className="text-lg sm:text-xl font-black text-ink mt-0.5">Live Creator Engagement Index</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
          <span>VIRAL REACH: ACTIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-bold">
            <Eye className="h-4 w-4" />
            <span>IMPRESSIONS</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">4.8M+</div>
          <span className="text-[10px] font-bold text-emerald-600">↑ 142% vs organic</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold">
            <Heart className="h-4 w-4" />
            <span>ENGAGEMENT</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">8.4%</div>
          <span className="text-[10px] font-bold text-emerald-600">3.2x Industry Avg</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-mono font-bold">
            <Share2 className="h-4 w-4" />
            <span>UGC SHARES</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">42.5K</div>
          <span className="text-[10px] font-bold text-emerald-600">High Virality</span>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-mono font-bold">
            <TrendingUp className="h-4 w-4" />
            <span>CONVERSIONS</span>
          </div>
          <div className="mt-2 text-2xl font-black text-ink">3.9x</div>
          <span className="text-[10px] font-bold text-emerald-600">ROAS Multiplier</span>
        </div>
      </div>
    </div>
  );
}
