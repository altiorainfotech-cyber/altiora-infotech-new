"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseSeo, WhyChoosePoint } from "@/data/seo";
import { ShieldCheck } from "lucide-react";

export function SeoWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-24" aria-labelledby="seo-why-heading">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              <span>THE ALTIORA ADVANTAGE</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="seo-why-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-5xl leading-tight">
              Why Brands Choose Altiora for Search Engine Optimization
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium">
              We merge technical precision, entity authority, and conversion rate optimization to turn organic search into your highest-ROI customer channel.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseSeo.map((item: WhyChoosePoint, idx: number) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.05}>
                <div className="group relative rounded-2xl border border-ink/8 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 text-gold-400 shadow-md mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-ink">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
