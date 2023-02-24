/** @type {import('next').NextConfig} */
module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    domains: ["i.ibb.co"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/:path*",
      },
    ];
  },
};
