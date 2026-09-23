function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const aeoGeoImages = {
  overview: unsplash("1677442136019-21780efad99a", 1200, 900),
  platforms: {
    chatgpt: unsplash("1677442136019-21780efad99a", 800, 800),
    claude: unsplash("1618005182384-a83a8bd57fbe", 800, 800),
    perplexity: unsplash("1620712943543-bcc4688e7485", 800, 800),
    searchgpt: unsplash("1573164713988-8665fc963095", 800, 800),
  },
} as const;
