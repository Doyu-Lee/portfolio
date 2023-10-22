/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withTM = require('next-transpile-modules')(["../shared"], ["../core"]);
const path = require('path');

const nextConfig = {
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '../core/src/styles/base')],
  }
};

module.exports = withPlugins([
  [withBundleAnalyzer, {
  enabled: process.env.ANALYZE === 'true',
}], 
  [withTM]
 ] , nextConfig)

