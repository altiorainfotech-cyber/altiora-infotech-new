"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Check, X, Shield, Sparkles, Scale } from "lucide-react";

interface ComparisonRow {
  dimension: string;
  traditional: string;
  altiora: string;
  highlight?: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: "AI & Search Readiness (AEO/GEO)",
    traditional: "Basic keyword density & traditional backlink outreach.",
    altiora: "Full Answer Engine (AEO) & Generative Engine (GEO) entity optimization.",
    highlight: true,
  },
  {
    dimension: "Web Tech & Speed Architecture",
    traditional: "Bloated, slow CMS templates with 3+ second load delays.",
    altiora: "Next.js 16 & React 19 edge architecture delivering < 500ms LCP.",
    highlight: true,
  },
  {
    dimension: "Performance Ads & CAC Reduction",
    traditional: "Manual campaign tweaks & rising Customer Acquisition Costs.",
    altiora: "Rapid creative velocity testing & automated ROAS scaling.",
  },
  {
    dimension: "Data & Attribution Transparency",
    traditional: "Static monthly PDF reports with vanity metrics.",
    altiora: "Server-side CAPI integration & 100% first-party real-time telemetry.",
  },
  {
    dimension: "Brand Identity Systems",
    traditional: "Static logo files without motion guidelines or system depth.",
    altiora: "Interactive 3D visual language, micro-interactions & design systems.",
  },
  {
    dimension: "Team Ownership & Execution",
    traditional: "Passed down to junior account managers & outsourced freelancers.",
    altiora: "Direct daily access to Senior Architects & Head Strategy Leads.",
    highlight: true,
  },
];

export function AgencyComparisonMatrix() {
  return (
    <section className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl opacity-60"
        aria-hidden="true"
      />

      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/90 px-4 py-1.5 text-xs font-black text-blue-800 shadow-xs backdrop-blur-md">
              <Scale className="h-3.5 w-3.5 text-blue-600" />
              <span>The Technological Edge</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              Traditional Agency vs.{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-900 to-gold-600 bg-clip-text text-transparent">
                Altiora Growth Engine
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium max-w-xl mx-auto">
              Compare how our engineering-first, data-backed approach delivers superior ROI over legacy digital marketing models.
            </p>
          </Reveal>
        </div>

        {/* Matrix Table Card */}
        <Reveal delay={0.15}>
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-3xl border border-blue-900/10 bg-gradient-to-b from-white/95 via-surface/90 to-blue-50/20 shadow-2xl backdrop-blur-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-ink/10 bg-slate-50/80">
                    <th className="py-5 px-6 text-xs font-black uppercase tracking-wider text-muted w-1/3">
                      Core Capability
                    </th>
                    <th className="py-5 px-6 text-xs font-black uppercase tracking-wider text-muted/70 w-1/3">
                      Traditional Digital Agency
                    </th>
                    <th className="py-5 px-6 text-xs font-black uppercase tracking-wider text-blue-900 w-1/3 bg-blue-100/40 border-l border-blue-200/60">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-gold-500 fill-gold-400 animate-pulse" />
                        <span>Altiora Growth Partner</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/8 text-xs sm:text-sm font-medium">
                  {COMPARISON_DATA.map((row, idx) => (
                    <motion.tr
                      key={row.dimension}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      className={`transition-colors hover:bg-blue-50/40 ${
                        row.highlight ? "bg-blue-50/20" : ""
                      }`}
                    >
                      {/* Dimension */}
                      <td className="py-5 px-6 font-extrabold text-ink">
                        {row.dimension}
                      </td>

                      {/* Traditional */}
                      <td className="py-5 px-6 text-muted">
                        <div className="flex items-start gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500 mt-0.5 border border-rose-200">
                            <X className="h-3 w-3 stroke-[2.5]" />
                          </span>
                          <span>{row.traditional}</span>
                        </div>
                      </td>

                      {/* Altiora Engine */}
                      <td className="py-5 px-6 font-extrabold text-ink bg-blue-50/30 border-l border-blue-200/50">
                        <div className="flex items-start gap-2.5 text-blue-950">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white mt-0.5 shadow-sm">
                            <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                          </span>
                          <span>{row.altiora}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
