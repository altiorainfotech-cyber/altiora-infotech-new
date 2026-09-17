"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { quickAnswer } from "@/data/homepage";

export function QuickAnswer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="quick-answer-heading">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{quickAnswer.eyebrow}</Eyebrow>
            <h2
              id="quick-answer-heading"
              className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-ink text-balance"
            >
              {quickAnswer.question}
            </h2>
            <svg viewBox="0 0 120 4" className="mt-6 h-1 w-28" aria-hidden="true">
              <motion.line
                x1="0"
                y1="2"
                x2="120"
                y2="2"
                stroke="#d3ac3c"
                strokeWidth="2"
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

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
              What we cover
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {quickAnswer.chips.map((chip) => (
                <li key={chip}>
                  <span className="inline-flex items-center rounded-md border border-ink/10 bg-surface px-3.5 py-1.5 text-sm font-medium text-ink">
                    {chip}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
