import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '/ekocentral-page',
  assetPrefix: '/ekocentral-page/',
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },
};

export default nextConfig;
