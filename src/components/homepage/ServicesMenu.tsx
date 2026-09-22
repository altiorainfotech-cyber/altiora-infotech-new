"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { services } from "@/data/homepage";

export function ServicesMenu({ href, label }: { href: string; label: string }) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="focus-ring flex items-center gap-1 rounded-md text-xs font-bold uppercase tracking-wider text-muted transition-colors hover:text-blue-600"
      >
        {label}
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
      </Link>

      <div
        className="invisible absolute left-0 top-full z-50 w-[640px] max-w-[calc(100vw-2.5rem)] -translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        <div className="rounded-2xl border border-ink/10 bg-white/95 p-5 shadow-[0_25px_60px_-15px_rgba(20,21,26,0.18)] backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-1.5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="focus-ring group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white border border-blue-400/30 shadow-sm transition-transform duration-300 group-hover/item:scale-110">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug text-ink transition-colors group-hover/item:text-blue-700">
                      {service.title}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium leading-snug text-muted">
                      {service.category}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <Link
            href={href}
            className="focus-ring mt-3 flex items-center justify-between rounded-xl border-t border-ink/8 px-2.5 pt-4 text-xs font-bold uppercase tracking-wider text-blue-700 transition-colors hover:text-blue-800"
          >
            <span>View All Services</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
