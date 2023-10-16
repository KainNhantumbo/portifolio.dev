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
  },
  webpack: function (config, context) {
    return {
      ...config,
      cache: {
        type: 'memory',
        // allowCollectingMemory: false,
        maxGenerations: 1
      }
    };
  }
};

module.exports = nextConfig;
