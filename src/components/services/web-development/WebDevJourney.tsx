"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Compass, Palette, Code2, Zap, ShieldCheck, TrendingUp, RefreshCw } from "lucide-react";

const STAGES = [
  { id: "discovery", name: "UX Discovery", icon: Compass, desc: "Architecture & wireframing" },
  { id: "design", name: "UI Design", icon: Palette, desc: "Premium design system & component library" },
  { id: "development", name: "Next.js Build", icon: Code2, desc: "React 19 & TypeScript engineering" },
  { id: "vitals", name: "PageSpeed Tuning", icon: Zap, desc: "Core Web Vitals 100/100 optimization" },
  { id: "security", name: "Security & QA", icon: ShieldCheck, desc: "End-to-end testing & hardening" },
  { id: "conversion", name: "CRO & Launch", icon: TrendingUp, desc: "Conversion funnel deployment" },
  { id: "scale", name: "Scale & Maintain", icon: RefreshCw, desc: "Continuous performance monitoring" },
];

export function WebDevJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  return (
    <div ref={containerRef} className="relative rounded-3xl border border-ink/8 bg-gradient-to-br from-slate-900 via-blue-950 to-ink p-6 sm:p-8 text-white shadow-2xl overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">Section 03</span>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">Web Development Journey Architecture</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3.5 py-1 text-xs font-bold text-blue-300 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
          <span>Full-Stack Pipeline</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-3">
        {STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const stageThreshold = (idx / (STAGES.length - 1)) * 0.8;
          
          return (
            <motion.div
              key={stage.id}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-blue-400/40"
              style={{
                opacity: useTransform(smoothProgress, [Math.max(0, stageThreshold - 0.12), stageThreshold], [0.4, 1]),
                scale: useTransform(smoothProgress, [Math.max(0, stageThreshold - 0.12), stageThreshold], [0.94, 1]),
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-extrabold tracking-wider text-white/50">0{idx + 1}</span>
                {idx < STAGES.length - 1 && (
                  <div className="hidden lg:block h-0.5 w-full bg-gradient-to-r from-blue-500/50 to-gold-400/50 mx-2" />
                )}
              </div>

              <div className="my-3 flex items-center gap-3 lg:flex-col lg:items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 text-white shadow-md border border-white/20">
                  <Icon className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white leading-tight">{stage.name}</h4>
                  <p className="mt-1 text-[11px] text-white/70 leading-normal">{stage.desc}</p>
                </div>
              </div>

              <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden mt-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-gold-400 to-emerald-400"
                  style={{
                    width: useTransform(smoothProgress, [stageThreshold - 0.08, stageThreshold], ["0%", "100%"]),
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
