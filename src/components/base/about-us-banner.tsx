'use client'

import axios from 'axios'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function AboutUsBanner() {
  const placeholderSrc = '/placeholder-image.jpg'

  const activeLocale = useLocale()

  const [bannerData, setBannerData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/banner/about`
      )
      setBannerData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const hasFetched = useRef(false)
  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true
      fetchData()
    }
  }, [])

  const sectionContent = {
    caption_th: bannerData?.caption_th || 'เกี่ยวกับเรา',
    caption_en: bannerData?.caption_en || 'about us',
    title_th: bannerData?.title_th || 'The Visual Clinic',
    title_en: bannerData?.title_en || 'The Visual Clinic',
  }

  const captionCard = {
    col1_th: bannerData?.icon_1_caption_th || 'ดูแลโดยแพทย์ผู้มีประสบการณ์',
    col1_en: bannerData?.icon_1_caption_en || 'Cared for by experienced doctors',
    col2_th: bannerData?.icon_2_caption_th || 'ทีมงานมืออาชีพ',
    col2_en: bannerData?.icon_2_caption_en || 'Professional team',
    col3_th: bannerData?.icon_3_caption_th || 'เครื่องมือแพทย์มีมาตรฐาน',
    col3_en: bannerData?.icon_3_caption_en || 'Standard medical equipment',
  }

  return (
    <section className='relative'>
      <div className='flex justify-center relative'>
        <Image
          src={
            bannerData?.background_url
              ? `${process.env.IMAGE_URL}${bannerData?.background_url}`
              : placeholderSrc
          }
          alt='Image'
          width={1920}
          height={500}
          className='w-full h-[750px] md:h-[400px] xl:h-[500px] object-cover'
          placeholder='blur'
          loading='lazy'
          blurDataURL={placeholderSrc}
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center space-y-8 p-4 md:p-6'>
          <div className='space-y-2 text-center'>
            <p className='text-[#9C6E5A] font-semibold capitalize'>
              {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
            </p>
            <h2 className='text-3xl font-light mx-auto capitalize'>
              {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
            </h2>
          </div>

          <div className='bg-white grid grid-cols-1 md:grid-cols-3 p-4 gap-4 rounded-2xl text-center w-full lg:w-[800px] xl:w-[1080px]'>
            <div className='flex flex-col gap-4 py-6'>
              <Image
                src={
                  bannerData?.icon_1_url
                    ? `${process.env.IMAGE_URL}${bannerData?.icon_1_url}`
                    : placeholderSrc
                }
                alt='icon'
                width={60}
                height={60}
                className='aspect-square object-cover mx-auto'
                placeholder='blur'
                loading='lazy'
                blurDataURL={placeholderSrc}
              />
              <p className='capitalize'>
                {activeLocale === 'th' ? captionCard.col1_th : captionCard.col1_en}
              </p>
            </div>
            <div className='flex flex-col gap-4 py-6 md:border-x border-[#473D3C] px-4'>
              <Image
                src={
                  bannerData?.icon_1_url
                    ? `${process.env.IMAGE_URL}${bannerData?.icon_2_url}`
                    : placeholderSrc
                }
                alt='icon'
                width={60}
                height={60}
                className='aspect-square object-cover mx-auto'
                placeholder='blur'
                loading='lazy'
                blurDataURL={placeholderSrc}
              />
              <p className='capitalize'>
                {activeLocale === 'th' ? captionCard.col2_th : captionCard.col2_en}
              </p>
            </div>
            <div className='flex flex-col gap-4 py-6'>
              <Image
                src={
                  bannerData?.icon_1_url
                    ? `${process.env.IMAGE_URL}${bannerData?.icon_3_url}`
                    : placeholderSrc
                }
                alt='icon'
                width={60}
                height={60}
                className='aspect-square object-cover mx-auto'
                placeholder='blur'
                loading='lazy'
                blurDataURL={placeholderSrc}
              />
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
