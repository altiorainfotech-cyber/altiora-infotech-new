"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { visionMission } from "@/data/about";
import { aboutImages } from "@/data/aboutImages";
import { Compass, Target, Sparkles, CheckCircle2 } from "lucide-react";

export function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-label="Vision and Mission">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
              Guiding Principles
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Vision & Mission
            </h2>
            <p className="mt-2 text-sm font-medium text-muted">
              Built on strategic execution, transparent partnership, and scalable Canadian growth.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Vision Flagship Pillar */}
          <Reveal delay={0.05}>
            <TiltCard
              glowColor="gold"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gold-300/40 bg-white p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(211,172,60,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(211,172,60,0.25)]"
            >
              {/* Background Image Layer with Opacity */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={aboutImages.vision}
                  alt="Altiora Vision - Sustainable Success"
                  fill
                  className="object-cover opacity-15 transition-opacity duration-500 group-hover:opacity-25 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gold-50/70 to-white/95" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 text-white border border-gold-300/40 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Compass className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-gold-400/40 bg-gold-50/90 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-gold-800 shadow-2xs backdrop-blur-md">
                    Vision
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-black tracking-tight text-ink sm:text-3xl">
                  {visionMission.vision.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-ink/85 font-medium">
                  {visionMission.vision.text}
                </p>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 border-t border-gold-400/30 pt-4 text-xs font-black uppercase tracking-wider text-gold-700">
                <Sparkles className="h-4 w-4 text-gold-600 shrink-0" />
                <span>Sustainable Canadian Success</span>
              </div>
            </TiltCard>
          </Reveal>

          {/* Mission Flagship Pillar */}
          <Reveal delay={0.1}>
            <TiltCard
              glowColor="blue"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-blue-400/40 bg-white p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(28,79,161,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(28,79,161,0.25)]"
            >
              {/* Background Image Layer with Opacity */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={aboutImages.mission}
                  alt="Altiora Mission - Strategic Execution"
                  fill
                  className="object-cover opacity-15 transition-opacity duration-500 group-hover:opacity-25 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/70 to-white/95" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white border border-blue-400/40 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Target className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-blue-400/40 bg-blue-50/90 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-blue-800 shadow-2xs backdrop-blur-md">
                    Mission
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-black tracking-tight text-ink sm:text-3xl">
                  {visionMission.mission.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-ink/85 font-medium">
                  {visionMission.mission.text}
                </p>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 border-t border-blue-400/30 pt-4 text-xs font-black uppercase tracking-wider text-blue-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Attract • Convert • Retain</span>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
