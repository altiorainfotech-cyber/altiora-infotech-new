"use client";

import dynamic from "next/dynamic";

const WebDevHeroVisual = dynamic(() => import("@/components/services/web-development/WebDevHeroVisual"), {
  ssr: false,
});

export function WebDevHeroVisualClient() {
  return <WebDevHeroVisual />;
}
