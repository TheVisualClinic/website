'use client'

import {
  socialFacebookSolid,
  socialInstagramSolid,
  socialLineSolid,
  socialTiktokSolid,
} from '@/assets/icons'
import { Separator } from '@/components/ui/separator'
import { Clock2Icon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { formatPhoneNumber } from '@/lib/phoneFormatter'
import { useAppSelector } from '@/app/[lang]/hooks'

export default function ContactSection({ pageData }: any) {
  const activeLocale = useLocale()
  const contactData = useAppSelector((state) => state.websiteData.contactData)
  const socialData = useAppSelector((state) => state.websiteData.socialData)

  const sectionContent = {
    caption_th: pageData?.caption_th || 'The Visual Clinic',
    caption_en: pageData?.caption_en || 'The Visual Clinic',
    description_th:
      pageData?.description_th ||
      'ติดต่อเราวันนี้เพื่อรับข้อมูลเพิ่มเติมเกี่ยวกับบริการของเรา \n ทีมงานของเราพร้อมให้คำแนะนำและช่วยเหลือคุณในทุกขั้นตอน',
    description_en:
      pageData?.description_en ||
      'Contact us today to learn more about our services. \n Our team is ready to provide guidance and assist you every step of the way.',
  }

  const sectionSocialMedia = {
    title_th: pageData?.social_title_th || 'ติดตามข่าวสารและโปรโมชันได้ผ่านช่องทาง',
    title_en: pageData?.social_title_en || 'Follow our news and promotions through',
  }

  return (
    <section className='py-16 bg-[#F9F6F3] text-[#483E3B]'>
      <div className='container space-y-10 px-4 sm:px-8'>
        <div className='space-y-2'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h2 className='text-lg font-light sm:text-2xl lg:text-2xl w-full text-[#483E3B] md:whitespace-pre-line'>
            {activeLocale === 'th' ? sectionContent.description_th : sectionContent.description_en}
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='border border-[#473D3C] rounded-xl p-6 space-y-4'>
            <h3 className='text-2xl'>{activeLocale === 'th' ? 'ติดต่อเรา' : 'Contact Us'}</h3>
            <div className='flex items-center gap-4'>
              <MapPinIcon className='min-w-6 min-h-6' />
              <p>{activeLocale === 'th' ? pageData?.address_th : pageData?.address_en}</p>
            </div>
            <div className='flex items-center gap-4'>
              <PhoneIcon className='min-w-6 min-h-6' />
              <p>{formatPhoneNumber(contactData.phone_number)}</p>
            </div>
            <div className='flex items-center gap-4'>
              <MailIcon className='min-w-6 min-h-6' />
              <p>{contactData.email}</p>
            </div>
            <div className='flex items-center gap-4'>
              <Clock2Icon className='min-w-6 min-h-6' />
              <p>
                {activeLocale === 'th' ? pageData?.opening_hours_th : pageData?.opening_hours_en}
              </p>
            </div>
          </div>
          <div>
            <iframe
              src={pageData?.google_map}
              width='100%'
              height='100%'
              style={{ border: 0 }}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='rounded-xl aspect-square md:aspect-video'
            ></iframe>
          </div>
        </div>

        <div className='text-center'>
          <h2 className='text-xl sm:text-2xl capitalize'>
            {activeLocale === 'th' ? sectionSocialMedia.title_th : sectionSocialMedia.title_en}
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
      </div>
    </section>
  )
}
