const isStaticExport = process.env.STATIC_EXPORT === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isStaticExport ? "export" : "standalone",
  images: {
    domains: ["res.cloudinary.com", "drive.google.com", "github.com"],
    // The image optimizer needs a Next.js server, which S3/CloudFront don't provide.
    unoptimized: isStaticExport,
  },
  basePath: "",
};

module.exports = nextConfig;
