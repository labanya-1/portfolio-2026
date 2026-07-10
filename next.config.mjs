import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const isGithubActions = process.env.GITHUB_ACTIONS === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubActions
    ? {
        output: "export",
        basePath: "/portfolio-2026",
        assetPrefix: "/portfolio-2026",
        trailingSlash: true,
      }
    : {}),
  turbopack: {
    root: __dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
