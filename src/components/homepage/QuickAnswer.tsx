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
        <TiltCard glowColor="blue" className="p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700">
                <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
                <span>{quickAnswer.eyebrow}</span>
              </div>
              <h2
                id="quick-answer-heading"
                className="mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-tight text-ink text-balance"
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

              {/* SECTION 06 VISUAL CONCEPT: Interactive Flow Diagram (Visibility -> Traffic -> Conversion -> Revenue) */}
              <div className="mt-8 rounded-2xl border border-ink/10 bg-surface/50 p-6 backdrop-blur-md">
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 mb-4">
                  Growth Value Flow
                </h3>

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
                        className="relative flex flex-col items-start rounded-xl border border-ink/10 bg-white p-4 shadow-sm hover:border-blue-400/40 transition-colors"
                      >
                        <div className="flex w-full items-center justify-between">
                          <span className="font-mono text-xs font-bold text-blue-600">{item.step}</span>
                          <Icon className="h-4 w-4 text-gold-500" />
                        </div>
                        <h4 className="mt-3 text-sm font-bold text-ink">{item.title}</h4>
                        <p className="mt-1 text-[11px] leading-tight text-muted">{item.desc}</p>

                        {idx < FLOW_STEPS.length - 1 && (
                          <ArrowRight className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-600 z-10 bg-white rounded-full p-0.5 border border-ink/10" />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                What we cover
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {quickAnswer.chips.map((chip) => (
                  <li key={chip}>
                    <span className="inline-flex items-center rounded-xl border border-ink/10 bg-white px-4 py-2 text-xs font-bold text-ink shadow-sm backdrop-blur-md hover:border-blue-400/40 hover:bg-blue-50 transition-colors">
                      {chip}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </TiltCard>
      </Container>
    </section>
  );
}
