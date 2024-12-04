'use client'

import { useLocale } from 'next-intl'

export default function HeaderSection({ pageData }: any) {
  const activeLocale = useLocale()

  const sectionContent = {
    caption_th: pageData?.caption_th || 'The Visual Clinic',
    caption_en: pageData?.caption_en || 'The Visual Clinic',
    title_th: pageData?.slogan || '" The Tailor-made Experience "',
    title_en: pageData?.slogan || '" The Tailor-made Experience "',
    description_th:
      pageData?.description_th ||
      'สัมผัสประสบการณ์ที่ออกแบบมาเฉพาะคุณที่ The Visual Clinic \n เราให้ความสำคัญกับการดูแลแบบเฉพาะบุคคล ด้วยทีมแพทย์ผู้มีประสบการณ์และเทคโนโลยีที่ทันสมัย \n เพื่อให้คุณได้รับการดูแลที่ดีที่สุดและมั่นใจได้ในทุกขั้นตอน',
    description_en:
      pageData?.description_en ||
      'Experience a tailor-made journey at The Visual Clinic. \n We prioritize personalized care with an experienced team of doctors and advanced technology, \n ensuring you receive the best care and confidence at every step.',
  }

  return (
    <section className='pt-12 md:pt-16 bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6'>
        <div className='text-center mb-8 space-y-4'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h3 className='text-3xl md:text-4xl dancing-script-font text-gray-600'>
            {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
          </h3>
          <p className='text-[#AEA596] md:whitespace-pre-line'>
            {activeLocale === 'th' ? sectionContent.description_th : sectionContent.description_en}
          </p>
        </div>
      </div>
    </section>
  )
}
