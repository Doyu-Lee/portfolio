/* eslint-disable camelcase */
import {
  Lobster,
  Mansalva,
  Megrim,
  IBM_Plex_Mono,
  Permanent_Marker,
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

export const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanentMarker',
});

// style
export const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-IBMPlexMono',
});
