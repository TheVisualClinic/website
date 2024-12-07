import { Button } from '@/components/ui/button'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '@/app/[lang]/hooks'
import { handleBookingPixelClick } from '@/lib/handleBookingPixelClick'

export default function CaptionBanner() {
  const activeLocale = useLocale()
  const tBtn = useTranslations('button')
  const placeholderSrc = '/placeholder-image.jpg'

  const socialData = useAppSelector((state) => state.websiteData.socialData)
  const [bannerData, setBannerData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/banner/caption`
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

  return (
    <section className='relative'>
      <Image
        src={
          bannerData?.background_url
            ? `${process.env.IMAGE_URL}${bannerData?.background_url}`
            : placeholderSrc
        }
        alt='Contact Image Cover'
        width={1920}
        height={500}
        className='w-full h-[500px] object-cover'
        placeholder='blur'
        loading='lazy'
        blurDataURL={placeholderSrc}
      />

      <div className='absolute inset-0 flex items-center justify-center px-4'>
        <div className='text-[#483E3B] bg-white/50 backdrop-blur-md rounded-xl p-6 space-y-4 max-w-[600px] px-4 md:px-6'>
          <h3 className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? bannerData?.title_th || '' : bannerData?.title_en || ''}
          </h3>
          <p className='whitespace-pre-line'>
            {activeLocale === 'th' ? bannerData?.content_th || '' : bannerData?.content_en || ''}
          </p>
          <div>
            <Link
              href={socialData.social_line_link}
              target='_blank'
              onClick={() => {
                handleBookingPixelClick('Caption Banner')
              }}
            >
              <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer capitalize'>
                {tBtn('booking')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
