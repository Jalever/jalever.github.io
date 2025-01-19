const { withContentlayer } = require("next-contentlayer");
const isGithubPages = process.env.NODE_ENV === "production";
const repositoryName = "jalever.github.io";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  distDir: "docs", // 输出到 docs 目录
  assetPrefix: isGithubPages ? `/${repositoryName}/` : "", // 设置静态资源前缀
  basePath: isGithubPages ? `/${repositoryName}` : "", // 设置基础路径
};

module.exports = withContentlayer(nextConfig);
