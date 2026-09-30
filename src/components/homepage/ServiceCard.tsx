"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/data/homepage";
import { TiltCard } from "@/components/ui/TiltCard";

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  const Icon = service.icon;

  return (
    <motion.div
      animate={{ y: featured ? [-4, 4, -4] : [-3, 3, -3] }}
      transition={{ duration: featured ? 5 : 6, repeat: Infinity, ease: "easeInOut" }}
      className="h-full"
    >
      <TiltCard glowColor="blue" className={`group flex h-full flex-col justify-between border-blue-900/10 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/30 shadow-xl backdrop-blur-2xl ${featured ? "sm:p-10 border-blue-400/50 shadow-2xl" : ""}`}>
      <div>
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center justify-center rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-md shadow-blue-600/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-600/30 ${
              featured ? "h-14 w-14" : "h-12 w-12"
            }`}
          >
            <Icon className={featured ? "h-7 w-7" : "h-6 w-6"} aria-hidden="true" />
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-700 rounded-full border border-blue-200/80 bg-blue-50/90 px-3 py-1 shadow-xs backdrop-blur-md">
            {service.category}
          </span>
        </div>

        <h3
          className={`font-display mt-5 font-bold leading-snug tracking-tight text-ink group-hover:text-blue-700 transition-colors ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {service.title}
        </h3>
        <p className={`mt-2.5 leading-relaxed text-muted ${featured ? "text-base" : "line-clamp-3 text-sm"}`}>
          {service.description}
        </p>

        <ul className="mt-5 space-y-2.5 border-t border-ink/8 pt-4">
          {service.benefits.slice(0, featured ? 4 : 3).map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-xs font-semibold text-ink/85">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 mt-0.5 border border-blue-200">
                <Check className="h-3 w-3 stroke-[2.5]" aria-hidden="true" />
              </span>
              <span className={featured ? "" : "line-clamp-1"}>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={service.href}
        className="focus-ring mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-700 transition-colors hover:text-blue-900 group/link"
      >
        <span>Explore Service</span>
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 text-blue-600"
          aria-hidden="true"
        />
      </Link>
    </TiltCard>
  </motion.div>
  );
}
