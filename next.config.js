/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  optimizeFonts: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
};