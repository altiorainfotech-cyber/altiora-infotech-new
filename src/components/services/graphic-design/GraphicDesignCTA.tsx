"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Palette } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { graphicDesignCta } from "@/data/graphicDesign";

export function GraphicDesignCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" aria-labelledby="graphic-cta-heading">
      <Container>
        <div className="relative rounded-3xl border border-blue-900/15 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/40 p-8 sm:p-14 text-ink shadow-2xl backdrop-blur-2xl overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />

          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-900/20 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-900 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>ELEVATE YOUR VISUAL IDENTITY</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="graphic-cta-heading" className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink leading-tight">
                {graphicDesignCta.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-base sm:text-lg text-muted font-medium leading-relaxed max-w-2xl">
                {graphicDesignCta.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={graphicDesignCta.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition-all hover:scale-105"
                >
                  <span>{graphicDesignCta.primaryCta.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={graphicDesignCta.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-900/15 bg-white/80 px-6 py-3.5 text-sm font-bold text-ink shadow-sm transition-all hover:bg-white"
                >
                  <span>{graphicDesignCta.secondaryCta.label}</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 pt-6 border-t border-blue-900/10 flex items-center gap-3 text-xs font-mono font-bold text-blue-900/80">
                <Palette className="h-4 w-4 text-blue-600" />
                <span>CREATING VISUAL BRAND SYSTEMS THAT STAND OUT WORLDWIDE</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
