'use client'

import Link from 'next/link'
import Image from 'next/image'
import anime from 'animejs'
import { ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import axios from 'axios'

export default function LastArticleBanner({ slug = '' }) {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()
  const tLink = useTranslations('buttonLink')

  const [lastArticleList, setLastArticleList] = useState<any[]>([])

  const fetchData = async (slug: string) => {
    try {
      const { data: response } = await axios.post(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/blogs/last-article`,
        {
          notSlug: slug,
          limit: 8,
        }
      )
      setLastArticleList(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const hasFetched = useRef(false)
  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true
      const decodedSlug = decodeURIComponent(slug)
      fetchData(decodedSlug)
    }
  }, [slug])

  const sortedServices = [...lastArticleList]
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
  const [startX, setStartX] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX === null) return

    const currentX = e.touches[0].clientX
    const deltaX = currentX - startX

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0 && currentGroupIndex > 0) {
        setCurrentGroupIndex((prev) => prev - 1)
      } else if (deltaX < 0 && currentGroupIndex < groupedServices.length - 1) {
        setCurrentGroupIndex((prev) => prev + 1)
      }
      setStartX(null)
    }
  }

  const handleTouchEnd = () => {
    setStartX(null)
  }

  const handleGroupChange = (index: number) => {
    anime({
      targets: groupRef.current,
      opacity: [0, 1],
      duration: 600,
      easing: 'easeInOutQuad',
    })
    setCurrentGroupIndex(index)
  }

  useEffect(() => {
    if (groupRef.current) {
      const serviceItems = groupRef.current.querySelectorAll<HTMLElement>('.service-item')
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
    caption_th: 'บทความล่าสุด',
    caption_en: 'Latest Articles',
  }

  return (
    <section
      className='py-12 md:py-16 bg-[#F9F6F3]'
      ref={sectionRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className='container px-4 md:px-6'>
        <div className='text-center mb-8 opacity-0' ref={textRef}>
          <h2 className='text-2xl md:text-3xl max-w-xl mx-auto text-[#483E3B] font-semibold capitalize'>
            {activeLocale === 'th' ? pageContent.caption_th : pageContent.caption_en}
          </h2>
        </div>

        <div className='space-y-4 md:space-y-6 opacity-0' ref={groupRef}>
          <div className='grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4'>
            {groupedServices[currentGroupIndex]?.map((blog) => (
              <div key={blog.id} className={`service-item`}>
                <Link
                  href={`/${activeLocale}/blog/${
                    activeLocale === 'th' ? blog.slug_th : blog.slug_en
                  }`}
                >
                  <Image
                    src={
                      blog?.cover_image_url
                        ? `${process.env.IMAGE_URL}${blog?.cover_image_url}`
                        : placeholderSrc
                    }
                    alt={activeLocale === 'th' ? blog.title_th || '' : blog.title_en || ''}
                    width={1200}
                    height={1200}
                    className='rounded-2xl hover:shadow-md hover:shadow-[#CDB8A4] hover:ring-2 hover:ring-[#B8977F] cursor-pointer transition-all duration-300'
                    placeholder='blur'
                    blurDataURL={placeholderSrc}
                  />
                </Link>
                <div className='p-2'>
                  <h3 className='text-lg md:text-2xl font-medium text-[#483E3B] truncate'>
                    {activeLocale === 'th' ? blog.title_th : blog.title_en}
                  </h3>
                  <p className='text-[#877A6B] line-clamp-2 text-sm md:text-base'>
                    {activeLocale === 'th' ? blog.description_th : blog.description_en}
                  </p>
                  <div className='flex justify-end py-2 text-sm md:text-base'>
                    <Link
                      href={`/${activeLocale}/blog/${
                        activeLocale === 'th' ? blog.slug_th : blog.slug_en
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
