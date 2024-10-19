import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import { ThemeProvider } from '@/app/[lang]/provider/theme-provider'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Toaster } from '@/components/ui/toaster'
import StoreProvider from '@/app/[lang]/provider/store-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Visual Clinic',
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
      <body className={notoSansThai.className}>
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
