"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyAltiora } from "@/data/homepage";
import { Layers, Cpu, TrendingUp, Check, ArrowRight, Zap, Sparkles, Activity, ShieldCheck } from "lucide-react";

const STAGE_CONFIG = [
  {
    number: "01",
    phase: "STRATEGY & ARCHITECTURE",
    title: "Market Positioning & AI Readiness",
    desc: "We analyze competitor gap data, user intent vectors, and AI search entity maps to build a conversion-focused digital blueprint.",
    icon: Layers,
    metrics: [
      { label: "Entity Mapping", val: "100% Coverage" },
      { label: "Audit Accuracy", val: "99.4%" },
    ],
    highlights: ["AEO & GEO Keyword Graphing", "Technical Architecture Blueprint", "Funnel Friction Diagnostic"],
    color: "from-blue-600 to-indigo-700",
    glow: "rgba(37,99,235,0.25)",
  },
  {
    number: "02",
    phase: "HIGH-SPEED EXECUTION",
    title: "Next.js Web Tech & Ad Scale",
    desc: "Deploying high-speed edge web infrastructure paired with rapid creative testing to capture high-intent buyers across channels.",
    icon: Cpu,
    metrics: [
      { label: "Page Speed LCP", val: "< 480ms" },
      { label: "Creative Velocity", val: "12+ Ads / Wk" },
    ],
    highlights: ["Next.js 16 Edge Rendering", "Performance Paid Ads Scaling", "Server-Side CAPI Telemetry"],
    color: "from-blue-700 to-blue-950",
    glow: "rgba(22,63,133,0.3)",
  },
  {
    number: "03",
    phase: "REVENUE ACCELERATION",
    title: "Compounding Growth & Conversion",
    desc: "Optimizing conversion funnels, retargeting cohorts, and organic search citations to turn traffic into exponential enterprise revenue.",
    icon: TrendingUp,
    metrics: [
      { label: "Avg Revenue Lift", val: "3.2x ROI" },
      { label: "CAC Reduction", val: "-34%" },
    ],
    highlights: ["Conversion Rate Engine (CRO)", "AI Citation Dominance", "Automated ROAS Scaling"],
    color: "from-amber-600 to-gold-600",
    glow: "rgba(211,172,60,0.3)",
  },
];

export function WhyAltiora() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-transparent py-20 sm:py-24 lg:py-28" aria-labelledby="why-altiora-heading">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-gold-400/10 to-transparent blur-3xl opacity-70"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <SectionHeading
          headingId="why-altiora-heading"
          eyebrow="Growth Engine Architecture"
          title="Strategy → Execution → Scaling"
          description="A connected 3-stage growth operating system engineered to transform market presence into predictable revenue."
          align="center"
          className="mx-auto max-w-3xl"
          tone="light"
        />

        {/* High-Tech Presentation Stepper / Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {STAGE_CONFIG.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;

            return (
              <Reveal key={stage.number} delay={idx * 0.1}>
                <motion.div
                  onMouseEnter={() => setActiveStage(idx)}
                  onClick={() => setActiveStage(idx)}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-300 backdrop-blur-2xl cursor-pointer ${
                    isActive
                      ? "border-blue-500/60 bg-gradient-to-b from-white via-surface to-blue-50/40 shadow-[0_25px_60px_-15px_rgba(22,63,133,0.2)] ring-2 ring-blue-500/20"
                      : "border-blue-900/10 bg-white/80 hover:border-blue-400/40 hover:bg-white shadow-lg"
                  }`}
                >
                  {/* Top Accent Strip */}
                  <div
                    className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${stage.color} transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-40 group-hover:opacity-100"
                    }`}
                  />

                  <div>
                    {/* Card Header Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                          STAGE {stage.number}
                        </span>
                      </div>
                      {isActive && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                          <Activity className="h-3 w-3 text-emerald-600 animate-pulse" />
                          ACTIVE STAGE
                        </span>
                      )}
                    </div>

                    {/* Icon & Title */}
                    <div className="mt-6 flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${stage.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gold-600">
                          {stage.phase}
                        </span>
                        <h3 className="text-xl font-extrabold text-ink group-hover:text-blue-700 transition-colors">
                          {stage.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-xs leading-relaxed text-muted font-medium">
                      {stage.desc}
                    </p>

                    {/* Live Metric Badges */}
                    <div className="mt-6 grid grid-cols-2 gap-3 border-y border-ink/8 py-4">
                      {stage.metrics.map((m) => (
                        <div key={m.label} className="rounded-xl bg-blue-50/60 p-2.5 border border-blue-200/50">
                          <div className="text-[10px] font-bold text-muted uppercase">{m.label}</div>
                          <div className="text-base font-black font-mono text-blue-900 mt-0.5">{m.val}</div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="mt-5 space-y-2.5">
                      {stage.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs font-bold text-ink/85">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive Action Indicator */}
                  <div className="mt-8 pt-4 border-t border-ink/8 flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-blue-900">
                    <span className="flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-gold-500" />
                      <span>Phase Execution Specs</span>
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 text-blue-600" />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Connected System Flow Banner */}
        <Reveal delay={0.35} className="mt-10">
          <div className="rounded-2xl border border-blue-900/10 bg-gradient-to-r from-ink via-blue-950 to-blue-900 p-6 sm:p-8 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/15 blur-2xl" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-500 text-ink shadow-lg shadow-gold-500/20 font-black">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">Closed-Loop Revenue Continuity</h4>
                <p className="text-xs text-blue-200/80 mt-0.5 max-w-xl font-medium">
                  Every stage continuously passes live conversion telemetry back into Stage 01, refining market targeting and lowering acquisition cost indefinitely.
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="shrink-0 flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3.5 text-xs font-black text-ink shadow-lg shadow-gold-500/20 transition-all hover:from-gold-400 hover:to-gold-500 hover:scale-105 relative z-10"
            >
              <span>Explore Growth Blueprint</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
