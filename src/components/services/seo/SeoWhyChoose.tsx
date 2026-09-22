"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseSeo } from "@/data/seo";
import { ShieldCheck } from "lucide-react";

export function SeoWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="seo-why-choose-heading">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-full -translate-x-1/2 -translate-y-1/2 bg-blue-500/5 blur-[120px]" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              <span>The Altiora Advantage</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="seo-why-choose-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Why Choose Our SEO Services?
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseSeo.map((point, idx) => {
            const Icon = point.icon;
            const gold = idx % 2 === 1;

            return (
              <Reveal key={point.title} delay={0.05 * idx}>
                <div className="group flex h-full items-center gap-3.5 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white hover:shadow-xl">
                  <div
                    className={
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 " +
                      (gold
                        ? "bg-gold-50 text-gold-600 border-gold-200/60"
                        : "bg-blue-50 text-blue-600 border-blue-200/60")
                    }
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-extrabold text-ink leading-snug">{point.title}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
