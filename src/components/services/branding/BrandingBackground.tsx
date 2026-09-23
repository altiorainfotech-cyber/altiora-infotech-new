"use client";

import dynamic from "next/dynamic";

const BrandingClientBackground = dynamic(
  () => import("./BrandingClientBackground").then((mod) => mod.BrandingClientBackground),
  { ssr: false }
);

export function BrandingBackground() {
  return <BrandingClientBackground />;
}
