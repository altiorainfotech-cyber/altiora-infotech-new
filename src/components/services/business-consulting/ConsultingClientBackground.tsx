"use client";

import dynamic from "next/dynamic";

const ConsultingBackground = dynamic(
  () => import("@/components/services/business-consulting/ConsultingBackground"),
  { ssr: false }
);

export function ConsultingClientBackground() {
  return <ConsultingBackground />;
}
