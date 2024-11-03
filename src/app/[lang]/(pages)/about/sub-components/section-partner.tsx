'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'

export default function PartnerSection() {
  const activeLocale = useLocale()

  const sectionContent = {
    title_th: 'พาร์ทเนอร์แบรนด์คุณภาพระดับโลก',
    title_en: 'Global Quality Partner Brands',
  }

  const partnerImage = {
    desktop: '/storage/partner-desktop.png',
    teblet: '/storage/partner-teblet.png',
    mobile: '/storage/partner-mobile.png',
  }

  return (
    <section className='py-16 bg-white px-4 md:px-6'>
      <div className='container space-y-6'>
        <div className='text-center'>
          <h2 className='text-3xl font-semibold'>
            {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
          </h2>
        </div>
        <Image
          src={`${process.env.STORAGE_PROVIDER_URL}${partnerImage.desktop}`}
          alt='Partner'
          width={1920}
          height={1080}
          className='w-full h-auto hidden xl:block'
        />
        <Image
          src={`${process.env.STORAGE_PROVIDER_URL}${partnerImage.teblet}`}
          alt='Partner'
          width={1920}
          height={1080}
          className='w-full h-auto hidden lg:block xl:hidden'
        />
        <Image
          src={`${process.env.STORAGE_PROVIDER_URL}${partnerImage.mobile}`}
          alt='Partner'
          width={1920}
          height={1080}
          className='w-full h-auto lg:hidden'
        />
      </div>
    </section>
  )
}
