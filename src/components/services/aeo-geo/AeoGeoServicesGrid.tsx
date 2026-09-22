"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { aeoGeoServices } from "@/data/aeoGeo";
import { Sparkles, ChevronDown } from "lucide-react";

const DEG2RAD = Math.PI / 180;
const ORBIT_RADIUS = 36;

function polar(angleDeg: number, radius: number) {
  const rad = angleDeg * DEG2RAD;
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
}

function buildPath(x: number, y: number) {
  const mx = (50 + x) / 2;
  const my = (50 + y) / 2;
  const dx = x - 50;
  const dy = y - 50;
  const len = Math.hypot(dx, dy) || 1;
  const px = -dy / len;
  const py = dx / len;
  const bend = 9;
  const cx = mx + px * bend;
  const cy = my + py * bend;
  return { d: `M 50 50 Q ${cx} ${cy} ${x} ${y}`, cx, cy };
}

function bezierPoint(t: number, cx: number, cy: number, x1: number, y1: number) {
  const u = 1 - t;
  return {
    x: u * u * 50 + 2 * u * t * cx + t * t * x1,
    y: u * u * 50 + 2 * u * t * cy + t * t * y1,
  };
}

const [core, ...satellites] = aeoGeoServices;

const orbitNodes = satellites.map((service, i) => {
  const angle = -90 + i * 72;
  const { x, y } = polar(angle, ORBIT_RADIUS);
  const { d, cx, cy } = buildPath(x, y);
  const samples = Array.from({ length: 9 }, (_, s) => bezierPoint(s / 8, cx, cy, x, y));
  return { service, x, y, d, samples, tone: (i % 2 === 0 ? "blue" : "gold") as "blue" | "gold" };
});

const DECOR_TAGS: Record<number, string> = { 1: "LIVE", 4: "99.1%" };

