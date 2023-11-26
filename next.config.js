/** @type {import('next').NextConfig} */
const withSvgr = require('next-plugin-svgr');
const nextConfig = {};

module.exports = withSvgr({
  webpack(config, options) {
    return config;
  },
});

module.exports = nextConfig;
module.exports = withSvgr();
