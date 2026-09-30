"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Clapperboard, Wand2, Eye, Send } from "lucide-react";

const STAGES = [
  { step: "01", title: "CONCEPT", icon: Compass, desc: "Scriptwriting, narrative & storyboard" },
  { step: "02", title: "PRE-PROD", icon: PenTool, desc: "Casting, location scouting & shot lists" },
  { step: "03", title: "FILMING", icon: Clapperboard, desc: "4K/8K cinema capture & audio recording" },
  { step: "04", title: "POST-PROD", icon: Wand2, desc: "VFX, color grading & motion graphics" },
  { step: "05", title: "REVIEW", icon: Eye, desc: "Director cut review & client approval" },
  { step: "06", title: "DELIVERY", icon: Send, desc: "Multi-platform export & broadcast cuts" },
];

export function VideoProductionJourney() {
  return (
    <div className="rounded-3xl border border-blue-900/15 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/40 p-6 sm:p-10 text-ink shadow-2xl relative overflow-hidden backdrop-blur-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-900/10 pb-5 mb-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800">Production Pipeline</span>
          <h3 className="text-xl sm:text-2xl font-black text-ink mt-1">Cinematic Production Lifecycle</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-900 bg-blue-100/80 px-3.5 py-1.5 rounded-full border border-blue-300 shadow-2xs">
          <span>6-STAGE VIDEO PIPELINE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {STAGES.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-blue-900/10 bg-white/80 p-5 backdrop-blur-md shadow-sm transition-all hover:border-blue-500/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black text-blue-800">{s.step}</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900 text-white shadow-sm border border-blue-800">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <h4 className="mt-3 text-sm font-black text-ink">{s.title}</h4>
              <p className="mt-1 text-[11px] font-medium text-muted leading-snug">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
