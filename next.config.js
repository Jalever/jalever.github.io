const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  distDir: "docs",
  assetPrefix: "/jalever.github.io/docs",
  basePath: "/jalever.github.io/docs",
};

module.exports = withContentlayer(nextConfig);
