/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: false,
  reactStrictMode: false,
  // output: 'export'
  images: {
    domains: ['dashboard-ashy-alpha.vercel.app']
  }
};

module.exports = nextConfig;