export function AeoGeoServicesGrid() {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState<number | "core" | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const uid = useId();
  const CoreIcon = core.icon;

  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="aeo-geo-services-heading">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-50/80 px-3.5 py-1 text-xs font-extrabold text-gold-800">
              <Sparkles className="h-3.5 w-3.5 text-gold-600" />
              <span>End-to-End Execution</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="aeo-geo-services-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Our AEO &amp; GEO Services
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
              Six connected disciplines, one AI visibility strategy — built to make your brand easier for AI engines
              to understand, trust, and reference.
            </p>
          </Reveal>
        </div>

        {/* Desktop / tablet: orbit visualization */}
        <div className="mt-14 hidden lg:block">
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-[720px] rounded-[2rem] border border-ink/8 bg-white">
              {/* Fine technical grid */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(20,21,26,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,21,26,0.05) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
                aria-hidden="true"
              />

              {/* Soft radial lighting behind the engine */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(28,79,161,0.09), rgba(211,172,60,0.05) 55%, transparent 75%)",
                }}
                aria-hidden="true"
              />

              {/* System labels */}
              <div className="pointer-events-none absolute left-5 top-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/35">
                AI Visibility System
              </div>
              <div className="pointer-events-none absolute right-5 top-5 flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink/40">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-500" />
                </span>
                AI Search &bull; Active
              </div>
              <div className="pointer-events-none absolute bottom-5 left-5 font-mono text-[10px] font-medium tracking-[0.1em] text-ink/25">
                ENGINES 05 &middot; SYNC OK
              </div>

              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                {/* decorative dashed orbit rings */}
                <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(20,21,26,0.06)" strokeWidth="0.3" strokeDasharray="1.2 2" />
                <circle cx="50" cy="50" r={ORBIT_RADIUS} fill="none" stroke="rgba(20,21,26,0.06)" strokeWidth="0.3" strokeDasharray="1.2 2" />

                {orbitNodes.map((node, i) => {
                  const isDimmed = active !== null && active !== "core" && active !== i;
                  const isHighlighted = active === i || active === "core";
                  const stroke = node.tone === "blue" ? "#1c4fa1" : "#c9a227";

                  return (
                    <g key={node.service.title}>
                      <motion.path
                        d={node.d}
                        fill="none"
                        stroke={isHighlighted ? stroke : "rgba(20,21,26,0.14)"}
                        strokeWidth={isHighlighted ? 0.55 : 0.35}
                        strokeLinecap="round"
                        style={{ opacity: isDimmed ? 0.15 : 1 }}
                        initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
                        whileInView={prefersReducedMotion ? undefined : { pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                      />

                      {!prefersReducedMotion && (
                        <motion.circle
                          r="0.9"
                          fill={stroke}
                          style={{ opacity: isDimmed ? 0 : 0.75 }}
                          initial={{ cx: node.samples[0].x, cy: node.samples[0].y }}
                          animate={{ cx: node.samples.map((p) => p.x), cy: node.samples.map((p) => p.y) }}
                          transition={{ duration: 2.6, delay: i * 0.35, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Core node — AEO Strategy */}
              <div className="absolute z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: "50%", top: "50%" }}>
                <motion.button
                  type="button"
                  onMouseEnter={() => setActive("core")}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive("core")}
                  onBlur={() => setActive(null)}
                  aria-describedby={`${uid}-core-desc`}
                  className="focus-ring group relative flex h-40 w-40 flex-col items-center justify-center gap-1.5 rounded-full border border-blue-400/30 bg-white text-center shadow-[0_15px_40px_-15px_rgba(28,79,161,0.25)]"
                  animate={prefersReducedMotion ? undefined : { scale: [1, 1.025, 1] }}
                  transition={prefersReducedMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-md">
                    <CoreIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-black leading-tight text-ink">{core.title}</span>
                  <span id={`${uid}-core-desc`} className="px-4 text-[11px] leading-snug text-muted">
                    {core.description}
                  </span>
                </motion.button>
              </div>

              {/* Orbit nodes */}
              {orbitNodes.map((node, i) => {
                const isDimmed = active !== null && active !== "core" && active !== i;
                const isHighlighted = active === i;
                const Icon = node.service.icon;
                const tag = DECOR_TAGS[i];

                return (
                  <div
                    key={node.service.title}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    {tag && (
                      <span className="pointer-events-none absolute -top-4 right-0 font-mono text-[9px] font-bold tracking-wider text-gold-600/70">
                        {tag}
                      </span>
                    )}
                    <motion.button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(i)}
                      onBlur={() => setActive(null)}
                      aria-describedby={`${uid}-${i}-desc`}
                      className={
                        "focus-ring group flex w-[168px] flex-col gap-1 rounded-2xl border bg-white p-3.5 text-left shadow-sm transition-colors duration-300 " +
                        (isHighlighted ? "border-blue-300/70 shadow-[0_12px_30px_-12px_rgba(28,79,161,0.25)]" : "border-ink/8")
                      }
                      style={{ opacity: isDimmed ? 0.35 : 1 }}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileFocus={{ scale: 1.04, y: -2 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div
                        className={
                          "flex h-9 w-9 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:rotate-6 " +
                          (node.tone === "blue"
                            ? "bg-blue-50 text-blue-600 border-blue-200/60"
                            : "bg-gold-50 text-gold-600 border-gold-200/60")
                        }
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <span className="mt-1 text-sm font-bold text-ink">{node.service.title}</span>
                      <span id={`${uid}-${i}-desc`} className="text-[11px] leading-snug text-muted">
                        {node.service.description}
                      </span>

                      <AnimatePresence>
                        {isHighlighted && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className={
                              "mt-1 block overflow-hidden text-[10px] font-black uppercase tracking-wider " +
                              (node.tone === "blue" ? "text-blue-700" : "text-gold-700")
                            }
                          >
                            {node.service.metric}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Mobile / small tablet: vertical flow */}
        <div className="mt-12 lg:hidden">
          <div className="relative rounded-2xl border border-ink/8 bg-white p-5">
            <div className="mb-4 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink/40">
              <span>AI Visibility System</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                Active
              </span>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-blue-200/50 bg-blue-50/40 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-md">
                <CoreIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-sm font-black text-ink">{core.title}</span>
                <p className="mt-1 text-xs leading-relaxed text-muted">{core.description}</p>
              </div>
            </div>

            <div className="ml-[22px] flex flex-col">
              {orbitNodes.map((node, i) => {
                const Icon = node.service.icon;
                const isOpen = openMobile === i;

                return (
                  <div key={node.service.title} className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-px bg-ink/10" aria-hidden="true" />
                    <div className="absolute left-[-4px] top-6 h-2 w-2 rounded-full border-2 border-white bg-blue-400" aria-hidden="true" />

                    <button
                      type="button"
                      onClick={() => setOpenMobile(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="focus-ring flex w-full items-center gap-3 rounded-xl py-3.5 text-left"
                    >
                      <div
                        className={
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border " +
                          (node.tone === "blue"
                            ? "bg-blue-50 text-blue-600 border-blue-200/60"
                            : "bg-gold-50 text-gold-600 border-gold-200/60")
                        }
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-bold text-ink">{node.service.title}</span>
                        <p className="mt-0.5 text-xs leading-snug text-muted">{node.service.description}</p>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-ink/40 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <span
                            className={
                              "mb-3 ml-12 inline-block text-[10px] font-black uppercase tracking-wider " +
                              (node.tone === "blue" ? "text-blue-700" : "text-gold-700")
                            }
                          >
                            {node.service.metric}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
