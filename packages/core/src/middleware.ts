import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  )
    return;

  const supportedLocales = ['ko', 'en'];
  if (!supportedLocales.some((locale) => req.nextUrl.pathname.includes(locale))) {
    const locale = req.cookies.get('i18next')?.value || 'ko';

    // eslint-disable-next-line consistent-return
    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url),
    );
  }
}
