'use client'

import { useLocale } from 'next-intl'

export default function HeaderSection() {
  const activeLocale = useLocale()

  const sectionContent = {
    caption_th: 'รีวิวจากลูกค้าของเรา',
    caption_en: 'Customer Reviews',
    desctiption_th: 'เสียงตอบรับจากลูกค้าจริง ที่มั่นใจในบริการของเรา \n และผลลัพธ์ที่น่าประทับใจ',
    desctiption_en:
      'Real feedback from our customers who trust our services \n and are impressed with the results.',
  }

  return (
    <section className='py-12 md:py-16 bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6'>
        <div className='text-center space-y-2'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-light mx-auto text-[#483E3B] md:whitespace-pre-line'>
            {activeLocale === 'th' ? sectionContent.desctiption_th : sectionContent.desctiption_en}
          </h2>
        </div>
      </div>
    </section>
  )
}
