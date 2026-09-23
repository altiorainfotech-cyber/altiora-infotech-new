function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const businessConsultingImages = {
  overview: unsplash("1454165804606-c3d57bc86b40", 1200, 900),
} as const;
