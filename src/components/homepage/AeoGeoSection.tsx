"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { aeoGeo } from "@/data/homepage";

export function AeoGeoSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24" aria-labelledby="aeo-geo-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow tone="gold">{aeoGeo.eyebrow}</Eyebrow>
            <h2
              id="aeo-geo-heading"
              className="mt-4 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-ink text-balance"
            >
              {aeoGeo.heading}
            </h2>
            <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-muted sm:text-lg">
              {aeoGeo.description}
            </p>

            <div className="mt-8">
              <Button href="/services/aeo-geo">Explore AEO & GEO</Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-ink/10 bg-white p-8">
              <div className="rounded-lg border border-ink/12 bg-ink px-5 py-2.5 text-sm font-semibold text-white">
                Search Intent
              </div>

              <svg viewBox="0 0 4 90" className="h-[90px] w-1" aria-hidden="true">
                <defs>
                  <linearGradient id="aeo-line" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d3ac3c" />
                    <stop offset="100%" stopColor="#3d72c9" />
                  </linearGradient>
                </defs>
                <motion.line
                  x1="2"
                  y1="0"
                  x2="2"
                  y2="90"
                  stroke="url(#aeo-line)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
                  whileInView={prefersReducedMotion ? undefined : { pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </svg>

              <ul className="flex w-full flex-col gap-2.5">
                {aeoGeo.targets.map((target) => (
                  <li
                    key={target}
                    className="flex items-center justify-between rounded-lg border border-ink/10 bg-surface px-4 py-2.5 text-sm font-medium text-ink"
                  >
                    {target}
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
