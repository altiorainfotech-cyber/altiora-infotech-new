"use client";

import dynamic from "next/dynamic";

const WebDevBackground = dynamic(() => import("@/components/services/web-development/WebDevBackground"), {
  ssr: false,
});

export function WebDevClientBackground() {
  return <WebDevBackground />;
}
