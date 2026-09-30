"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { results } from "@/data/homepage";

export function ResultsCarousel() {
  if (results.length === 0) return null;

  const slides = results.map((result, index) => (
    <Reveal key={result.title} delay={index * 0.06} className="pr-5">
      <div
        style={{ transformStyle: "preserve-3d" }}
        className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-blue-900/15 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/30 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-[0_30px_70px_-20px_rgba(22,63,133,0.25)] lg:grid-cols-2 shadow-[0_20px_50px_-15px_rgba(20,21,26,0.1)]"
      >
        <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
          <Image
            src={result.image}
            alt={result.title}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 sm:p-12">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-700 bg-gold-50/90 border border-gold-300/60 px-3 py-1 rounded-full shadow-2xs backdrop-blur-md">
              {result.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink group-hover:text-blue-700 transition-colors">
            {result.title}
          </h3>

          <p className="line-clamp-4 text-sm leading-relaxed text-muted font-medium">{result.description}</p>

          {result.metrics && (
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-ink/8 pt-5">
              {result.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl bg-blue-50/70 p-3 border border-blue-200/60 backdrop-blur-sm">
                  <dt className="text-[10px] font-bold text-muted uppercase tracking-wider">{metric.label}</dt>
                  <dd className="text-xl font-black font-mono text-blue-900 mt-0.5">{metric.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {result.href && (
            <Link
              href={result.href}
              className="focus-ring group/link inline-flex w-fit items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors pt-2"
            >
              <span>Explore Case Study Telemetry</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1.5 text-blue-600"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </div>
    </Reveal>
  ));

  return (
    <section className="relative overflow-hidden bg-transparent py-20 sm:py-24" aria-labelledby="results-heading">
      <Container>
        <SectionHeading
          headingId="results-heading"
          eyebrow="Empirical Verification"
          title="Proof in the Work We Deliver"
          description="Case studies detailing measured revenue lift, CAC reductions, and AI search citation growth."
          tone="light"
        />
        <div className="mt-14">
          <Carousel
            slides={slides}
            ariaLabel="Client results"
            slideClassName="basis-full"
            arrowTone="light"
          />
        </div>
      </Container>
    </section>
  );
}
