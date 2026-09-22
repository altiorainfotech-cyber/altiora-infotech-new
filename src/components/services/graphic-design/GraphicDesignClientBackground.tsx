"use client";

import dynamic from "next/dynamic";

const GraphicDesignBackground = dynamic(
  () => import("@/components/services/graphic-design/GraphicDesignBackground"),
  { ssr: false }
);

export function GraphicDesignClientBackground() {
  return <GraphicDesignBackground />;
}
