"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedMetric } from "@/components/ui/AnimatedMetric";
import { aboutStats } from "@/data/about";
import { Network, Activity, TrendingUp, Compass, Cpu } from "lucide-react";

export function AboutMetrics() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-transparent py-12 sm:py-16" aria-label="Company Intelligence System">
      <Container>
        {/* Section Header with Intelligence Badge */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/80 px-4 py-1.5 text-xs font-extrabold text-blue-900 shadow-sm backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5 text-blue-600" />
            <span>Company Intelligence System</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-ink">
            Connected Canadian Growth Architecture
          </h2>
        </div>

        {/* Connected Visual Canvas Container */}
        <div className="relative rounded-3xl border border-ink/10 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-6 sm:p-10 shadow-2xl overflow-hidden">
          {/* SVG Interconnection Line Matrix */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <path d="M 120 150 Q 350 50 600 150 T 900 150" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 120 150 Q 350 250 600 150 T 900 150" fill="none" stroke="#d3ac3c" strokeWidth="2" />
              <circle cx="250" cy="150" r="4" fill="#2563eb" className="animate-ping" />
              <circle cx="500" cy="150" r="4" fill="#d3ac3c" className="animate-ping" />
              <circle cx="750" cy="150" r="4" fill="#2563eb" className="animate-ping" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat, index) => {
              const Icon = stat.icon;
              const isNumeric = /^\d/.test(stat.value) || /^[\$\+\-]\d/.test(stat.value);

              // Specific visual indicators for each metric type
              const METRIC_VISUALS = [
                { label: "Expanding Network", icon: Network, color: "text-blue-600", tag: "Projects Network" },
                { label: "Connected Sectors", icon: Compass, color: "text-gold-600", tag: "Industry Matrix" },
                { label: "Performance Curve", icon: TrendingUp, color: "text-emerald-600", tag: "Compounding ROI" },
                { label: "Geographic Signal", icon: Activity, color: "text-indigo-600", tag: "Canadian Reach" },
              ];

              const visualInfo = METRIC_VISUALS[index % METRIC_VISUALS.length];
              const VisualIcon = visualInfo.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={prefersReducedMotion ? undefined : { y: 25, opacity: 0 }}
                  whileInView={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/80 bg-white/90 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
                >
                  <div>
                    {/* Top Node Indicator */}
                    <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 via-blue-950 to-ink text-gold-400 shadow-md">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted flex items-center gap-1">
                        <VisualIcon className={`h-3 w-3 ${visualInfo.color}`} />
                        {visualInfo.tag}
                      </span>
                    </div>

                    {/* Metric Value */}
                    <div className="mt-5 text-[clamp(2.25rem,3.2vw,3rem)] font-black leading-none tracking-tight text-ink">
                      {isNumeric ? <AnimatedMetric value={stat.value} /> : <span>{stat.value}</span>}
                    </div>

                    <h3 className="mt-2 text-sm font-extrabold tracking-tight text-ink">
                      {stat.label}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-muted leading-relaxed">
                      {stat.subtext}
                    </p>
                  </div>

                  {/* Connected Signal Bar */}
                  <div className="mt-4 pt-3 border-t border-ink/5 flex items-center justify-between text-[10px] font-mono text-muted">
                    <span>Node 0{index + 1} Connected</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
