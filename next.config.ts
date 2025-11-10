import type { NextConfig } from "next";

// Automatically detect if we’re in production
const isProd = process.env.NODE_ENV === "production";

// Use GitHub repo name automatically if available
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "gym-buddy"; // fallback if not set locally

const basePath = isProd ? `/${repoName}` : "";
const assetPrefix = isProd ? `/${repoName}/` : "";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",

  // Correct asset paths for GitHub Pages
  basePath,
  assetPrefix,

  // Required for static exports (no server image optimization)
  images: {
    unoptimized: true,
  },

  // Pass base path to client-side code
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
