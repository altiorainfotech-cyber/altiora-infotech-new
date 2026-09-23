function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const socialMediaImages = {
  overview: unsplash("1611162617474-5b21e879e113", 1200, 900),
  platforms: {
    instagram: unsplash("1611262588024-d12430b98920", 800, 800),
    facebook: unsplash("1563986768609-322da13575f3", 800, 800),
    linkedin: unsplash("1616469829941-c7200edec809", 800, 800),
    tiktok: unsplash("1611605698335-8b1569810432", 800, 800),
    youtube: unsplash("1611162616305-c69b3fa7fbe0", 800, 800),
  },
} as const;
