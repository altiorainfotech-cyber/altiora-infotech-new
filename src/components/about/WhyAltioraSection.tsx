"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { whyAltiora } from "@/data/about";
import { aboutImages } from "@/data/aboutImages";
import { CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export function WhyAltioraSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="why-altiora-heading">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-full -translate-x-1/2 -translate-y-1/2 bg-blue-500/5 blur-[120px]" />

      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                <span>The Altiora Advantage</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="why-altiora-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                {whyAltiora.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-2 text-base font-extrabold text-gold-700">
                {whyAltiora.subheading}
              </p>
              <p className="mt-2 text-sm sm:text-base font-medium text-muted">
                {whyAltiora.intro}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/80 shadow-xl group">
                <Image
                  src={aboutImages.whyAltiora}
                  alt="Why Altiora Infotech - Executive Canadian Tech Partner"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-bold text-white">
                  Scalable Growth Systems
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 6 3D Feature Matrix Tiles */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyAltiora.points.map((pt, idx) => (
            <Reveal key={idx} delay={0.05 * idx}>
              <TiltCard
                glowColor={idx % 2 === 0 ? "blue" : "gold"}
                className="group flex h-full items-start gap-3.5 rounded-2xl border border-white/80 bg-white/85 p-5 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/40 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-ink leading-snug pt-1">
                  {pt}
                </span>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-ink p-6 text-white shadow-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400/20 border border-gold-400/40 text-gold-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <p className="text-xs sm:text-sm font-extrabold leading-relaxed text-balance">
              {whyAltiora.conclusion}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
