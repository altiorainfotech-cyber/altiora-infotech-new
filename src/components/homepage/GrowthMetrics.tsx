"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Activity, Search, Megaphone, Globe, Share2, Palette, Bot, ShieldCheck, Zap, TrendingUp } from "lucide-react";

const DISCIPLINES = [
  { label: "SEO & Organic Search", icon: Search },
  { label: "AEO & GEO / AI Search", icon: Bot },
  { label: "Paid Advertising", icon: Megaphone },
  { label: "Website Engineering", icon: Globe },
  { label: "Social & UGC", icon: Share2 },
  { label: "Brand & Creative", icon: Palette },
];

const EXECUTIVE_STATS = [
  { label: "Attributed Client Growth", value: "$42M+", icon: TrendingUp },
  { label: "Edge Core Web Vitals", value: "< 480ms", icon: Zap },
  { label: "AI Search Citation Rate", value: "99.4%", icon: Bot },
  { label: "Client Retainer Retention", value: "96.8%", icon: ShieldCheck },
];

export function GrowthMetrics() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 text-ink" aria-label="Disciplines we operate across">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl opacity-70" />

      <Container className="relative z-10">
        <Reveal className="flex items-center justify-center gap-3 text-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <motion.span
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="shrink-0 text-[11px] font-black uppercase tracking-[0.25em] text-blue-700 bg-white/90 border border-blue-200/80 px-5 py-2 rounded-full shadow-md backdrop-blur-xl"
          >
            One Connected Growth Engine
          </motion.span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500/30 to-transparent" />
        </Reveal>

        {/* Executive Benchmark Stats Bar */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {EXECUTIVE_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(61,114,201,0.5)" }}
                  className="rounded-2xl border border-blue-900/10 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/30 p-5 backdrop-blur-xl shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between text-muted">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">{stat.label}</span>
                    <Icon className="h-4 w-4 text-gold-600" />
                  </div>
                  <div className="mt-2 text-2xl sm:text-3xl font-black font-mono text-blue-950">{stat.value}</div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>

      {/* Dual-row capability ticker — opposite directions with water float bobbing */}
      <div className="relative mt-12 space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {[...DISCIPLINES, ...DISCIPLINES].map(({ label, icon: Icon }, index) => (
            <motion.span
              key={`row1-${label}-${index}`}
              animate={{ y: index % 2 === 0 ? [0, -5, 0] : [0, 5, 0] }}
              transition={{ duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
              className="group flex shrink-0 items-center gap-3 rounded-full border border-blue-900/10 bg-white/90 px-5 py-2.5 text-xs font-extrabold text-ink shadow-[0_10px_30px_-5px_rgba(22,63,133,0.12)] backdrop-blur-2xl transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-50/60 hover:scale-105"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-sm group-hover:scale-110 transition-transform">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <span>{label}</span>
              <Activity className="h-3.5 w-3.5 text-gold-500 animate-pulse" aria-hidden="true" />
            </motion.span>
          ))}
        </div>

        <div className="flex w-max gap-4" style={{ animation: "marquee 34s linear infinite reverse" }}>
          {[...DISCIPLINES.slice().reverse(), ...DISCIPLINES.slice().reverse()].map(({ label, icon: Icon }, index) => (
            <motion.span
              key={`row2-${label}-${index}`}
              animate={{ y: index % 2 === 0 ? [0, 5, 0] : [0, -5, 0] }}
              transition={{ duration: 4.5 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
              className="group flex shrink-0 items-center gap-3 rounded-full border border-gold-400/40 bg-gradient-to-r from-gold-50/95 via-white/90 to-amber-50/90 px-5 py-2.5 text-xs font-extrabold text-gold-950 shadow-[0_10px_30px_-5px_rgba(211,172,60,0.18)] backdrop-blur-2xl transition-all duration-300 hover:border-gold-400 hover:scale-105"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-600 text-ink shadow-sm group-hover:scale-110 transition-transform font-bold">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <span>{label}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
