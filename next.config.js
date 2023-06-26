/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "drive.google.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
