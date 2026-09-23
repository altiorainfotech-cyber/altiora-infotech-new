"use client";

import dynamic from "next/dynamic";

const GraphicDesignHeroVisualClient = dynamic(
  () => import("./GraphicDesignHeroVisualClient").then((mod) => mod.GraphicDesignHeroVisualClient),
  { ssr: false }
);

export function GraphicDesignHeroVisual() {
  return <GraphicDesignHeroVisualClient />;
}
