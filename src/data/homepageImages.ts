/**
 * Centralized, replaceable image source map for the homepage.
 * These are temporary licensed stock photos (Unsplash) used during
 * development. Swap the URL strings for local assets / CDN / CMS
 * output later without touching component structure.
 */

function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const homepageImages = {
  hero: {
    growth: unsplash("1454165804606-c3d57bc86b40", 1600, 1200),
    aiSearch: unsplash("1573164713988-8665fc963095", 1600, 1200),
    fullFunnel: unsplash("1522202176988-66273c2fd55f", 1600, 1200),
  },
  aeoGeo: unsplash("1620712943543-bcc4688e7485", 1400, 1400),
  finalCta: unsplash("1522071820081-009f0129c71c", 1920, 1080),
  industries: {
    healthcare: unsplash("1571171637578-41bc2dd41cd2", 900, 1100),
    ecommerce: unsplash("1556742049-0cfed4f6a45d", 900, 1100),
    "professional-services": unsplash("1600880292203-757bb62b4baf", 900, 1100),
    "local-businesses": unsplash("1560472354-b33ff0c44a43", 900, 1100),
    technology: unsplash("1556155092-490a1ba16284", 900, 1100),
    education: unsplash("1523240795612-9a054b0db644", 900, 1100),
    "real-estate": unsplash("1580587771525-78b9dba3b914", 900, 1100),
  },
} as const;
