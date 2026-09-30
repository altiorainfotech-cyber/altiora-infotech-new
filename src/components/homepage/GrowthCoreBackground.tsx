"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const GrowthCoreCanvas = dynamic(() => import("./GrowthCoreCanvas"), { ssr: false });

/**
 * Pauses the WebGL render loop when the hero scrolls out of view (via
 * IntersectionObserver), so the animation costs nothing once the visitor
 * has moved on.
 */
export function GrowthCoreBackground() {
  const activeRef = useRef(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        activeRef.current = entry.isIntersecting;
      },
      { rootMargin: "20% 0px 20% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="absolute inset-0 h-full w-full">
      <GrowthCoreCanvas activeRef={activeRef} />
    </div>
  );
}
