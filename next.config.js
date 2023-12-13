/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  optimizeFonts: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt']
  }
};

module.exports = nextConfig;
