const nextSafe = require("next-safe");
const { headers } = require("next/dist/client/components/headers");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "localhost",
      "res.cloudinary.com",
      "drive.google.com",
      "lh3.googleusercontent.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: nextSafe({
          contentSecurityPolicy: {
            "base-uri": "'none'",
            "child-src": "'none'",
            "connect-src": "'self' webpack://* https: data:",
            "default-src": "'self'",
            "font-src": "'self'",
            "form-action": "'self'",
            "frame-ancestors": "'none'",
            "frame-src": "'none'",
            "img-src":
              "'self' https://drive.google.com https://*.googleusercontent.com https://*.datocms-assets.com https://res.cloudinary.com https://*.googleapis.com https://*.gstatic.com data:",
            "manifest-src": "'self'",
            "media-src": "'self'",
            "object-src": "'none'",
            "prefetch-src": "'self'",
            "script-src":
              "'self' 'unsafe-eval' 'unsafe-inline'  'sha256-wzRmNN3+4L3v3ZHovwiO9F+QFCmvsqZ8zZ05lCRcmOY='",
            "style-src": "'self' 'unsafe-inline'",
            "worker-src": "'self' blob:",
          },
        }),
      },
    ];
  },
};

module.exports = nextConfig;
