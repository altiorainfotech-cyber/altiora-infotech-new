"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedMetric } from "@/components/ui/AnimatedMetric";
import { TiltCard } from "@/components/ui/TiltCard";
import { growthMetrics } from "@/data/homepage";
import { TrendingUp, ShieldCheck, Activity } from "lucide-react";

const MARQUEE_WORDS = [
  "Performance Marketing",
  "SEO Optimization",
  "Paid Advertising",
  "AEO & GEO Search",
  "Enterprise Web Engineering",
  "Brand Architecture",
  "Data-Driven Growth Engine",
];

const MICRO_CHARTS = [
  "M 0 35 Q 25 10 50 25 T 100 5 T 150 20 T 200 0",
  "M 0 30 Q 30 35 60 15 T 120 20 T 180 5 T 200 2",
  "M 0 40 Q 40 20 80 30 T 140 10 T 200 5",
];

export function GrowthMetrics() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "start 0.25"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-label="Growth metrics">
      <Container>
        <div ref={sectionRef} className="relative h-px w-full bg-ink/10">
          <motion.div
            className="absolute inset-y-0 left-0 h-px origin-left bg-gradient-to-r from-gold-500 via-blue-500 to-gold-500 shadow-[0_0_10px_rgba(201,162,39,0.5)]"
            style={{ scaleX: lineScale, right: 0 }}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {growthMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const sparklineD = MICRO_CHARTS[index % MICRO_CHARTS.length];

            return (
              <TiltCard
                key={metric.label}
                glowColor={index % 2 === 0 ? "gold" : "blue"}
                className="flex flex-col justify-between relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white border border-blue-400/30 shadow-xs">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span>{metric.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE
                  </div>
                </div>

                <div className="mt-6 flex items-baseline justify-between overflow-hidden">
                  <motion.div
                    initial={prefersReducedMotion ? undefined : { y: "100%", opacity: 0 }}
                    whileInView={prefersReducedMotion ? undefined : { y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(2.75rem,6vw,4.25rem)] font-black leading-none tracking-tight text-ink"
                  >
                    <AnimatedMetric value={metric.value} />
                  </motion.div>
                </div>

                {/* SVG Telemetry Micro-Chart Sparkline */}
                <div className="mt-4 h-12 w-full relative">
                  <svg className="h-full w-full overflow-visible" viewBox="0 0 200 40" fill="none">
                    <defs>
                      <linearGradient id={`sparkline-grad-${index}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#163f85" />
                        <stop offset="100%" stopColor="#d3ac3c" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d={sparklineD}
                      stroke={`url(#sparkline-grad-${index})`}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
                      whileInView={prefersReducedMotion ? undefined : { pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.15, ease: "easeInOut" }}
                    />
                  </svg>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-muted font-medium border-t border-ink/8 pt-3">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
                    <span>Growth Signal Verified</span>
                  </div>
                  <ShieldCheck className="h-3.5 w-3.5 text-blue-600/60" />
                </div>
              </TiltCard>
            );
          })}
        </div>
      </Container>

      {/* Service Signal Marquee Banner (Section 05) */}
      <div className="relative mt-16 overflow-hidden border-y border-ink/8 py-4 bg-surface/60 backdrop-blur-md [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Animated Connecting SVG Signal Path */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 pointer-events-none opacity-20 bg-gradient-to-r from-blue-600 via-gold-500 to-blue-600" />

        <div className="flex w-max animate-marquee gap-12 relative z-10">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="flex items-center gap-12 text-xs font-bold uppercase tracking-[0.24em] text-ink/40 hover:text-blue-600 transition-colors"
            >
              {word}
              <Activity className="h-3 w-3 text-gold-500 animate-pulse" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
