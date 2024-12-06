'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCheckIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import axios from 'axios'
import { useAppSelector } from '@/app/[lang]/hooks'
import { handleBookingPixelClick } from '@/lib/handleBookingPixelClick'

export default function PromotionsBaseSection() {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()
  const tBtn = useTranslations('button')

  const [promotionsList, setPromotionsList] = useState<any | null>(null)
  const socialData = useAppSelector((state) => state.websiteData.socialData)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/blogs/last-promotions`
      )
      setPromotionsList(response.data)
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

  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX === null) return

    const currentX = e.touches[0].clientX
    const deltaX = currentX - startX

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
      } else if (deltaX < 0 && currentIndex < promotionsList.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      }
      setStartX(null)
    }
  }

  const handleTouchEnd = () => {
    setStartX(null)
  }

  return (
    <section className='bg-[#F9F6F3] py-12 md:py-16 text-[#483E3B]'>
      <div className='w-[380px] md:w-[600px] lg:w-[900px] xl:w-[1080px] mx-auto px-4 md:px-6'>
        <div
          className='overflow-hidden relative'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className='flex transition-transform duration-300'
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {promotionsList?.map((promotion: any, index: number) => (
              <div key={index} className='min-w-full grid grid-cols-12 gap-4 md:gap-6'>
                <div className='col-span-12 lg:col-span-5'>
                  <Image
                    src={
                      promotion?.item_image_url
                        ? `${process.env.IMAGE_URL}${promotion?.item_image_url}`
                        : placeholderSrc
                    }
                    alt={
                      activeLocale === 'th' ? promotion?.title_th || '' : promotion?.title_en || ''
                    }
                    width={1200}
                    height={1200}
                    className='aspect-square rounded-xl object-cover'
                    placeholder='blur'
                    blurDataURL={placeholderSrc}
                  />
                </div>

                <div className='col-span-12 lg:col-span-7'>
                  <div className='space-y-4'>
                    <p className='text-[#9C6E5A] text-sm font-medium capitalize'>
                      {activeLocale === 'th' ? 'โปรโมชัน' : 'Promotions'}
                    </p>
                    <div>
                      <h2 className='text-[#483E3B] text-xl md:text-2xl xl:text-3xl font-semibold'>
                        {activeLocale === 'th'
                          ? promotion?.title_th || ''
                          : promotion?.title_en || ''}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl font-bold'>
                        {promotion?.promotion_price !== 0 &&
                          promotion?.promotion_price.toLocaleString()}
                      </div>
                      <p className='text-sm md:text-base'>
                        {activeLocale === 'th'
                          ? promotion?.description_th || ''
                          : promotion?.description_en || ''}
                      </p>
                    </div>
                    <div>
                      {promotion.benefits.map((benefit: any, index: number) => (
                        <div key={index} className='flex items-center gap-2 text-sm md:text-base'>
                          <CheckCheckIcon className='text-[#AA7F65] min-w-6 min-h-6' />
                          <span>
                            {activeLocale === 'th' ? benefit.text_th || '' : benefit.text_en || ''}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link
                        href={socialData.social_line_link}
                        target='_blank'
                        onClick={() => {
                          handleBookingPixelClick(
                            promotion?.title_th
                              ? `Promotion: ${promotion?.title_th}`
                              : 'unknown promotion'
                          )
                        }}
                      >
                        <Button className='w-full md:w-[120px] mt-6 md:mt-4 bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer capitalize'>
                          {tBtn('booking')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center gap-2 mt-12'>
          {promotionsList?.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? 'bg-[#483E3B]' : 'bg-white border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
