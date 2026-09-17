"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedMetric } from "@/components/ui/AnimatedMetric";
import { TiltCard } from "@/components/ui/TiltCard";
import { growthMetrics } from "@/data/homepage";
import { TrendingUp, ShieldCheck } from "lucide-react";

const MARQUEE_WORDS = [
  "Performance Marketing",
  "SEO Optimization",
  "Paid Advertising",
  "AEO & GEO Search",
  "Enterprise Web Engineering",
  "Brand Architecture",
  "Data-Driven Growth Engine",
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
            return (
              <TiltCard
                key={metric.label}
                glowColor={index % 2 === 0 ? "gold" : "blue"}
                className="flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white border border-blue-400/30 shadow-xs">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span>{metric.label}</span>
                  </div>
                  <ShieldCheck className="h-4 w-4 text-muted/40" />
                </div>

                <div className="mt-6 overflow-hidden">
                  <motion.div
                    initial={prefersReducedMotion ? undefined : { y: "100%", opacity: 0 }}
                    whileInView={prefersReducedMotion ? undefined : { y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(2.75rem,6vw,4.5rem)] font-black leading-none tracking-tight text-ink"
                  >
                    <AnimatedMetric value={metric.value} />
                  </motion.div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-muted font-medium border-t border-ink/8 pt-3">
                  <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
                  <span>Verified performance tracking</span>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </Container>

      {/* Marquee Banner */}
      <div className="relative mt-16 overflow-hidden border-y border-ink/8 py-4 bg-surface/60 backdrop-blur-md [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-12">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="flex items-center gap-12 text-xs font-bold uppercase tracking-[0.24em] text-ink/35"
            >
              {word}
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500/70" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
