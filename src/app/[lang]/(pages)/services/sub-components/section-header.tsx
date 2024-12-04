import { useLocale } from 'next-intl'

export default function HeaderSection({ pageData }: any) {
  const activeLocale = useLocale()

  const sectionContent = {
    caption_th: pageData?.caption_th || 'บริการทั้งหมดของ The Visual Clinic',
    caption_en: pageData?.caption_en || 'All Services of The Visual Clinic',
    title_th:
      pageData?.title_th ||
      'สัมผัสบริการเสริมความงามของเรา \n เพื่อดูแลคุณให้มั่นใจและเป็นตัวเองในเวอร์ชันที่ดีที่สุด',
    title_en:
      pageData?.title_en ||
      'Experience our beauty enhancement services \n to help you feel confident and be the best version of yourself.',
  }

  return (
    <section className='pt-12 md:pt-16 bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6'>
        <div className='text-center mb-8 space-y-2'>
          <p className='text-[#9C6E5A] font-semibold'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h2 className='text-xl font-light mx-auto text-[#483E3B] md:whitespace-pre-line'>
            {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
          </h2>
        </div>
      </div>
    </section>
  )
}
