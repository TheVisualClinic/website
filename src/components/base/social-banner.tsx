'use client'

import {
  socialFacebookSolid,
  socialInstagramSolid,
  socialLineSolid,
  socialTiktokSolid,
} from '@/assets/icons'
import { Separator } from '@/components/ui/separator'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '@/app/[lang]/hooks'

export default function SocialBanner() {
  const activeLocale = useLocale()
  const placeholderSrc = '/placeholder-image.jpg'
  const socialData = useAppSelector((state) => state.websiteData.socialData)

  const [pageData, setPageData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/social-banner`
      )
      setPageData(response.data)
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
    title_th: pageData?.social_title_th || 'ติดตามข่าวสารและโปรโมชันได้ผ่านช่องทาง',
    title_en: pageData?.social_title_en || 'Follow our news and promotions through',
  }

  return (
    <section className='relative'>
      <Image
        src={
          pageData?.background_url
            ? `${process.env.IMAGE_URL}${pageData?.background_url}`
            : placeholderSrc
        }
        alt='Contact Image Cover'
        width={1920}
        height={300}
        className='w-full h-[300px] object-cover'
        placeholder='blur'
        blurDataURL={placeholderSrc}
      />

      <div className='absolute text-center top-0 left-4 md:left-6 right-4 md:right-6 bottom-0 m-auto bg-white/50 backdrop-blur-md h-fit max-w-[860px] py-8 rounded-2xl'>
        <h2 className='text-lg md:text-2xl capitalize'>
          {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
        </h2>
        <Separator className='my-6 max-w-md mx-auto bg-[#483E3B]' />
        <div className='flex items-center gap-6 justify-center'>
          <Link
            href={socialData.social_facebook_link}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialFacebookSolid} alt='Socail Icon' />
          </Link>
          <Link
            href={socialData.social_instagram_link}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialInstagramSolid} alt='Socail Icon' />
          </Link>
          <Link
            href={socialData.social_tiktok_link}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialTiktokSolid} alt='Socail Icon' />
          </Link>
          <Link
            href={socialData.social_line_link}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialLineSolid} alt='Socail Icon' />
          </Link>
        </div>
      </div>
    </section>
  )
}
