export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.altiorainfotech.com";

export const SITE_NAME = "Altiora Infotech";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const PRIMARY_CTA = { label: "Let's Talk", href: "/contact" } as const;
