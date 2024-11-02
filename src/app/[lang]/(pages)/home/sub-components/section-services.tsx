'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import anime from 'animejs'
import { servicesList } from '@/assets/mock-data/services'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

export default function ServicesSection() {
  const activeLocale = useLocale()
  const tLink = useTranslations('buttonLink')

  const sortedServices = [...servicesList].sort((a, b) => a.order - b.order)
  const groupedServices = []
  for (let i = 0; i < sortedServices.length; i += 4) {
    groupedServices.push(sortedServices.slice(i, i + 4))
  }

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const groupRef = useRef<HTMLDivElement | null>(null)
  const [hasAnimatedText, setHasAnimatedText] = useState(false)
  const [hasAnimatedGroup, setHasAnimatedGroup] = useState(false)

  const handleGroupChange = (index: number) => {
    if (sectionRef.current) {
      anime({
        targets: sectionRef.current,
        opacity: [0, 1],
        duration: 600,
        easing: 'easeInOutQuad',
      })
    }
    setCurrentGroupIndex(index)
  }

  useEffect(() => {
    if (sectionRef.current) {
      const serviceItems = sectionRef.current.querySelectorAll<HTMLElement>('.service-item')
      anime({
        targets: serviceItems,
        translateY: ['-20%', '0%'],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo',
      })
    }
  }, [currentGroupIndex])

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current && !hasAnimatedText) {
        const rect = textRef.current.getBoundingClientRect()
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          anime({
            targets: textRef.current,
            translateX: ['100%', '0%'],
            opacity: [0, 1],
            duration: 2000,
            easing: 'easeOutExpo',
          })
          setHasAnimatedText(true)
        }
      }
      if (groupRef.current && !hasAnimatedGroup) {
        const rect = groupRef.current.getBoundingClientRect()
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          anime({
            targets: groupRef.current,
            translateY: ['20%', '0%'],
            opacity: [0, 1],
            duration: 2000,
            easing: 'easeOutExpo',
          })
          setHasAnimatedGroup(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasAnimatedText, hasAnimatedGroup])

  const pageContent = {
    caption_th: 'บริการทั้งหมด',
    caption_en: 'All Services',
    description_th:
      'สัมผัสบริการเสริมความงามของเรา \n เพื่อดูแลคุณให้มั่นใจและเป็นตัวเองในเวอร์ชันที่ดีที่สุด',
    description_en:
      'Experience our beauty enhancement services \n to help you feel confident and be the best version of yourself',
  }

  return (
    <section className='py-16 bg-[#F9F6F3]' ref={sectionRef}>
      <div className='container'>
        <div className='text-center mb-8 opacity-0' ref={textRef}>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? pageContent.caption_th : pageContent.caption_en}
          </p>
          <h2 className='text-3xl font-light mx-auto text-[#483E3B] whitespace-pre-line'>
            {activeLocale === 'th' ? pageContent.description_th : pageContent.description_en}
          </h2>
        </div>

        <div className='space-y-6 opacity-0' ref={groupRef}>
          <div className='grid gap-6 grid-cols-4'>
            {groupedServices[currentGroupIndex].map((service, serviceIndex) => (
              <div
                key={service.id}
                className={`service-item ${serviceIndex % 2 === 0 ? 'pt-6' : ''}`}
              >
                <Link href={`/${activeLocale}/services/${service.id}`}>
                  <Image
                    src={`${process.env.STORAGE_PROVIDER_URL}${service.imgSrc}`}
                    alt={activeLocale === 'th' ? service.title_th : service.title_en}
                    width={1200}
                    height={1425}
                    className='rounded-2xl hover:shadow-md hover:shadow-[#CDB8A4] hover:ring-2 hover:ring-[#B8977F] cursor-pointer transition-all duration-300'
                  />
                </Link>
                <div className='p-2'>
                  <h3 className='text-2xl text-[#483E3B]'>
                    {activeLocale === 'th' ? service.title_th : service.title_en}
                  </h3>
                  <p className='text-[#9C6E5A] space-x-2'>
                    <span className='capitalize'>
                      {activeLocale === 'th' ? 'เริ่มต้นที่' : 'starting at'}
                    </span>
                    <span className='font-medium'>{service.price.toLocaleString('th-TH')}.-</span>
                  </p>
                  <p className='text-[#877A6B] line-clamp-2'>
                    {activeLocale === 'th' ? service.description_th : service.description_en}
                  </p>
                  <div className='flex justify-end py-2'>
                    <Link
                      href={`/${activeLocale}/services/${service.id}`}
                      className='flex gap-1 items-center text-[#9C6E5A] max-w-fit cursor-pointer transition-all duration-300 group hover:text-[#9C6E5A]/80'
                    >
                      <span className='capitalize'>{tLink('readMore')}</span>
                      <ChevronRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center mt-8 gap-2'>
          {groupedServices.map((_, index) => (
            <button
              key={index}
              onClick={() => handleGroupChange(index)}
              className={`w-4 h-4 rounded-full ${
                currentGroupIndex === index ? 'bg-[#9C6E5A]' : 'bg-[#CDB8A4]'
              } hover:bg-[#9C6E5A]/80 transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
