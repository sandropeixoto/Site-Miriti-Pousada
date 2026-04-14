import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Se o repositório for username.github.io/Site-Miriti-Pousada, o basePath deve ser /Site-Miriti-Pousada
  basePath: isProd ? '/Site-Miriti-Pousada' : '',
  images: {
    unoptimized: true, // Necessário para exportação estática se usar next/image
  },
};

export default nextConfig;
