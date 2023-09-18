/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  output: {
    dir: "out",
  },
};

module.exports = nextConfig;
