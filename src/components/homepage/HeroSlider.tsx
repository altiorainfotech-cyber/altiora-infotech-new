"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedMetric } from "@/components/ui/AnimatedMetric";
import { heroSlides, growthMetrics } from "@/data/homepage";
import { HeroVideoBackground } from "./HeroVideoBackground";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
  Activity,
  TrendingUp,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const hero = heroSlides[0];
const PULSE_EVENT = "altiora-growth-pulse";

export function HeroSlider() {
  const [pulseFlash, setPulseFlash] = useState(false);

  useEffect(() => {
    const handlePulse = () => {
      setPulseFlash(true);
      window.setTimeout(() => setPulseFlash(false), 800);
    };
    window.addEventListener(PULSE_EVENT, handlePulse);
    return () => window.removeEventListener(PULSE_EVENT, handlePulse);
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-32 bg-slate-50/50"
      aria-label="Introduction"
    >
      {/* HTML5 Video Background Loop */}
      <HeroVideoBackground />

      <Container className="relative z-10">
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Floating Feature Badges (Desktop Side-by-side) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 0.8, duration: 0.6 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
            }}
            className="hidden lg:flex absolute -left-12 top-4 items-center gap-3 rounded-2xl border border-blue-500/30 bg-white/95 px-4.5 py-3 shadow-xl shadow-blue-500/15 backdrop-blur-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">+340% ROI Growth</div>
              <div className="text-[10px] font-semibold text-slate-500">Live Client Average</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 1.0, duration: 0.6 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 },
            }}
            className="hidden lg:flex absolute -right-12 top-10 items-center gap-3 rounded-2xl border border-blue-500/30 bg-white/95 px-4.5 py-3 shadow-xl shadow-blue-500/15 backdrop-blur-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-md">
              <Cpu className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">AI & GEO Engine</div>
              <div className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                Active Optimizing
              </div>
            </div>
          </motion.div>

          {/* Top Pill Badge */}
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/40 bg-gradient-to-r from-blue-50 via-white to-cyan-50 px-5 py-1.5 text-xs font-bold text-blue-800 shadow-[0_2px_20px_rgba(37,99,235,0.18)] backdrop-blur-md transition-all hover:scale-105">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span className="tracking-wider uppercase text-[11px] font-extrabold">{hero.eyebrow}</span>
            </div>
          </Reveal>

          {/* Main Headline */}
          <Reveal delay={0.45}>
            <h1 className="font-display mx-auto mt-7 max-w-4xl text-[clamp(2.7rem,6.5vw,5.2rem)] font-extrabold leading-[1.05] tracking-tight text-slate-900">
              Digital Marketing Engineered for{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
                Measurable Growth
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-90" />
              </span>
            </h1>
          </Reveal>

          {/* Subtext */}
          <Reveal delay={0.75}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg font-medium">
              {hero.description}
            </p>
          </Reveal>

          {/* Action Buttons */}
          <Reveal delay={0.95}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button
                href={hero.primaryCta.href}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/40 transition-all hover:shadow-xl hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </Button>

              {hero.secondaryCta && (
                <Button
                  href={hero.secondaryCta.href}
                  variant="secondary"
                  className="rounded-xl border border-slate-300 bg-white/95 px-8 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-50 hover:border-blue-400 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  {hero.secondaryCta.label}
                </Button>
              )}
            </div>
          </Reveal>
        </div>

        {/* Live Growth Telemetry Bar */}
        <Reveal delay={1.2}>
          <motion.div
            animate={
              pulseFlash
                ? {
                    boxShadow:
                      "0 0 0 4px rgba(6,182,212,0.35), 0 25px 60px -15px rgba(37,99,235,0.3)",
                    scale: 1.01,
                  }
                : {
                    boxShadow:
                      "0 20px 50px -15px rgba(37,99,235,0.12), 0 0 0 1px rgba(37,99,235,0.08)",
                    scale: 1,
                  }
            }
            transition={{ duration: 0.4 }}
            className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-2xl shadow-xl"
          >
            {/* Telemetry Header */}
            <div className="flex items-center justify-between border-b border-slate-200/70 bg-slate-50/90 px-6 py-3">
              <div className="flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                <motion.span
                  className="relative flex h-2.5 w-2.5"
                  animate={pulseFlash ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </motion.span>
                <span>Live Growth Telemetry</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-700">
                  <ShieldCheck className="h-3 w-3" /> Real-Time Verified
                </span>
                <Activity
                  className={`h-4 w-4 transition-colors ${
                    pulseFlash ? "text-cyan-600 animate-bounce" : "text-blue-600"
                  }`}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 divide-y divide-slate-200/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0 bg-gradient-to-b from-white to-slate-50/40">
              {growthMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="group relative flex items-center justify-between px-6 py-5 transition-colors hover:bg-blue-50/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-display text-2xl sm:text-3xl font-extrabold leading-none text-slate-900 tracking-tight">
                          <AnimatedMetric value={metric.value} />
                        </div>
                        <div className="mt-1.5 text-xs font-semibold text-slate-500">
                          {metric.label}
                        </div>
                      </div>
                    </div>

                    {/* Mini SVG Sparkline Chart */}
                    <div className="hidden sm:block opacity-60 group-hover:opacity-100 transition-opacity">
                      <svg className="h-8 w-14 text-blue-500" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path
                          d={
                            index === 0
                              ? "M2 16 L12 12 L22 14 L32 6 L48 2"
                              : index === 1
                              ? "M2 18 L14 14 L24 8 L36 10 L48 3"
                              : "M2 15 L14 10 L26 12 L38 5 L48 2"
                          }
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </Reveal>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400"
          >
            <span>Explore Growth Services</span>
            <ArrowDown className="h-3.5 w-3.5 text-blue-600" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
