import { useLocale } from 'next-intl'

export default function HeaderSection() {
  const activeLocale = useLocale()

  const sectionContent = {
    caption_th: 'บริการทั้งหมดของ The Visual Clinic',
    caption_en: 'All Services of The Visual Clinic',
    title_th:
      'สัมผัสบริการเสริมความงามของเรา \n เพื่อดูแลคุณให้มั่นใจและเป็นตัวเองในเวอร์ชันที่ดีที่สุด',
    title_en:
      'Experience our beauty enhancement services \n to help you feel confident and be the best version of yourself.',
  }

  return (
    <section className='pt-16 bg-[#F9F6F3]'>
      <div className='container'>
        <div className='text-center mb-8 space-y-2'>
          <p className='text-[#9C6E5A] font-semibold'>
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
