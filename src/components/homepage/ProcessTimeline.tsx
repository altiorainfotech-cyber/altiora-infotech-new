"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/homepage";

export function ProcessTimeline() {
  const trackRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="process-heading">
      <Container>
        <SectionHeading headingId="process-heading" eyebrow="How We Work" title="A Clear Path From Strategy to Scale" />

        <ol ref={trackRef} className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-ink/10 lg:block" aria-hidden="true" />
          <motion.div
            className="absolute left-0 top-[22px] hidden h-px origin-left bg-gradient-to-r from-gold-500 to-blue-500 lg:block"
            style={{ scaleX: progress, right: 0 }}
            aria-hidden="true"
          />

          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} as="li" delay={index * 0.1} className="relative">
                <div className="relative z-10 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-blue-600 shadow-[0_4px_16px_-8px_rgba(10,11,13,0.15)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold tracking-[0.1em] text-gold-600">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
