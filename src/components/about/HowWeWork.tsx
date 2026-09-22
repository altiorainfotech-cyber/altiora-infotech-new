"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { howWeWork } from "@/data/about";
import { aboutImages } from "@/data/aboutImages";
import { Sparkles, Workflow } from "lucide-react";

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="how-we-work-heading">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-1/3 top-1/2 -z-10 h-[450px] w-[700px] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-gold-400/10 to-transparent blur-3xl opacity-70" />

      <Container>
        {/* Section Header & Process Visual */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center border-b border-ink/8 pb-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
                <Workflow className="h-3.5 w-3.5 text-blue-600" />
                <span>Performance-Driven Methodology</span>
              </div>
              <h2 id="how-we-work-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                {howWeWork.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted font-medium">
                {howWeWork.intro}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/80 shadow-xl group">
                <Image
                  src={aboutImages.howWeWork}
                  alt="Altiora Strategic Process & Workflow Planning"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-bold text-white">
                  Structured Growth Strategy
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 5-Step Connected 3D Process Stepper Flow */}
        <div className="mt-12 relative">
          {/* Connected glowing line in background for desktop */}
          <div className="pointer-events-none absolute top-1/2 left-4 right-4 hidden -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-600 via-gold-400 to-blue-600 opacity-30 lg:block" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {howWeWork.steps.map((stepText, idx) => {
              const Icon = howWeWork.stepIcons[idx];
              const glow = idx % 2 === 0 ? "blue" : "gold";

              return (
                <Reveal key={idx} delay={0.06 * idx}>
                  <TiltCard
                    glowColor={glow}
                    className="group relative flex h-full flex-col rounded-2xl border border-white/80 bg-gradient-to-b from-white/95 via-white/85 to-surface/90 p-5 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(20,21,26,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(28,79,161,0.18)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 font-mono text-xs font-black text-blue-800 border border-blue-200/60 shadow-2xs">
                        0{idx + 1}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white border border-blue-400/30 shadow-md transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>

                    <p className="mt-5 text-sm font-extrabold text-ink leading-snug">
                      {stepText}
                    </p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom Outcome Metallic Banner */}
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-ink p-6 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-400/20 border border-gold-400/40 text-gold-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-xs sm:text-sm font-extrabold leading-snug">
                {howWeWork.outcome}
              </p>
            </div>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-gold-300 shrink-0 backdrop-blur-md">
              Strategic • Transparent • Scalable
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
