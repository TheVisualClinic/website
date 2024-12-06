import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['th', 'en'],
  defaultLocale: 'th',
})

export const config = {
  matcher: ['/', '/th/:path*', '/en/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
