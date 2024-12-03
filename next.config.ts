const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.domain.co(m|.kr)" },
      { protocol: "http", hostname: "**.domain.co(m|.kr)" },
    ],
    domains: ["plus.unsplash.com", "images.unsplash.com"],
  },
};

module.exports = withVanillaExtract(nextConfig);
