"use client";

import { Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brandingOverview } from "@/data/branding";

export function BrandingOverview() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="branding-overview-heading">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1.5 text-xs font-extrabold text-blue-800 backdrop-blur-md">
              <Layers className="h-3.5 w-3.5 text-blue-600" />
              <span>{brandingOverview.eyebrow}</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 id="branding-overview-heading" className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-4xl leading-[1.15]">
              {brandingOverview.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-sm sm:text-lg leading-relaxed text-muted font-medium">
              {brandingOverview.paragraph}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
