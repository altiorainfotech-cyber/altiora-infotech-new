function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const brandingImages = {
  overview: unsplash("1434030216411-0b793f4b4173", 1200, 900),
} as const;
