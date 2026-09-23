function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const graphicDesignImages = {
  overview: unsplash("1626785774573-4b799315345d", 1200, 900),
} as const;
