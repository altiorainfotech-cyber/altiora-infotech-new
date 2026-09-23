import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pub-00cafda969bc42d5aac5365b6609f526.r2.dev",
      },
    ],
  },
};

export default nextConfig;
