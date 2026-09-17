"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { quickAnswer } from "@/data/homepage";
import { HelpCircle } from "lucide-react";

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
