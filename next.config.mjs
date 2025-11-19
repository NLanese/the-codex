import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Set up all path aliases using path.resolve
    config.resolve.alias = {
      ...config.resolve.alias,
      "@helpers": path.resolve("api/helpers"),
      "@jotai": path.resolve("jotai"),
      "@prismaDB": path.resolve("prisma/prismaDB.js"),
      "@graphql": path.resolve("api/graphql"),
      "@Ostrich": path.resolve("OstrichComponents"),
      "@lessonAssets": path.resolve("public/assets/lesson_images"),
    };

    // Allow extensions for .js, .ts, .tsx
    config.resolve.extensions.push(".js", ".ts", ".tsx");

    return config;
  },
};

export default nextConfig;
