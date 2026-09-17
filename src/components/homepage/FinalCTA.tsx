"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { finalCta } from "@/data/homepage";
import { Sparkles, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20 sm:py-24 lg:py-28" aria-labelledby="final-cta-heading">
      <Container className="relative">
        <Reveal>
          <TiltCard glowColor="blue" className="p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(61,114,201,0.14),transparent_70%)]" aria-hidden="true" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50 px-4 py-1 text-xs font-bold text-blue-700">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>Let&apos;s Build Together</span>
              </div>

              <h2
                id="final-cta-heading"
                className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-ink text-balance"
              >
                {finalCta.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {finalCta.description}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={finalCta.primaryCta.href}
                  className="px-8 py-3.5 text-sm"
                >
                  <span className="flex items-center gap-2 font-bold">
                    {finalCta.primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button
                  href={finalCta.secondaryCta.href}
                  variant="secondary"
                  className="border-ink/15 bg-white text-ink hover:bg-surface shadow-sm px-8 py-3.5 text-sm"
                >
                  {finalCta.secondaryCta.label}
                </Button>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </Container>
    </section>
  );
}
