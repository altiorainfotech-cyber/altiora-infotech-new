import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/data/homepage";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_28px_56px_-28px_rgba(10,11,13,0.22)] sm:p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/12 text-gold-600 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-black">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      <span className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
        {service.category}
      </span>
      <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">
        {service.description}
      </p>

      <ul className="mt-4 space-y-2">
        {service.benefits.slice(0, 3).map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-ink/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
            <span className="line-clamp-1">{benefit}</span>
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        className="focus-ring mt-6 inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700"
      >
        Explore
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
