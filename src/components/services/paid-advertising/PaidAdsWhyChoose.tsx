"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whyChoosePaidAds } from "@/data/paidAdvertising";
import { ShieldCheck, Sparkles } from "lucide-react";

export function PaidAdsWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="why-choose-heading">
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
            <h2 id="why-choose-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Why Choose Altiora Infotech?
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
          {whyChoosePaidAds.map((point, idx) => {
            const Icon = point.icon;
            const gold = idx % 2 === 1;

            return (
              <Reveal key={point.title} delay={0.05 * idx}>
                <div className="group flex items-start gap-4 border-t border-ink/10 pt-6">
                  <div
                    className={
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 " +
                      (gold
                        ? "border-gold-400/50 text-gold-600 group-hover:bg-gold-500 group-hover:text-white"
                        : "border-blue-400/50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white")
                    }
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-ink leading-snug">{point.title}</h3>
                    <p className="mt-1 text-sm font-medium text-muted leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-ink p-6 text-white shadow-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400/20 border border-gold-400/40 text-gold-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <p className="text-xs sm:text-sm font-extrabold leading-relaxed text-balance">
              We treat every advertising dollar like it's our own — strategic, accountable, and built to compound.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
