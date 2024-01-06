/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/uyelik",
        destination: "/login",
      },
      {
        source: "/kayit-ol",
        destination: "/register",
      },
      {
        source: "/kurumsal-uye-ol",
        destination: "/company-register",
      },
    ];
  },
};

module.exports = nextConfig;
