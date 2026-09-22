/**
 * Centralized, replaceable image source map for the Paid Advertising Services page.
 * Temporary licensed stock photos (Unsplash) used during development.
 */

function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const paidAdsImages = {
  overview: unsplash("1686061593213-98dad7c599b9", 1200, 900),
  platforms: {
    facebookInstagram: unsplash("1759215524600-7971d6a4dac0", 800, 800),
    googleAds: unsplash("1573164713988-8665fc963095", 800, 800),
    linkedin: unsplash("1675352162037-792ae4045e3c", 800, 800),
    tiktok: unsplash("1762340277643-b9b9e621eee2", 800, 800),
    microsoftAds: unsplash("1633114128729-0a8dc13406b9", 800, 800),
    twitterX: unsplash("1745848413078-f85af10e5bf2", 800, 800),
  },
} as const;
