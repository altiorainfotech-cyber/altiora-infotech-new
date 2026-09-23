function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const webDevImages = {
  overview: unsplash("1498050108023-c5249f4df085", 1200, 900),
  platforms: {
    frontend: unsplash("1555066931-4365d14bab8c", 800, 800),
    backend: unsplash("1526374965328-7f61d4dc18c5", 800, 800),
    fullstack: unsplash("1517694712202-14dd9538aa97", 800, 800),
  },
} as const;
