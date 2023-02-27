/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: [/(components|data|hooks|utils)\/index.ts/i],
      sideEffects: false,
    });
    return config;
  },
};

module.exports = nextConfig;
