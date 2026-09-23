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
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="ecosystem-heading">
      <Container>
        <SectionHeading
          headingId="ecosystem-heading"
          align="center"
          eyebrow="Service Ecosystem"
          title={ecosystem.heading}
          description={ecosystem.description}
          className="mx-auto max-w-2xl"
          tone="light"
        />

        <Reveal className="mx-auto mt-12 max-w-4xl">
          {/* Interactive 3D Sculpture Network Hub */}
          <div className="relative rounded-3xl border border-ink/10 bg-gradient-to-b from-white/90 via-slate-50/80 to-blue-50/40 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden">
            {/* Ambient Background Radial */}
            <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold-500/10 blur-[100px]" />

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
              {/* Central Active Node Telemetry Card */}
              <div className="lg:col-span-1 rounded-2xl border border-blue-500/30 bg-white/90 p-6 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600">
                  <Activity className="h-4 w-4 text-gold-500 animate-pulse" />
                  <span>ACTIVE NODE TELEMETRY</span>
                </div>
                <h3 className="mt-3 text-lg font-black text-ink">{selectedData.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{selectedData.desc}</p>

                <div className="mt-6 border-t border-ink/10 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted">Illuminated Connections:</span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedData.connections.map((connId) => {
                      const connNode = ECOSYSTEM_NODES.find((n) => n.id === connId);
                      return (
                        <span key={connId} className="rounded-md border border-blue-400/30 bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
                          {connNode?.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Interactive Node Interactive Network (Digital Sculpture) */}
              <div className="lg:col-span-2 relative min-h-[320px] flex items-center justify-center">
                {/* Connecting SVG Circuit Network Lines */}
                <svg className="absolute inset-0 h-full w-full pointer-events-none stroke-blue-500/30" strokeWidth="1.5" fill="none">
                  <path d="M 180 160 L 60 60" className="animate-pulse" />
                  <path d="M 180 160 L 300 60" />
                  <path d="M 180 160 L 60 260" />
                  <path d="M 180 160 L 300 260" />
                  <path d="M 180 160 L 180 40" strokeDasharray="4 4" />
                </svg>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 w-full">
                  {ECOSYSTEM_NODES.map((node) => {
                    const isSelected = activeNode === node.id;
                    const isConnected = activeNode ? ECOSYSTEM_NODES.find((n) => n.id === activeNode)?.connections.includes(node.id) : false;

                    return (
                      <motion.button
                        key={node.id}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onClick={() => setActiveNode(node.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`group relative flex flex-col items-start rounded-2xl p-4 text-left transition-all duration-300 shadow-sm ${
                          isSelected
                            ? "border-2 border-gold-500 bg-ink text-white shadow-xl shadow-gold-500/20 ring-2 ring-gold-500/30"
                            : isConnected
                            ? "border-2 border-blue-500/80 bg-blue-50 text-blue-900 opacity-100 shadow-md"
                            : "border border-ink/10 bg-white/70 text-ink opacity-50 hover:opacity-100"
                        }`}
                      >
                        <div className="flex w-full items-center justify-between">
                          <Zap className={`h-4 w-4 ${isSelected ? "text-gold-400" : isConnected ? "text-blue-600" : "text-muted/40"}`} />
                          {isSelected && <span className="h-2 w-2 rounded-full bg-gold-400 animate-ping" />}
                        </div>
                        <span className="mt-3 text-xs font-bold leading-tight">{node.label}</span>
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
