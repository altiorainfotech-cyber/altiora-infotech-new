function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const videoProductionImages = {
  overview: unsplash("1574717024653-61fd2cf4d44d", 1200, 900),
} as const;
