'use client'

import { useLocale } from 'next-intl'

export default function HeaderSection({ pageData }: any) {
  const activeLocale = useLocale()

  const sectionContent = {
    caption_th: pageData?.caption_th || 'ติดต่อเรา',
    caption_en: pageData?.caption_en || 'Contact Us',
    description_th:
      pageData?.description_th || 'เรายินดีให้คำปรึกษาและพร้อมช่วยเหลือทุกความต้องการของคุณ',
    description_en:
      pageData?.description_en ||
      'We are happy to provide consultation and ready to assist \n with all your needs.',
  }

  return (
    <section className='py-8 sm:py-16 bg-[#F9F6F3]'>
      <div className='container'>
        <div className='text-center space-y-2'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-light mx-auto text-[#483E3B] whitespace-pre-line'>
            {activeLocale === 'th' ? sectionContent.description_th : sectionContent.description_en}
          </h2>
        </div>
      </div>
    </section>
  )
}
