'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { logoText } from '@/assets/logo'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { startTransition } from 'react'

export default function Navbar() {
  const router = useRouter()
  const activeLocale = useLocale()
  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuItems = [
    { href: `/${activeLocale}/home`, label: 'หน้าแรก' },
    { href: `/${activeLocale}/services`, label: 'บริการ' },
    { href: `/${activeLocale}/about`, label: 'เกี่ยวกับเรา' },
    { href: `/${activeLocale}/medical-team`, label: 'ทีมแพทย์' },
    { href: `/${activeLocale}/promotions`, label: 'โปรโมชั่น' },
    { href: `/${activeLocale}/reviews`, label: 'รีวิว' },
    { href: `/${activeLocale}/blog`, label: 'บล็อก' },
    { href: `/${activeLocale}/contact`, label: 'ติดต่อเรา' },
  ]

  const pagePathName = usePathname().substring(3)
  const searchParams = useSearchParams().toString()

  const onLangChange = (value: string) => {
    const nextLocale = value
    startTransition(() => {
      router.replace(`/${nextLocale}${pagePathName}${searchParams ? `?${searchParams}` : ''}`)
    })
  }

  return (
    <header
      className={`fixed z-50 w-full py-2 transition-all duration-300 ${
        isScrolled ? 'bg-white/100 shadow-lg' : 'bg-white/20'
      }`}
    >
      <div className='container flex justify-between'>
        <div className='px-6 py-2 bg-white rounded-full'>
          <Image
            src={logoText}
            alt='The Visual Clinic'
            width={isScrolled ? 100 : 150}
            className='cursor-pointer transition-all duration-300'
            onClick={() => {
              router.replace(`/${activeLocale}/home`)
            }}
          />
        </div>

        <div className='flex items-center gap-20'>
          <nav className='flex items-center gap-8'>
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`${
                    isActive
                      ? 'text-[#9C6E5A] hover:text-[#9C6E5A]'
                      : 'text-gray-700 hover:text-gray-500'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className='flex items-center gap-2'>
            <span
              className={`cursor-pointer ${
                activeLocale === 'en'
                  ? 'text-[#9C6E5A] font-semibold'
                  : 'text-gray-700 hover:text-gray-500'
              }`}
              onClick={() => onLangChange('en')}
            >
              EN
            </span>
            <span>|</span>
            <span
              className={`cursor-pointer ${
                activeLocale === 'th'
                  ? 'text-[#9C6E5A] font-semibold'
                  : 'text-gray-700 hover:text-gray-500'
              }`}
              onClick={() => onLangChange('th')}
            >
              TH
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
