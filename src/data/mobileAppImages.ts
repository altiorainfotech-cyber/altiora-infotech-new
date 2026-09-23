function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const mobileAppImages = {
  overview: unsplash("1512941937669-90a1b58e7e9c", 1200, 900),
  platforms: {
    ios: unsplash("1512941937669-90a1b58e7e9c", 800, 800),
    android: unsplash("1551650975-87deedd944c3", 800, 800),
    crossPlatform: unsplash("1526498460520-4c246339dccb", 800, 800),
  },
} as const;
