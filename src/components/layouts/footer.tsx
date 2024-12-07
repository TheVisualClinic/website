'use client'

import axios from 'axios'

import { socialFacebook, socialInstagram, socialLine, socialTiktok } from '@/assets/icons'
import { logoTextWhite } from '@/assets/logo'
import { MailIcon, PhoneIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { formatPhoneNumber } from '@/lib/phoneFormatter'
import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/[lang]/hooks'
import { setContactData, setSocialData } from '@/lib/store/features/websiteData'

export default function Footer() {
  const activeLocale = useLocale()
  const tNavMenu = useTranslations('navMenu')
  const dispatch = useAppDispatch()
  const contactData = useAppSelector((state) => state.websiteData.contactData)
  const socialData = useAppSelector((state) => state.websiteData.socialData)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/footer`
      )
      dispatch(setContactData(response.data))
      dispatch(setSocialData(response.data))
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

  const footerCaption = {
    caption_th: '" The Tailor-made Experience "',
    caption_en: '" The Tailor-made Experience "',
  }

  const socialMediaLinks = [
    {
      href: socialData?.social_facebook_link || '',
      icon: socialFacebook,
      alt: 'social icon Facebook',
      label: socialData?.social_facebook_label,
    },
    {
      href: socialData?.social_instagram_link || '',
      icon: socialInstagram,
      alt: 'social icon Instagram',
      label: socialData?.social_instagram_label,
    },
    {
      href: socialData?.social_tiktok_link || '',
      icon: socialTiktok,
      alt: 'social icon Tiktok',
      label: socialData?.social_tiktok_label,
    },
    {
      href: socialData?.social_line_link || '',
      icon: socialLine,
      alt: 'social icon LINE',
      label: socialData?.social_line_label,
    },
  ]

  const menuLinks = [
    { href: `/${activeLocale}/services`, label: tNavMenu('services') },
    { href: `/${activeLocale}/about-us`, label: tNavMenu('aboutUs') },
    { href: `/${activeLocale}/medical-team`, label: tNavMenu('medicalTeam') },
    { href: `/${activeLocale}/promotions`, label: tNavMenu('promotions') },
    { href: `/${activeLocale}/reviews`, label: tNavMenu('reviews') },
    { href: `/${activeLocale}/blog`, label: tNavMenu('blogs') },
    { href: `/${activeLocale}/contact`, label: tNavMenu('contactUs') },
  ]

  const contactInfo = [
    { icon: <PhoneIcon className='w-5 h-5' />, label: formatPhoneNumber(contactData.phone_number) },
    { icon: <MailIcon className='w-5 h-5' />, label: contactData.email },
  ]

  const copyrightText = 'Copyright © 2024 The Visual Clinic All Rights Reserved.'

  return (
    <footer className='bg-[#483E3B] text-white pt-8 text-lg md:text-sm'>
      <div className='container px-4 md:px-6 grid grid-cols-12 gap-6'>
        <div className='col-span-12 md:col-span-6 xl:col-span-4'>
          <div className='text-[#E7DDD3] space-y-4'>
            <Image src={logoTextWhite} alt='The Visual Clinic Logo' width={200} loading='lazy' />
            <h3 className='text-3xl dancing-script-font'>
              {activeLocale === 'th' ? footerCaption.caption_th : footerCaption.caption_en}
            </h3>
          </div>
        </div>

        <div className='col-span-12 md:col-span-6 xl:col-span-3 md:mt-0'>
          <h2 className='text-lg text-[#B8977F] mb-4 md:mb-6'>
            {activeLocale === 'th' ? 'Social Media' : 'Social Media'}
          </h2>
          <ul className='space-y-3'>
            {socialMediaLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  target='_blank'
                  className='group flex items-center gap-4 text-white/80 hover:text-white'
                >
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={20}
                    loading='lazy'
                    className='opacity-70 group-hover:opacity-100'
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='col-span-12 md:col-span-6 xl:col-span-2'>
          <h2 className='text-lg text-[#B8977F] mb-4'>{activeLocale === 'th' ? 'เมนู' : 'Menu'}</h2>
          <div className='grid grid-cols-2'>
            <ul className='space-y-3 text-white/80'>
              {menuLinks.slice(0, 4).map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className='hover:text-white/100'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='space-y-3 text-white/80'>
              {menuLinks.slice(4).map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className='hover:text-white/100'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='col-span-12 md:col-span-6 xl:col-span-3 mt-2 xl:mt-0'>
          <div className='xl:w-fit mx-auto'>
            <h2 className='text-lg text-[#B8977F] mb-4'>
              {activeLocale === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
            </h2>
            <ul className='space-y-3 text-white/80'>
              {contactInfo.map((item, index) => (
                <li key={index} className='flex items-center gap-3'>
                  {item.icon} {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-[#665942] mt-8 py-6 text-center'>
        <p className='text-xs text-white/40'>{copyrightText}</p>
      </div>
    </footer>
  )
}
