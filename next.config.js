/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index'
      },

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
      {
        source: '/hesabim/bilgilerim',
        destination: '/profile',
      }
    ];
  },
};

module.exports = nextConfig;
