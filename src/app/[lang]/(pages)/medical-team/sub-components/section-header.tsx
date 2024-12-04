'use client'

import { useLocale } from 'next-intl'

export default function HeaderSection({ pageData }: any) {
  const activeLocale = useLocale()

  const sectionContent = {
    caption_th: pageData?.caption_th || 'ทีมแพทย์ของเรา',
    caption_en: pageData?.caption_en || 'Our Medical Team',
    title_th:
      pageData?.title_th ||
      'เชี่ยวชาญด้านการปรับรูปหน้า และเลเซอร์ปรับคุณภาพผิว \n ออกแบบการรักษารายบุคคล เพื่อผลลัพธ์ที่ดีที่สุดสำหรับคุณ',
    title_en:
      pageData?.title_en ||
      'Experts in Facial Contouring and Skin Quality Laser Treatment \n Providing Personalized Care for the Best Results',
  }

  return (
    <section className='py-12 md:py-16 bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6'>
        <div className='text-center space-y-2'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-light mx-auto text-[#483E3B] md:whitespace-pre-line'>
            {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
          </h2>
        </div>
      </div>
    </section>
  )
}
