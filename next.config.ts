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
  // TODO: These two ignoring should be removed after the project is stable
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }];
    return config;
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    turbo: {
      resolveAlias: {
        // Ref: https://github.com/konvajs/react-konva?tab=readme-ov-file#usage-with-nextjs
        canvas: "./empty.js",
      },
    },
  },
};

export default wrapper(nextConfig);
