function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const influencerUgcImages = {
  overview: unsplash("1534528741775-53994a69daeb", 1200, 900),
} as const;
