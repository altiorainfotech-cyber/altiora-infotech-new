"use client";

import Image from "next/image";
import { Layers, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { seoOverview } from "@/data/seo";
import { seoImages } from "@/data/seoImages";
import { SeoJourney } from "./SeoJourney";
import { SeoPerformanceTracking } from "./SeoPerformanceTracking";
import { SeoEcosystemHub } from "./SeoEcosystemHub";

export function SeoOverview() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="seo-overview-heading">
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1.5 text-xs font-extrabold text-blue-800 backdrop-blur-md">
                <Layers className="h-3.5 w-3.5 text-blue-600" />
                <span>{seoOverview.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="seo-overview-heading" className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-4xl leading-[1.15]">
                {seoOverview.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-muted font-medium">
                <p className="text-ink font-semibold">{seoOverview.p1}</p>
                <p>{seoOverview.p2}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 relative overflow-hidden rounded-2xl border border-ink/8 shadow-lg">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={seoImages.overview}
                    alt="SEO rank tracking analytics dashboard"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg border border-ink/10 bg-white/90 px-3 py-1.5 text-xs font-bold text-ink shadow-sm backdrop-blur-md">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span>Rankings Tracked Daily</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0.08}>
              <SeoEcosystemHub />
            </Reveal>
          </div>
        </div>

        <div className="mt-16">
          <Reveal delay={0.1}>
            <SeoJourney />
          </Reveal>
        </div>

        <div className="mt-12">
          <Reveal delay={0.12}>
            <SeoPerformanceTracking />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
