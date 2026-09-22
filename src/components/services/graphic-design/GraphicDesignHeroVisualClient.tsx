"use client";

import dynamic from "next/dynamic";

const GraphicDesignHeroVisual = dynamic(
  () => import("@/components/services/graphic-design/GraphicDesignHeroVisual"),
  { ssr: false }
);

export function GraphicDesignHeroVisualClient() {
  return <GraphicDesignHeroVisual />;
}
