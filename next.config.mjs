import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // The BetBot's analysis reads the NBA history files from disk at request time, so Vercel has to be told to ship them
    outputFileTracingIncludes: {
      "/api/betBot/analyze": ["./constants/projects/betBot/nbaHistory/**/*"],
    },
  },
  webpack: (config) => {
    // Set up all path aliases using path.resolve
    config.resolve.alias = {
      ...config.resolve.alias,
      "@helpers": path.resolve("server/helpers"),
      "@jotai": path.resolve("jotai"),
      "@prismaDB": path.resolve("prisma/prismaDB.js"),
      "@graphql": path.resolve("server/graphql"),
      "@Ostrich": path.resolve("OstrichComponents"),
      "@lessonAssets": path.resolve("public/assets/lesson_images"),
    };

    // Allow extensions for .js, .ts, .tsx
    config.resolve.extensions.push(".js", ".ts", ".tsx");

    return config;
  },
};

export default nextConfig;
