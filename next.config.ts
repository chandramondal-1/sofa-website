import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sofa-website',
  assetPrefix: '/sofa-website/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
