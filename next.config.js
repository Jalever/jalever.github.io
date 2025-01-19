const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  distDir: "docs",
  basePath: "/docs",
};

module.exports = withContentlayer(nextConfig);
