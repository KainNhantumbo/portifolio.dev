/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
  compiler: {
    styledComponents: true
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt']
  }
};

module.exports = nextConfig;
