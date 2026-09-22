"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { aboutCta } from "@/data/about";
import { aboutImages } from "@/data/aboutImages";
import { Sparkles, ArrowRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="about-cta-heading">
      <Container className="relative z-10">
        <Reveal>
          <TiltCard
            glowColor="gold"
            className="group relative overflow-hidden rounded-3xl border border-white/80 bg-ink text-white p-8 text-center sm:p-16 shadow-[0_25px_60px_-15px_rgba(20,21,26,0.25)] transition-shadow duration-300 hover:shadow-[0_30px_70px_-15px_rgba(28,79,161,0.35)]"
          >
            {/* Background Visual Image with Dark Cinematic Gradient Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={aboutImages.cta}
                alt="Grow your business with Altiora Infotech Canada"
                fill
                className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-ink/90 to-blue-900/90" />
            </div>

            {/* Ambient Lighting Spheres */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-400/25 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-blue-500/25 blur-[90px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/20 px-4 py-1.5 text-xs font-black text-gold-300 shadow-2xs backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-gold-400" />
                <span>Next Steps</span>
              </div>

              <h2
                id="about-cta-heading"
                className="mx-auto mt-5 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl text-balance leading-tight"
              >
                {aboutCta.heading}
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base font-medium leading-relaxed text-slate-300 text-balance">
                {aboutCta.description}
              </p>

              <div className="mt-8 flex items-center justify-center">
                <Button
                  href={aboutCta.ctaHref}
                  className="px-9 py-4 text-base font-extrabold shadow-xl shadow-blue-600/30 transition-transform duration-200 hover:scale-105"
                >
                  <span className="flex items-center gap-2.5">
                    {aboutCta.ctaLabel}
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Bottom Metallic Border Accent */}
            <div className="pointer-events-none absolute inset-x-10 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          </TiltCard>
        </Reveal>
      </Container>
    </section>
  );
}
