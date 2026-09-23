function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const seoImages = {
  overview: unsplash("1460925895917-afdab827c52f", 1200, 900),
  platforms: {
    googleSearch: unsplash("1573164713988-8665fc963095", 800, 800),
    bingSearch: unsplash("1633114128729-0a8dc13406b9", 800, 800),
    analytics: unsplash("1551288049-bebda4e38f71", 800, 800),
  },
} as const;
