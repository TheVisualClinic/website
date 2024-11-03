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
import { socialLink } from '@/assets/mock-data/contacts'

export default function SocialMediaSection() {
  const activeLocale = useLocale()
  const sectionImage = '/storage/clinic-img-9.webp'

  const sectionContent = {
    title_th: 'ติดตามข่าวสารและโปรโมชั่นได้ผ่านช่องทาง',
    title_en: 'Follow our news and promotions through',
  }

  return (
    <section className='relative'>
      <Image
        src={`${process.env.STORAGE_PROVIDER_URL}${sectionImage}`}
        alt='Banner'
        width={1920}
        height={300}
        className='w-full h-[300px] object-cover'
      />

      <div className='absolute text-center top-0 left-0 right-0 bottom-0 m-auto bg-white/50 backdrop-blur-md h-fit max-w-[860px] py-8 rounded-2xl'>
        <h2 className='text-2xl capitalize'>
          {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
        </h2>
        <Separator className='my-6 max-w-md mx-auto bg-[#483E3B]' />
        <div className='flex items-center gap-6 justify-center'>
          <Link
            href={socialLink.facebook}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialFacebookSolid} alt='Socail Icon' />
          </Link>
          <Link
            href={socialLink.instagram}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialInstagramSolid} alt='Socail Icon' />
          </Link>
          <Link
            href={socialLink.tiktok}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialTiktokSolid} alt='Socail Icon' />
          </Link>
          <Link
            href={socialLink.line}
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
