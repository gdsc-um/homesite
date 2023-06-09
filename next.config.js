const nextSafe = require("next-safe");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: nextSafe({
          isDev: false,
          contentSecurityPolicy: {
            "base-uri": "'none'",
            "child-src": "'none'",
            "connect-src": "'self' webpack://* https: data:",
            "default-src": "'self'",
            "font-src": "'self'",
            "form-action": "'self'",
            "frame-ancestors": "'none'",
            "frame-src": "'none'",
            "img-src": "'self' https://res.cloudinary.com/",
            "manifest-src": "'self'",
            "media-src": "'self'",
            "object-src": "'none'",
            "prefetch-src": "'self'",
            "script-src": "'self' 'unsafe-eval' 'unsafe-inline' ",
            "style-src": "'self' 'unsafe-inline'",
            "worker-src": "'self' blob:",
          },
        }),
      },
    ];
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
