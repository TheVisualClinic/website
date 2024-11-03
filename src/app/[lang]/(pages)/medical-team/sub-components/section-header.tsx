'use client'

import { useLocale } from 'next-intl'

export default function HeaderSection() {
  const activeLocale = useLocale()

  const sectionContent = {
    caption_th: 'ทีมแพทย์ของเรา',
    caption_en: 'Our Medical Team',
    title_th:
      'เชี่ยวชาญด้านการปรับรูปหน้า และเลเซอร์ปรับคุณภาพผิว \n ออกแบบการรักษารายบุคคล เพื่อผลลัพธ์ที่ดีที่สุดสำหรับคุณ',
    title_en:
      'Experts in Facial Contouring and Skin Quality Laser Treatment \n Providing Personalized Care for the Best Results',
  }

  return (
    <section className='py-16 bg-[#F9F6F3]'>
      <div className='container'>
        <div className='text-center space-y-2'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h2 className='text-3xl font-light mx-auto text-[#483E3B] whitespace-pre-line'>
            {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
          </h2>
        </div>
      </div>
    </section>
  )
}
