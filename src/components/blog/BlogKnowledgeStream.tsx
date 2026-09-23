"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkles, ArrowRight, BrainCircuit, Activity, BookOpen, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STREAM_NODES = [
  {
    id: "aeo-geo",
    title: "AEO & GEO Entity Graph Strategy for 2026",
    category: "AI & Search",
    date: "Sep 2026",
    summary: "How LLM answer engines synthesize brand knowledge and how to optimize your entity footprint.",
    readTime: "6 min read",
    href: "/blog",
  },
  {
    id: "web-dev",
    title: "Partial Prerendering & WebGL Performance",
    category: "Engineering",
    date: "Aug 2026",
    summary: "Sub-second LCP execution techniques combining Next.js 16 server components with Three.js graphics.",
    readTime: "8 min read",
    href: "/blog",
  },
  {
    id: "paid-ads",
    title: "Paid Media Creative Velocity & CAC Benchmarks",
    category: "Performance Ads",
    date: "Aug 2026",
    summary: "Scaling ad spend across Meta and Google while maintaining a 4.2x ROAS baseline.",
    readTime: "5 min read",
    href: "/blog",
  },
  {
    id: "branding",
    title: "Modern Brand Systems for Canadian Enterprise",
    category: "Branding",
    date: "Jul 2026",
    summary: "Designing scalable design systems that bridge digital UI experience with brand positioning.",
    readTime: "7 min read",
    href: "/blog",
  },
];

export function BlogKnowledgeStream() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeNode = STREAM_NODES[activeIdx];

  return (
    <section className="relative overflow-hidden bg-transparent py-12 sm:py-18" aria-labelledby="knowledge-stream-heading">
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-[450px] w-[700px] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-gold-400/10 to-transparent blur-3xl opacity-70" />

      <Container>
        <div className="max-w-2xl mx-auto text-center mb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1.5 text-xs font-extrabold text-blue-900 shadow-sm backdrop-blur-md">
              <BrainCircuit className="h-3.5 w-3.5 text-blue-600" />
              <span>Altiora Knowledge Stream</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 id="knowledge-stream-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Live Interactive Knowledge Stream
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-2 text-sm sm:text-base font-medium text-muted">
              Explore interconnected article nodes across search intelligence, web engineering, performance ads, and brand architecture.
            </p>
          </Reveal>
        </div>

        {/* Interactive Knowledge Stream Environment */}
        <div className="rounded-3xl border border-ink/10 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Timeline Stream Left Side */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-600 flex items-center gap-1.5 mb-2">
                <Activity className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
                Stream Nodes (01 → 04)
              </span>

              {STREAM_NODES.map((node, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? "bg-gradient-to-r from-blue-900 via-blue-950 to-ink text-white border-blue-400 shadow-xl scale-[1.02]"
                        : "bg-white text-ink border-ink/10 hover:bg-blue-50/70"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                        isSelected ? "bg-gold-400 text-blue-950" : "bg-blue-50 text-blue-700"
                      }`}>
                        0{idx + 1}
                      </div>
                      <div>
                        <span className={`text-[10px] font-mono uppercase ${isSelected ? "text-gold-400" : "text-blue-600"}`}>
                          {node.category}
                        </span>
                        <h4 className="text-sm font-extrabold line-clamp-1">{node.title}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono ${isSelected ? "text-white/70" : "text-muted"}`}>{node.date}</span>
                      <ArrowRight className={`h-4 w-4 ${isSelected ? "text-gold-400" : "text-ink/40"}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Node Detail Card Right Side */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-blue-900/20 bg-white p-7 shadow-xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-900">
                      <Layers className="h-3.5 w-3.5 text-blue-600" />
                      {activeNode.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-muted flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5 text-gold-600" />
                      {activeNode.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-ink leading-tight">{activeNode.title}</h3>

                  <p className="text-sm sm:text-base font-medium leading-relaxed text-muted">
                    {activeNode.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-600 font-bold flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 text-gold-500" />
                      Published {activeNode.date}
                    </span>

                    <Link
                      href={activeNode.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
