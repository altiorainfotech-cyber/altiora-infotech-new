"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { experienceImpact } from "@/data/about";
import { aboutImages } from "@/data/aboutImages";
import { Target, TrendingUp, DollarSign, Award, Building2, Sparkles } from "lucide-react";

export function ExperienceImpact() {
  return (
    <section className="relative overflow-hidden bg-transparent py-12 sm:py-18" aria-labelledby="experience-impact-heading">
      {/* Background glow light */}
      <div className="pointer-events-none absolute right-10 top-1/4 -z-10 h-80 w-80 rounded-full bg-gold-400/10 blur-[90px]" />

      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Track Record Narrative, Image & Industry Pills */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-50/80 px-3.5 py-1.5 text-xs font-extrabold text-gold-800">
                <Award className="h-3.5 w-3.5 text-gold-600" />
                <span>Track Record & Reach</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="experience-impact-heading" className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                {experienceImpact.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-ink/90 font-medium">
                {experienceImpact.text}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted font-medium">
                {experienceImpact.teamText}
              </p>
            </Reveal>

            {/* Feature Image Frame */}
            <Reveal delay={0.15}>
              <div className="mt-6 relative overflow-hidden rounded-2xl border border-white/80 shadow-xl group">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={aboutImages.experienceImpact}
                    alt="Altiora Proven Experience Across Canadian Markets"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white text-xs font-bold">
                    <Sparkles className="h-4 w-4 text-gold-400" />
                    <span>80+ Projects Delivered</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Industries Floating Pills */}
            <Reveal delay={0.2}>
              <div className="mt-6">
                <span className="text-xs font-black uppercase tracking-wider text-muted block mb-3">
                  Proven Experience Across Sectors:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {experienceImpact.industries.map((ind) => (
                    <span
                      key={ind}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-4 py-1.5 text-xs font-extrabold text-ink shadow-sm backdrop-blur-md transition-all hover:border-blue-400/40 hover:bg-blue-50/60 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <Building2 className="h-3.5 w-3.5 text-blue-600" />
                      <span>{ind}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3D Outcome Pillars Stack */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal delay={0.08}>
              <TiltCard
                glowColor="blue"
                className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white/85 p-5 backdrop-blur-xl shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white border border-blue-400/30 shadow-md">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-ink">Generate Qualified Leads</h3>
                  <p className="mt-0.5 text-xs font-semibold text-muted">High-intent client acquisition systems</p>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.12}>
              <TiltCard
                glowColor="gold"
                className="flex items-center gap-4 rounded-2xl border border-gold-300/40 bg-gradient-to-r from-white via-gold-50/30 to-white p-5 backdrop-blur-xl shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 text-white border border-gold-300/40 shadow-md">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-ink">Improve Conversions</h3>
                  <p className="mt-0.5 text-xs font-semibold text-muted">A/B testing, funnel & website optimization</p>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.16}>
              <TiltCard
                glowColor="blue"
                className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white/85 p-5 backdrop-blur-xl shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-950 text-white border border-blue-400/30 shadow-md">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-ink">Increase Long-Term Revenue</h3>
                  <p className="mt-0.5 text-xs font-semibold text-muted">Scalable digital growth engines</p>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
