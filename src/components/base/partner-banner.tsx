import axios from 'axios'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function PartnerBanner() {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()

  const [bannerData, setBannerData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/banner/partners`
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
    title_th: bannerData?.title_th || 'พาร์ทเนอร์แบรนด์คุณภาพระดับโลก',
    title_en: bannerData?.title_en || 'Global Quality Partner Brands',
  }

  return (
    <section className='py-12 md:py-16 bg-white px-4 md:px-6'>
      <div className='container px-4 md:px-6 space-y-6'>
        <div className='text-center'>
          <h2 className='text-xl md:text-3xl font-semibold text-[#483E3B]'>
            {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
          </h2>
        </div>
        {/* Partner Image lg */}
        <Image
          src={
            bannerData?.image_lg_url
              ? `${process.env.IMAGE_URL}${bannerData?.image_lg_url}`
              : placeholderSrc
          }
          alt='Partner'
          width={1920}
          height={1080}
          className='w-full h-auto hidden xl:block'
          placeholder='blur'
          loading='lazy'
          blurDataURL={placeholderSrc}
        />
        {/* Partner Image md */}
        <Image
          src={
            bannerData?.image_lg_url
              ? `${process.env.IMAGE_URL}${bannerData?.image_md_url}`
              : placeholderSrc
          }
          alt='Partner'
          width={1920}
          height={1080}
          className='w-full h-auto hidden lg:block xl:hidden'
          placeholder='blur'
          loading='lazy'
          blurDataURL={placeholderSrc}
        />
        {/* Partner Image sm */}
        <Image
          src={
            bannerData?.image_lg_url
              ? `${process.env.IMAGE_URL}${bannerData?.image_sm_url}`
              : placeholderSrc
          }
          alt='Partner'
          width={1920}
          height={1080}
          className='w-full h-auto lg:hidden'
          placeholder='blur'
          loading='lazy'
          blurDataURL={placeholderSrc}
        />
      </div>
    </section>
  )
}
