"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { platforms } from "@/data/paidAdvertising";
import { Globe2 } from "lucide-react";

export function PaidAdsPlatforms() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="platforms-heading">
      <div className="pointer-events-none absolute right-1/3 top-1/2 -z-10 h-[450px] w-[700px] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-gold-400/10 to-transparent blur-3xl opacity-70" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
              <Globe2 className="h-3.5 w-3.5 text-blue-600" />
              <span>Where We Advertise</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="platforms-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Advertising Platforms
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
          {platforms.map((platform, idx) => {
            const Icon = platform.icon;
            const gold = idx % 2 === 1;
            const offset = idx % 2 === 1;

            return (
              <Reveal key={platform.name} delay={0.06 * idx}>
                <div
                  className={
                    "group grid grid-cols-1 items-start gap-6 py-9 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-7 lg:grid-cols-[auto_auto_1fr] lg:gap-8 lg:py-11" +
                    (offset ? " lg:pl-16" : "")
                  }
                >
                  <span className="hidden font-mono text-5xl font-light tracking-tight text-ink/10 sm:text-6xl lg:block">
                    0{idx + 1}
                  </span>

                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-ink/8 shadow-sm sm:h-20 sm:w-20">
                    <Image
                      src={platform.image}
                      alt={`${platform.name} advertising`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="80px"
                    />
                    <div
                      className={
                        "absolute -bottom-1.5 -right-1.5 flex h-8 w-8 items-center justify-center rounded-xl text-white border shadow-md " +
                        (gold
                          ? "bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 border-gold-300/40"
                          : "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 border-blue-400/30")
                      }
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="max-w-2xl">
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
                      {platform.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {platform.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {platform.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-ink/8 bg-surface px-3 py-1 text-[11px] font-bold text-ink/80 transition-colors group-hover:border-blue-400/40 group-hover:text-blue-800"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
