import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.pixabay.com', 'fabrilife.com'],
  },
  output: 'export',  // This enables static export
};

export default nextConfig;
