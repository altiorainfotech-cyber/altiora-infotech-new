"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { quickAnswer } from "@/data/homepage";
import { HelpCircle, Eye, Users, Target, DollarSign, ArrowRight } from "lucide-react";

const FLOW_STEPS = [
  { step: "01", title: "Visibility", desc: "AEO/GEO & Search Dominance", icon: Eye },
  { step: "02", title: "Traffic", desc: "High-Intent Audience Capture", icon: Users },
  { step: "03", title: "Conversion", desc: "Optimized Web Engineering", icon: Target },
  { step: "04", title: "Revenue", desc: "Compounding Growth Scale", icon: DollarSign },
];

export function QuickAnswer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="quick-answer-heading">
      <Container>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <TiltCard glowColor="blue" className="p-8 sm:p-12 border-blue-900/10 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/40 shadow-2xl backdrop-blur-2xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700">
                <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
                <span>{quickAnswer.eyebrow}</span>
              </div>
              <h2
                id="quick-answer-heading"
                className="font-display mt-5 text-[clamp(1.85rem,3.2vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink text-balance"
              >
                {quickAnswer.question}
              </h2>
              <svg viewBox="0 0 120 4" className="mt-6 h-1 w-28" aria-hidden="true">
                <motion.line
                  x1="0"
                  y1="2"
                  x2="120"
                  y2="2"
                  stroke="#163f85"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
                  whileInView={prefersReducedMotion ? undefined : { pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-[65ch] text-base leading-relaxed text-muted sm:text-lg">
                {quickAnswer.answer}
              </p>

              {/* Connected Growth Pipeline — an animated light pulse travels the
                  full connector, reading as one continuous system rather than
                  four separate cards. */}
              <div className="mt-8 rounded-2xl border border-blue-900/10 bg-gradient-to-br from-white/95 via-surface/80 to-blue-50/30 p-6 backdrop-blur-xl shadow-lg">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 mb-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                  Growth Value Pipeline
                </h3>

                <div className="relative">
                  <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-gradient-to-r from-blue-300 via-gold-400 to-blue-400 sm:block" aria-hidden="true" />
                  {!prefersReducedMotion && (
                    <motion.div
                      className="absolute top-[22px] hidden h-1.5 w-6 rounded-full bg-gradient-to-r from-gold-400 to-blue-500 shadow-[0_0_12px_rgba(201,162,39,0.8)] sm:block"
                      animate={{ left: ["12.5%", "87.5%"] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                      aria-hidden="true"
                    />
                  )}

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {FLOW_STEPS.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.step}
                          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 15 }}
                          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.15 }}
                          className="relative flex flex-col items-start rounded-2xl border border-blue-900/10 bg-white/90 p-4.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="flex w-full items-center justify-between">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-md shadow-blue-600/20">
                              <Icon className="h-4.5 w-4.5" />
                            </span>
                            <span className="font-mono text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">{item.step}</span>
                          </div>
                          <h4 className="mt-3.5 text-sm font-bold text-ink">{item.title}</h4>
                          <p className="mt-1 text-[11px] leading-relaxed text-muted">{item.desc}</p>

                          {idx < FLOW_STEPS.length - 1 && (
                            <ArrowRight className="hidden sm:block absolute -right-3 top-5 h-5 w-5 text-blue-600 z-10 bg-white rounded-full p-1 border border-blue-200 shadow-sm" />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <h3 className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                Core Capabilities & Scope
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {quickAnswer.chips.map((chip) => (
                  <li key={chip}>
                    <span className="inline-flex items-center rounded-xl border border-blue-900/10 bg-white/90 px-4 py-2 text-xs font-bold text-ink shadow-xs backdrop-blur-md hover:border-blue-400/50 hover:bg-blue-50/80 hover:scale-105 transition-all">
                      {chip}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </TiltCard>
      </motion.div>
    </Container>
  </section>
  );
}
