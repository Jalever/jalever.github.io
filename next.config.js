const { withContentlayer } = require("next-contentlayer");
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  // distDir: "docs",
};

module.exports = withContentlayer(nextConfig);
