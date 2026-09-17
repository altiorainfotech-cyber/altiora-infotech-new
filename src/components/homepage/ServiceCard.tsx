"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/data/homepage";
import { TiltCard } from "@/components/ui/TiltCard";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <TiltCard glowColor="blue" className="flex h-full flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-md shadow-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 rounded-full border border-blue-200 bg-blue-50/90 px-2.5 py-1">
            {service.category}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-ink group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        <ul className="mt-5 space-y-2 border-t border-ink/8 pt-4">
          {service.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-xs font-medium text-ink/80">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" aria-hidden="true" />
              <span className="line-clamp-1">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={service.href}
        className="focus-ring mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 transition-colors hover:text-blue-700"
      >
        <span>Explore Service</span>
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 text-blue-600"
          aria-hidden="true"
        />
      </Link>
    </TiltCard>
  );
}
