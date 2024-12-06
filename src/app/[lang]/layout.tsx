import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import { ThemeProvider } from '@/app/[lang]/provider/theme-provider'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Toaster } from '@/components/ui/toaster'
import StoreProvider from '@/app/[lang]/provider/store-provider'
import { FacebookPixelEvents } from '@/components/tertiary/facebook-pixel-events'
import { Suspense } from 'react'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Visual Clinic - คลินิกความงาม | ดูแลผิวหน้า',
  description:
    'The Visual Clinic บริการเสริมความงามครบวงจร ดูแลผิวหน้า ปรับรูปหน้า เลเซอร์ยกกระชับ เลเซอร์เพื่อคุณภาพผิว ฟิลเลอร์ โบท็อกซ์',
  keywords:
    'คลินิกความงาม, ดูแลผิวหน้า, เสริมความงาม, คลินิกเลเซอร์หน้าใส, คลินิกรักษาหลุมสิว, ยกกระชับใบหน้า, ปรับรูปหน้า, ฟิลเลอร์, โบท็อกซ์',
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://thevisual-clinic.com',
    title: 'The Visual Clinic - บริการเสริมความงามครบวงจร',
    description:
      'The Visual Clinic บริการเสริมความงามครบวงจร ดูแลผิวหน้า ปรับรูปหน้า เลเซอร์ยกกระชับ เลเซอร์เพื่อคุณภาพผิว ฟิลเลอร์ โบท็อกซ์',
    siteName: 'The Visual Clinic',
    images: [
      {
        url: 'https://thevisual-clinic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Visual Clinic',
      },
    ],
  },
}

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  const messages = useMessages()

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='canonical' href={`https://thevisual-clinic.com/${lang}`} />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG}`}
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG}', { anonymize_ip: true });
          `}
        </Script>
      </head>
      <body className={notoSansThai.className}>
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
        <StoreProvider>
          <NextIntlClientProvider messages={messages} locale={lang}>
            <ThemeProvider
              attribute='class'
              defaultTheme='light'
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
