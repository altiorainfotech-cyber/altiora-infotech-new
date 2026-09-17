"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { results } from "@/data/homepage";

export function ResultsCarousel() {
  if (results.length === 0) return null;

  const slides = results.map((result) => (
    <div key={result.title} className="pr-5">
      <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-ink/10 bg-white/90 backdrop-blur-xl lg:grid-cols-2 shadow-[0_20px_50px_-15px_rgba(20,21,26,0.08)]">
        <div className="relative aspect-[16/10] lg:aspect-auto">
          <Image
            src={result.image}
            alt=""
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
            {result.category}
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-ink">{result.title}</h3>
          <p className="line-clamp-4 text-sm leading-relaxed text-muted">{result.description}</p>
          {result.metrics && (
            <dl className="flex flex-wrap gap-6 border-t border-ink/8 pt-4">
              {result.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs font-medium text-muted">{metric.label}</dt>
                  <dd className="text-xl font-extrabold text-ink">{metric.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {result.href && (
            <Link
              href={result.href}
              className="focus-ring group inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700"
            >
              <span>View Case Study</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="results-heading">
      <Container>
        <SectionHeading
          headingId="results-heading"
          eyebrow="Results"
          title="Proof in the Work We Deliver"
          tone="light"
        />
        <div className="mt-12">
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
