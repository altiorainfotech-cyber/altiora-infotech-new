"use client";

import dynamic from "next/dynamic";

const BusinessConsultingHeroVisualClient = dynamic(
  () => import("./BusinessConsultingHeroVisualClient").then((mod) => mod.BusinessConsultingHeroVisualClient),
  { ssr: false }
);

export function BusinessConsultingHeroVisual() {
  return <BusinessConsultingHeroVisualClient />;
}
