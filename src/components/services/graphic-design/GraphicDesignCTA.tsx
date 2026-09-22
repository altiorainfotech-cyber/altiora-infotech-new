"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { graphicDesignCta } from "@/data/graphicDesign";
import { Sparkles } from "lucide-react";

export function GraphicDesignCTA() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="graphic-cta-heading">
      <Container className="relative z-10">
        <Reveal>
          <TiltCard
            glowColor="gold"
            className="group overflow-hidden border border-ink/8 shadow-[0_25px_60px_-15px_rgba(20,21,26,0.1)] transition-shadow duration-300 hover:shadow-[0_30px_70px_-15px_rgba(28,79,161,0.18)]"
          >
            {/* Negative margin cancels TiltCard's own padding so this wrapper owns the full bleed area unambiguously. */}
            <div className="relative -m-6 overflow-hidden rounded-2xl sm:-m-8">
              <div className="absolute inset-3 z-0 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-gold-50 sm:inset-5" />

              <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-400/15 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]" />

              <div className="relative z-10 p-8 text-center sm:p-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-50 px-4 py-1.5 text-xs font-black text-gold-700 shadow-2xs">
                  <Sparkles className="h-4 w-4 text-gold-500" />
                  <span>Let's Create Together</span>
                </div>

                <h2
                  id="graphic-cta-heading"
                  className="mx-auto mt-5 max-w-2xl text-3xl font-black tracking-tight text-ink sm:text-4xl text-balance leading-tight"
                >
                  {graphicDesignCta.heading}
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base font-medium leading-relaxed text-muted text-balance">
                  {graphicDesignCta.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    href={graphicDesignCta.primaryCta.href}
                    className="px-9 py-4 text-base font-extrabold shadow-xl shadow-blue-600/20 transition-transform duration-200 hover:scale-105"
                  >
                    {graphicDesignCta.primaryCta.label}
                  </Button>
                  <Button
                    href={graphicDesignCta.secondaryCta.href}
                    variant="secondary"
                    className="px-9 py-4 text-base font-extrabold bg-white"
                  >
                    {graphicDesignCta.secondaryCta.label}
                  </Button>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-10 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            </div>
          </TiltCard>
        </Reveal>
      </Container>
    </section>
  );
}
