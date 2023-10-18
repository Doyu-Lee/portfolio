/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles/base')],
  },
  // experimental: { optimizeCss: true },
};

module.exports = nextConfig;
