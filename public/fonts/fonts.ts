/* eslint-disable camelcase */
import {
  Lobster,
  Mansalva,
  Megrim,
  IBM_Plex_Mono,
  Permanent_Marker,
  Baloo_Bhaina_2,
  Chakra_Petch,
  Solway,
} from 'next/font/google';

// logo
export const mansalva = Mansalva({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mansalva',
});

export const megrim = Megrim({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-megrim',
});

// contents
export const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-IBMPlexMono',
});

export const solway = Solway({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-solway',
});

// style
export const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanentMarker',
});

export const balooBhaina = Baloo_Bhaina_2({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-balooBhaina',
});

export const chakraPatch = Chakra_Petch({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-chakraPatch',
});
