"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ecosystem } from "@/data/homepage";

function Node({
  label,
  tone = "default",
}: {
  label: string;
  tone?: "default" | "strategy" | "growth";
}) {
  return (
    <div
      className={
        tone === "strategy"
          ? "rounded-xl border border-gold-400/40 bg-gold-500 px-6 py-3 text-sm font-bold tracking-wide text-white shadow-md"
          : tone === "growth"
            ? "rounded-xl bg-ink px-6 py-3 text-sm font-extrabold tracking-wide text-white shadow-lg"
            : "rounded-xl border border-ink/10 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-ink shadow-sm backdrop-blur-md hover:border-ink/20 transition-colors"
      }
    >
      {label}
    </div>
  );
}

function DrawLine({ d, viewBox, className }: { d: string; viewBox: string; className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="ecosystem-line" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d3ac3c" />
          <stop offset="100%" stopColor="#3d72c9" />
        </linearGradient>
      </defs>
      <motion.path
        d={d}
        stroke="url(#ecosystem-line)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
        whileInView={prefersReducedMotion ? undefined : { pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function ServiceEcosystem() {
  const [strategy, ...rest] = ecosystem.layers;
  const middle = rest.slice(0, 3);
  const [website, conversions, growth] = rest.slice(3);

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="ecosystem-heading">
      <Container>
        <SectionHeading
          headingId="ecosystem-heading"
          align="center"
          eyebrow="Service Ecosystem"
          title={ecosystem.heading}
          description={ecosystem.description}
          className="mx-auto"
          tone="light"
        />

        <Reveal className="mx-auto mt-14 max-w-2xl">
          <div className="flex justify-center">
            <Node label={strategy.label} tone="strategy" />
          </div>

          <DrawLine
            d="M120 0 V22 M30 22 H210 M30 22 V44 M120 22 V44 M210 22 V44"
            viewBox="0 0 240 44"
            className="mx-auto h-11 w-60"
          />

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            {middle.map((layer) => (
              <Node key={layer.label} label={layer.label} />
            ))}
          </div>

          <DrawLine
            d="M30 0 V22 H210 V0 M120 0 V22 M120 22 V44"
            viewBox="0 0 240 44"
            className="mx-auto h-11 w-60"
          />

          <div className="flex justify-center">
            <Node label={website.label} />
          </div>

          <DrawLine d="M60 0 V40" viewBox="0 0 120 40" className="mx-auto h-10 w-8" />

          <div className="flex justify-center">
            <Node label={conversions.label} />
          </div>

          <DrawLine d="M60 0 V40" viewBox="0 0 120 40" className="mx-auto h-10 w-8" />

          <div className="flex justify-center">
            <Node label={growth.label} tone="growth" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
