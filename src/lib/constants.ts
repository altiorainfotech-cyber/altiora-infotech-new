export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.altiorainfotech.com";

export const SITE_NAME = "Altiora Infotech";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export const PRIMARY_CTA = { label: "Let's Talk", href: "/contact" } as const;
