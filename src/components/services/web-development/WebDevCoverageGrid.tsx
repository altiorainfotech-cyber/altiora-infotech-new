"use client";

import { motion, useReducedMotion } from "framer-motion";
import { webDevOverview } from "@/data/webDevelopment";

export function WebDevCoverageGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {webDevOverview.capabilities.map((item, idx) => {
        const Icon = item.icon;
        const gold = idx % 2 === 1;

        return (
          <motion.div
            key={item.label}
            className="[perspective:1200px]"
            initial={prefersReducedMotion ? undefined : { opacity: 0, rotateX: -55, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="group relative h-[120px]"
              animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 3.2 + (idx % 4) * 0.4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}
            >
              <div
                tabIndex={0}
                className="focus-ring relative h-full w-full cursor-pointer rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]"
              >
                {/* Front face */}
                <div className="absolute inset-0 flex h-full items-center gap-3.5 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-sm backdrop-blur-md [backface-visibility:hidden]">
                  <div
                    className={
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white border shadow-md " +
                      (gold
                        ? "bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 border-gold-300/40"
                        : "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 border-blue-400/30")
                    }
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-ink leading-snug">
                    {item.label}
                  </span>
                </div>

                {/* Back face */}
                <div
                  className={
                    "absolute inset-0 flex h-full flex-col items-start justify-center gap-1.5 rounded-2xl p-4 text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] " +
                    (gold
                      ? "bg-gradient-to-br from-gold-600 via-gold-700 to-ink"
                      : "bg-gradient-to-br from-blue-700 via-blue-900 to-ink")
                  }
                >
                  <Icon className="h-5 w-5 text-white/80" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-bold leading-snug">{item.detail}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
