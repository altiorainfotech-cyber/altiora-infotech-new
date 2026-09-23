"use client";

import dynamic from "next/dynamic";

const GraphicDesignClientBackground = dynamic(
  () => import("./GraphicDesignClientBackground").then((mod) => mod.GraphicDesignClientBackground),
  { ssr: false }
);

export function GraphicDesignBackground() {
  return <GraphicDesignClientBackground />;
}
