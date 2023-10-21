/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  transpilePackages: ['@mono-repo/notion', '@mono-repo/core'],
  sassOptions: {
    includePaths: [path.join(__dirname, '../core/src/styles/base')],
  }
}

module.exports = nextConfig
