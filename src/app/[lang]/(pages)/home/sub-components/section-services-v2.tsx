'use client'

import Link from 'next/link'
import Image from 'next/image'
import anime from 'animejs'
import { ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import axios from 'axios'

export default function ServicesSectionV2({ pageData }: any) {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()
  const tLink = useTranslations('buttonLink')

  const [servicesList, setServiceList] = useState<any[]>([])
  const [groupedServices, setGroupedServices] = useState<any[][]>([])
  const [numberOfGroup, setNumberOfGroup] = useState(4)
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)
  const [startX, setStartX] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const groupRef = useRef<HTMLDivElement | null>(null)
  const [hasAnimatedText, setHasAnimatedText] = useState(false)
  const [hasAnimatedGroup, setHasAnimatedGroup] = useState(false)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/service-list`
      )
      setServiceList(response.data)
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumberOfGroup(2)
      } else if (window.innerWidth < 1024) {
        setNumberOfGroup(3)
      } else {
        setNumberOfGroup(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // อัพเดต groupedServices ตาม servicesList และ numberOfGroup
  useEffect(() => {
    const sortedServices = [...servicesList]
    const groups = []
    for (let i = 0; i < sortedServices.length; i += numberOfGroup) {
      groups.push(sortedServices.slice(i, i + numberOfGroup))
    }
    setGroupedServices(groups)
  }, [servicesList, numberOfGroup])

  // Anime ทำงานหลัง groupedServices อัพเดต
  useEffect(() => {
    if (groupedServices.length > 0) {
      anime({
        targets: sectionRef.current,
        opacity: [0, 1],
        duration: 600,
        easing: 'easeInOutQuad',
      })
    }
  }, [groupedServices])

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

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setStartX(e.touches[0].clientX)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (startX === null) return
      const currentX = e.touches[0].clientX
      const diffX = currentX - startX

      if (Math.abs(diffX) > 50) {
        if (diffX > 0 && currentGroupIndex > 0) {
          setCurrentGroupIndex(currentGroupIndex - 1)
        } else if (diffX < 0 && currentGroupIndex < groupedServices.length - 1) {
          setCurrentGroupIndex(currentGroupIndex + 1)
        }
        setStartX(null)
      }
    }

    const handleTouchEnd = () => {
      setStartX(null)
    }

    const sectionElement = sectionRef.current
    if (sectionElement) {
      sectionElement.addEventListener('touchstart', handleTouchStart)
      sectionElement.addEventListener('touchmove', handleTouchMove)
      sectionElement.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('touchstart', handleTouchStart)
        sectionElement.removeEventListener('touchmove', handleTouchMove)
        sectionElement.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [currentGroupIndex, groupedServices.length, startX])

  const pageContent = {
    caption_th: pageData?.section_services_caption_th || 'บริการทั้งหมด',
    caption_en: pageData?.section_services_caption_en || 'All Services',
    description_th:
      pageData?.section_services_title_th ||
      'สัมผัสบริการเสริมความงามของเรา \n เพื่อดูแลคุณให้มั่นใจและเป็นตัวเองในเวอร์ชันที่ดีที่สุด',
    description_en:
      pageData?.section_services_title_en ||
      'Experience our beauty enhancement services \n to help you feel confident and be the best version of yourself',
  }

  return (
    <section className='py-16 bg-[#F9F6F3]' ref={sectionRef}>
      <div className='container px-4 md:px-6'>
        <div className='text-center mb-8 opacity-0' ref={textRef}>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? pageContent.caption_th : pageContent.caption_en}
          </p>
          <h2 className='text-xl md:text-3 font-light mx-auto text-[#483E3B] whitespace-pre-line'>
            {activeLocale === 'th' ? pageContent.description_th : pageContent.description_en}
          </h2>
        </div>

        <div className='space-y-6 opacity-0' ref={groupRef}>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
            {groupedServices[currentGroupIndex]?.map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className={`service-item ${serviceIndex % 2 === 0 ? 'pt-6' : ''}`}
              >
                <Link
                  href={`/${activeLocale}/services/${
                    activeLocale === 'th' ? service.slug_th || '' : service.slug_en || ''
                  }`}
                >
                  <Image
                    src={
                      service?.cover_image_url
                        ? `${process.env.IMAGE_URL}${service?.cover_image_url}`
                        : placeholderSrc
                    }
                    alt={
                      activeLocale === 'th'
                        ? service?.service_name_th || ''
                        : service?.service_name_en || ''
                    }
                    width={1200}
                    height={1200}
                    className='rounded-2xl hover:shadow-md hover:shadow-[#CDB8A4] hover:ring-2 hover:ring-[#B8977F] cursor-pointer transition-all duration-300'
                    placeholder='blur'
                    loading='lazy'
                    blurDataURL={placeholderSrc}
                  />
                </Link>
                <div className='p-2'>
                  <h3 className='text-lg lg:text-xl xl:text-2xl font-medium text-[#483E3B] capitalize truncate'>
                    {activeLocale === 'th'
                      ? service.service_name_th || ''
                      : service.service_name_en || ''}
                  </h3>
                  <p className='text-[#9C6E5A] space-x-2'>
                    <span className='capitalize'>
                      {activeLocale === 'th' ? 'เริ่มต้นที่' : 'starting at'}
                    </span>
                    <span className='font-medium'>
                      {service.service_price.toLocaleString('th-TH')}.-
                    </span>
                  </p>
                  <p className='text-[#877A6B] line-clamp-2 text-sm lg:text-base'>
                    {activeLocale === 'th'
                      ? service.cover_description_th || ''
                      : service.cover_description_en || ''}
                  </p>
                  <div className='flex justify-end py-2'>
                    <Link
                      href={`/${activeLocale}/services/${
                        activeLocale === 'th' ? service.slug_th || '' : service.slug_en || ''
                      }`}
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
              onClick={() => setCurrentGroupIndex(index)}
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
