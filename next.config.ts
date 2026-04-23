import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  output: 'export',
  // Quando usando domínio próprio no GitHub Pages, o basePath deve ser vazio
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
