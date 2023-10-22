import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.url)
  )
    return;

  const supportedLocales = ['ko', 'en'];
  if (supportedLocales.some((locale) => req.nextUrl.pathname.includes(locale))) {
   
    return NextResponse.redirect(
      new URL(`/${req.nextUrl.href}${req.nextUrl.search}`, req.url),
    );
  }
}
