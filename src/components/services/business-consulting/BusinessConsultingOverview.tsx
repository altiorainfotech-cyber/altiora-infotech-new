"use client";

import Image from "next/image";
import { Layers, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { businessConsultingOverview } from "@/data/businessConsulting";
import { businessConsultingImages } from "@/data/businessConsultingImages";
import { BusinessConsultingJourney } from "./BusinessConsultingJourney";
import { BusinessConsultingPerformanceTracking } from "./BusinessConsultingPerformanceTracking";
import { BusinessConsultingEcosystemHub } from "./BusinessConsultingEcosystemHub";

export function BusinessConsultingOverview() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="consulting-overview-heading">
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/80 px-3.5 py-1.5 text-xs font-extrabold text-blue-800 shadow-sm backdrop-blur-md">
                <Layers className="h-3.5 w-3.5 text-blue-600" />
                <span>{businessConsultingOverview.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="consulting-overview-heading" className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-4xl leading-[1.15]">
                {businessConsultingOverview.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-muted font-medium">
                <p className="text-ink font-semibold">{businessConsultingOverview.p1}</p>
                <p>{businessConsultingOverview.p2}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 relative overflow-hidden rounded-2xl border border-ink/8 shadow-lg">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={businessConsultingImages.overview}
                    alt="Executive strategy consulting session and financial data growth charts"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg border border-ink/10 bg-white/90 px-3 py-1.5 text-xs font-bold text-ink shadow-sm backdrop-blur-md">
                    <Compass className="h-4 w-4 text-blue-600" />
                    <span>Data-Driven Strategic Roadmaps</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0.08}>
              <BusinessConsultingEcosystemHub />
            </Reveal>
          </div>
        </div>

        <div className="mt-16">
          <Reveal delay={0.1}>
            <BusinessConsultingJourney />
          </Reveal>
        </div>

        <div className="mt-12">
          <Reveal delay={0.12}>
            <BusinessConsultingPerformanceTracking />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
