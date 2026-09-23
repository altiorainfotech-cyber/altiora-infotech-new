"use client";

import { motion } from "framer-motion";
import { SearchCheck, BarChart3, Compass, Rocket, LineChart, RefreshCw } from "lucide-react";

const STAGES = [
  { step: "01", title: "DISCOVERY", icon: SearchCheck, desc: "Business audit, goals & operational bottlenecks" },
  { step: "02", title: "ANALYSIS", icon: BarChart3, desc: "Financial, market & competitor benchmark" },
  { step: "03", title: "STRATEGY", icon: Compass, desc: "Actionable roadmap & KPI architecture" },
  { step: "04", title: "EXECUTE", icon: Rocket, desc: "Hands-on implementation & workflow optimization" },
  { step: "05", title: "MEASURE", icon: LineChart, desc: "Track ROI, margins & team performance" },
  { step: "06", title: "SCALE", icon: RefreshCw, desc: "Iterative scaling & continuous advisory" },
];

export function BusinessConsultingJourney() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-ink p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">Consulting Pipeline</span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Strategic Growth Architecture</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-gold-400 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
          <span>6-STAGE CONSULTING PIPELINE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {STAGES.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all hover:border-gold-400/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black text-gold-400">{s.step}</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-950 text-gold-400 border border-white/20">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <h4 className="mt-3 text-sm font-black text-white">{s.title}</h4>
              <p className="mt-1 text-[11px] font-medium text-white/70 leading-snug">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
