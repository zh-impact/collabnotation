import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Tip: The bundleAnalyzer enabled will lead the webpack to used, which leading turbo warning, only enable it when needed
// Ref: https://github.com/vercel/next.js/pull/64740
// Ref: https://github.com/vercel/next.js/issues/64739
const wrapper =
  process.env.ANALYZE === "true"
    ? withBundleAnalyzer
    : (config: NextConfig) => config;

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default wrapper(nextConfig);
