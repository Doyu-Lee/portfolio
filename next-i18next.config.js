/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
const ChainedBackend = require('i18next-chained-backend').default;
const LocalStorageBackend = require('i18next-localstorage-backend').default;
const LocizeBackend = require('i18next-locize-backend/cjs');

const isBrowser = typeof window !== 'undefined';

module.exports = {
  // debug: true,
  i18n: {
    defaultLocale: 'ko',
    locales: ['en'],
  },
  backend: {
    backendOptions: [
      {
        expirationTime: 60 * 60 * 1000, // 1 hour
      },
      {
        projectId: 'd3b405cf-2532-46ae-adb8-99e88d876733',
        version: 'latest',
      },
    ],
    backends: isBrowser ? [LocalStorageBackend, LocizeBackend] : [],
  },
  serializeConfig: false,
  use: isBrowser ? [ChainedBackend] : [],
};

export function makeStaticProps(ns = [], opt = {}) {
  return async function getStaticProps(ctx) {
    const props = await getI18nProps(ctx, ns);
    if (opt.emptyI18nStoreStore) {
      // let the client fetch the translations
      props._nextI18Next.initialI18nStore = null;
    }
    return {
      props,
    };
  };
}
