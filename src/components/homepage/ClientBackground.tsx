"use client";

import dynamic from "next/dynamic";

const Background3DCanvas = dynamic(
  () => import("@/components/homepage/Background3DCanvas"),
  { ssr: false }
);

export function ClientBackground() {
  return <Background3DCanvas />;
}
