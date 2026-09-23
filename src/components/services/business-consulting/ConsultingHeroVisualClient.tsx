"use client";

import dynamic from "next/dynamic";

const ConsultingHeroVisual = dynamic(
  () => import("@/components/services/business-consulting/ConsultingHeroVisual"),
  { ssr: false }
);

export function ConsultingHeroVisualClient() {
  return <ConsultingHeroVisual />;
}
