'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { logoText } from '@/assets/logo'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { startTransition } from 'react'
import { Menu, X } from 'lucide-react'
import anime from 'animejs'

export default function Navbar() {
  const router = useRouter()
  const activeLocale = useLocale()
  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      anime({
        targets: '.mobile-menu',
        translateX: ['100%', '0%'],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500,
      })
    } else {
      anime({
        targets: '.mobile-menu',
        translateX: ['0%', '100%'],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 500,
      })
    }
  }, [isMobileMenuOpen])

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
      <div className='container flex justify-between items-center px-4 sm:px-2'>
        <div className='px-4 py-2 bg-white rounded-full'>
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

        <div className='hidden lg:flex items-center gap-16'>
          <nav className='flex items-center gap-6'>
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

        <div className='lg:hidden flex items-center'>
          <button
            className='text-gray-700'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className='mr-2' />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center mobile-menu'>
          <button
            className='absolute top-4 right-4 text-gray-700'
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label='Close menu'
          >
            <X size={32} />
          </button>
          <nav className='flex flex-col items-center gap-6'>
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
                  } text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className='flex items-center gap-4 mt-8'>
            <span
              className={`cursor-pointer ${
                activeLocale === 'en'
                  ? 'text-[#9C6E5A] font-semibold'
                  : 'text-gray-700 hover:text-gray-500'
              } text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110`}
              onClick={() => {
                onLangChange('en')
                setIsMobileMenuOpen(false)
              }}
            >
              EN
            </span>
            <span className='text-2xl'>|</span>
            <span
              className={`cursor-pointer ${
                activeLocale === 'th'
                  ? 'text-[#9C6E5A] font-semibold'
                  : 'text-gray-700 hover:text-gray-500'
              } text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110`}
              onClick={() => {
                onLangChange('th')
                setIsMobileMenuOpen(false)
              }}
            >
              TH
            </span>
          </div>
        </div>
      )}
    </header>
  )
}
