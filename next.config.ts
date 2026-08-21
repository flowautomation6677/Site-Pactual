import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/teste',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
