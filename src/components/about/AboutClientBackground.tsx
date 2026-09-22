"use client";

import dynamic from "next/dynamic";

const About3DBackground = dynamic(
  () => import("@/components/about/About3DBackground"),
  { ssr: false }
);

export function AboutClientBackground() {
  return <About3DBackground />;
}
