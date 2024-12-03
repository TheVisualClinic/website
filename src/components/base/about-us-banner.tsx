'use client'

import { aboutIcon1, aboutIcon2, aboutIcon3 } from '@/assets/icons'
import { useLocale } from 'next-intl'
import Image from 'next/image'

export default function AboutUsBanner() {
  const activeLocale = useLocale()

  const sectionImage = '/storage/clinic-img-1.webp'

  const sectionContent = {
    caption_th: 'เกี่ยวกับเรา',
    caption_en: 'about us',
    titile_th: 'The Visual Clinic',
    titile_en: 'The Visual Clinic',
  }

  const captionCard = {
    col1_th: 'ดูแลโดยแพทย์ผู้มีประสบการณ์',
    col1_en: 'Cared for by experienced doctors',
    col2_th: 'ทีมงานมืออาชีพ',
    col2_en: 'Professional team',
    col3_th: 'เครื่องมือแพทย์มีมาตรฐาน',
    col3_en: 'Standard medical equipment',
  }

  return (
    <section className='relative'>
      <div className='flex justify-center relative'>
        <Image
          src={`${process.env.MAIN_SERVICES_URL}${sectionImage}`}
          alt='home page hero image'
          width={1920}
          height={500}
          className='w-full h-[750px] md:h-[400px] xl:h-[500px] object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center space-y-8 p-4 md:p-6'>
          <div className='space-y-2 text-center'>
            <p className='text-[#9C6E5A] font-semibold capitalize'>
              {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
            </p>
            <h2 className='text-3xl font-light mx-auto capitalize'>
              {activeLocale === 'th' ? sectionContent.titile_th : sectionContent.titile_en}
            </h2>
          </div>

          <div className='bg-white grid grid-cols-1 md:grid-cols-3 p-4 gap-4 rounded-2xl text-center w-full lg:w-[800px] xl:w-[1080px]'>
            <div className='flex flex-col gap-4 py-6'>
              <Image src={aboutIcon1} alt='icon' width={60} className='mx-auto' />
              <p className='capitalize'>
                {activeLocale === 'th' ? captionCard.col1_th : captionCard.col1_en}
              </p>
            </div>
            <div className='flex flex-col gap-4 py-6 md:border-x border-[#473D3C] px-4'>
              <Image src={aboutIcon2} alt='icon' width={60} className='mx-auto' />
              <p className='capitalize'>
                {activeLocale === 'th' ? captionCard.col2_th : captionCard.col2_en}
              </p>
            </div>
            <div className='flex flex-col gap-4 py-6'>
              <Image src={aboutIcon3} alt='icon' width={60} className='mx-auto' />
              <p className='capitalize'>
                {activeLocale === 'th' ? captionCard.col3_th : captionCard.col3_en}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
