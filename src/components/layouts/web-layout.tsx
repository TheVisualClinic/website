'use client'

import React from 'react'
import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen'>
      <div className='flex-1 flex flex-col'>
        <Navbar />
        <main className='flex-1 bg-gray-50'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
