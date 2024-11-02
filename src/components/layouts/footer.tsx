'use client'

import { socialFacebook, socialInstagram, socialLine, socialTiktok } from '@/assets/icons'
import { logoTextWhite } from '@/assets/logo'
import { MailIcon, PhoneIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { socialLink, clinicContact } from '@/assets/mock-data/contacts'

export default function Footer() {
  const activeLocale = useLocale()
  const tNavMenu = useTranslations('navMenu')

  const footerCaption = {
    caption_th: '" The Tailor-made Experience "',
    caption_en: '" The Tailor-made Experience "',
  }

  const socialMediaLinks = [
    {
      href: socialLink.facebook,
      icon: socialFacebook,
      alt: 'social icon Facebook',
      label: 'The Visual Clinic รัชโยธิน',
    },
    {
      href: socialLink.instagram,
      icon: socialInstagram,
      alt: 'social icon Instagram',
      label: 'thevisual_clinic',
    },
    {
      href: socialLink.tiktok,
      icon: socialTiktok,
      alt: 'social icon Tiktok',
      label: 'thevisualclinic',
    },
    {
      href: socialLink.line,
      icon: socialLine,
      alt: 'social icon LINE',
      label: '@thevisual_clinic',
    },
  ]

  const menuLinks = [
    { href: `/${activeLocale}/services`, label: tNavMenu('services') },
    { href: `/${activeLocale}/about`, label: tNavMenu('aboutUs') },
    { href: `/${activeLocale}/medical-team`, label: tNavMenu('medicalTeam') },
    { href: `/${activeLocale}/promotions`, label: tNavMenu('promotions') },
    { href: `/${activeLocale}/reviews`, label: tNavMenu('reviews') },
    { href: `/${activeLocale}/blog`, label: tNavMenu('blogs') },
    { href: `/${activeLocale}/contact`, label: tNavMenu('contactUs') },
  ]

  const contactInfo = [
    { icon: <PhoneIcon className='w-5 h-5' />, label: formatPhoneNumber(clinicContact.phone) },
    { icon: <MailIcon className='w-5 h-5' />, label: clinicContact.email },
  ]

  function formatPhoneNumber(phoneNumber: string) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '')
    const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    return formatted
  }

  return (
    <footer className='bg-[#483E3B] text-white pt-14 text-lg md:text-sm'>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
        <div className='lg:col-span-2 text-[#E7DDD3] space-y-4'>
          <Image src={logoTextWhite} alt='The Visual Clinic Logo' width={200} />
          <h3 className='text-4xl dancing-script-font'>
            {activeLocale === 'th' ? footerCaption.caption_th : footerCaption.caption_en}
          </h3>
        </div>

        <div>
          <h2 className='text-lg text-[#B8977F] mb-6'>
            {activeLocale === 'th' ? 'Social Media' : 'Social Media'}
          </h2>
          <ul className='space-y-4'>
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
                    className='opacity-70 group-hover:opacity-100'
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='text-lg text-[#B8977F] mb-6'>{activeLocale === 'th' ? 'เมนู' : 'Menu'}</h2>
          <div className='grid grid-cols-2 gap-4'>
            <ul className='space-y-4 text-white/80'>
              {menuLinks.slice(0, 4).map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className='hover:text-white/100'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='space-y-4 text-white/80'>
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

        <div>
          <h2 className='text-lg text-[#B8977F] mb-6'>
            {activeLocale === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
          </h2>
          <ul className='space-y-4 text-white/80'>
            {contactInfo.map((item, index) => (
              <li key={index} className='flex items-center gap-3'>
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='border-t border-[#665942] mt-8 py-6 text-center'>
        <p className='text-xs text-white/40'>
          Copyright © 2024 The Visual Clinic All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
