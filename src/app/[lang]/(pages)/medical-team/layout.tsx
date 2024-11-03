'use client'

import WebLayout from '@/components/layouts/web-layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <WebLayout>{children}</WebLayout>
}
