/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "*",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "*",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "*",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "*",
      },
    ],
    domains: [
      "res.cloudinary.com",
      "picsum.photos",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
};

module.exports = nextConfig;
