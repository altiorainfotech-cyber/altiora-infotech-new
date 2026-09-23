"use client";

import { motion } from "framer-motion";
import { RefreshCw, ArrowRight, Database, Search, TestTube, Settings, TrendingUp } from "lucide-react";

const LOOP_STEPS = [
  { step: "DATA", icon: Database, desc: "Gather performance signals" },
  { step: "ANALYZE", icon: Search, desc: "Identify high-yield opportunities" },
  { step: "TEST", icon: TestTube, desc: "A/B test creative & audiences" },
  { step: "OPTIMIZE", icon: Settings, desc: "Adjust bids, budget & messaging" },
  { step: "SCALE", icon: TrendingUp, desc: "Expand winners across platforms" },
];

export function PaidAdsOptimizationLoop() {
  return (
    <div className="relative rounded-3xl border border-ink/8 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-6 sm:p-10 shadow-xl overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink/8 pb-5 mb-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800">Section 08</span>
          <h3 className="text-xl sm:text-2xl font-black text-ink mt-1 flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-blue-600 animate-spin" style={{ animationDuration: "8s" }} />
            The Campaign Optimization Flywheel
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-900 bg-blue-100/80 px-3.5 py-1.5 rounded-full border border-blue-200">
          <span>NOT LAUNCH → DONE</span>
          <span className="text-gold-600 font-black">|</span>
          <span>LAUNCH → LEARN → OPTIMIZE → SCALE</span>
        </div>
      </div>

      {/* Infinite Optimization Loop Path */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
        {LOOP_STEPS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              className="relative flex flex-col items-center text-center p-4 rounded-2xl border border-ink/8 bg-white shadow-sm transition-transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 text-gold-400 shadow-md mb-3">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono font-black text-blue-900 tracking-wider">{item.step}</span>
              <p className="mt-1 text-[11px] font-medium text-muted leading-tight">{item.desc}</p>

              {idx < LOOP_STEPS.length - 1 && (
                <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full border border-ink/10 text-gold-500 shadow-sm">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Continuous Loop Return Path Indicator */}
      <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-ink/70 font-mono bg-surface p-3 rounded-xl border border-ink/5">
        <span>SCALE</span>
        <ArrowRight className="h-4 w-4 text-gold-500 animate-pulse" />
        <span className="text-blue-800">FEEDS DATA BACK TO STRATEGY</span>
        <RefreshCw className="h-4 w-4 text-emerald-500" />
      </div>
    </div>
  );
}
