import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '/ekocentral-page',
  assetPrefix: '/ekocentral-page/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
