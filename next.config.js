/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeDetection: false
  }
};

module.exports = nextConfig;
