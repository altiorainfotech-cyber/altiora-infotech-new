"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ecosystem } from "@/data/homepage";
import { Cpu, Zap, Activity } from "lucide-react";

interface NodeItem {
  id: string;
  label: string;
  category: "strategy" | "execution" | "growth";
  connections: string[];
  desc: string;
}

const ECOSYSTEM_NODES: NodeItem[] = [
  { id: "growth", label: "REVENUE GROWTH ENGINE", category: "growth", connections: ["strategy", "seo", "paid", "web", "conversions"], desc: "Central growth output system" },
  { id: "strategy", label: "Digital Growth Strategy", category: "strategy", connections: ["growth", "seo", "paid"], desc: "Market research & positioning" },
  { id: "seo", label: "AEO & GEO Search Dominance", category: "execution", connections: ["growth", "strategy", "web"], desc: "Google & AI engine citation" },
  { id: "paid", label: "Paid Performance Ads", category: "execution", connections: ["growth", "strategy", "conversions"], desc: "Scalable customer acquisition" },
  { id: "web", label: "Enterprise Web Tech", category: "execution", connections: ["growth", "seo", "conversions"], desc: "< 500ms Next.js 16 architecture" },
  { id: "conversions", label: "Conversion Rate Engine", category: "growth", connections: ["growth", "paid", "web"], desc: "Frictionless funnel optimization" },
];

export function ServiceEcosystem() {
  const [activeNode, setActiveNode] = useState<string | null>("growth");
  const prefersReducedMotion = useReducedMotion();

  const selectedData = ECOSYSTEM_NODES.find((n) => n.id === activeNode) || ECOSYSTEM_NODES[0];

  return (
    <section className="relative overflow-hidden bg-transparent py-20 sm:py-24" aria-labelledby="ecosystem-heading">
      <Container>
        <SectionHeading
          headingId="ecosystem-heading"
          align="center"
          eyebrow="Integrated Service Topology"
          title={ecosystem.heading}
          description={ecosystem.description}
          className="mx-auto max-w-2xl"
          tone="light"
        />

        <Reveal className="mx-auto mt-14 max-w-5xl">
          {/* Interactive Digital Network Hub */}
          <div className="relative rounded-3xl border border-blue-900/15 bg-gradient-to-b from-white/95 via-surface/90 to-blue-50/40 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden">
            {/* Ambient Background Radial */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]" />

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              {/* Central Active Node Telemetry Card (Left) */}
              <div className="lg:col-span-5 rounded-3xl border border-blue-900/20 bg-gradient-to-br from-ink via-blue-950 to-blue-900 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gold-400/15 blur-2xl" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-gold-300">
                      <Activity className="h-4 w-4 text-gold-400 animate-pulse" />
                      <span>NODE TELEMETRY METRICS</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-400/20">
                      LIVE BEAM
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">
                      SELECTED SERVICE NODE
                    </span>
                    <h3 className="mt-1 text-2xl font-black text-white">{selectedData.label}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-blue-100/80 font-medium">
                      {selectedData.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300">
                      Illuminated System Interlinks ({selectedData.connections.length}):
                    </span>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {selectedData.connections.map((connId) => {
                        const connNode = ECOSYSTEM_NODES.find((n) => n.id === connId);
                        return (
                          <span
                            key={connId}
                            className="rounded-lg border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-white shadow-xs backdrop-blur-md"
                          >
                            {connNode?.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Node Grid Matrix (Right) */}
              <div className="lg:col-span-7 relative min-h-[340px] flex items-center justify-center p-2">
                <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 w-full">
                  {ECOSYSTEM_NODES.map((node) => {
                    const isSelected = activeNode === node.id;
                    const isConnected = activeNode
                      ? ECOSYSTEM_NODES.find((n) => n.id === activeNode)?.connections.includes(node.id)
                      : false;

                    return (
                      <motion.button
                        key={node.id}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onClick={() => setActiveNode(node.id)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className={`group relative flex flex-col items-start justify-between rounded-2xl p-4 text-left transition-all duration-300 min-h-[110px] ${
                          isSelected
                            ? "border-2 border-gold-500 bg-ink text-white shadow-xl shadow-gold-500/20 ring-2 ring-gold-500/30"
                            : isConnected
                            ? "border-2 border-blue-500/80 bg-blue-50/90 text-blue-950 opacity-100 shadow-md"
                            : "border border-blue-900/10 bg-white/80 text-ink opacity-60 hover:opacity-100 hover:border-blue-400/50"
                        }`}
                      >
                        <div className="flex w-full items-center justify-between">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
                              isSelected
                                ? "bg-gold-500 text-ink shadow-sm"
                                : isConnected
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700"
                            }`}
                          >
                            <Zap className="h-4 w-4" />
                          </div>
                          {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-gold-400 animate-ping" />}
                        </div>
                        <span className="mt-4 text-xs font-bold leading-snug">{node.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
