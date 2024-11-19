'use client'

import Image from 'next/image'
import Link from 'next/link'
import anime from 'animejs'
import { Button } from '@/components/ui/button'
import { CheckCheckIcon } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { promotionsList } from '@/assets/mock-data/promotions'
import { socialLink } from '@/assets/mock-data/contacts'

export default function PromotionsBaseSection() {
  const activeLocale = useLocale()
  const tBtn = useTranslations('button')

  const [currentIndex, setCurrentIndex] = useState(0)
  const promoRef = useRef(null)

  useEffect(() => {
    if (promoRef.current) {
      anime({
        targets: promoRef.current,
        translateX: -currentIndex * 100 + '%',
        easing: 'easeInOutQuad',
        duration: 300,
      })
    }
  }, [currentIndex])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className='bg-[#F9F6F3] py-12 md:py-16 text-[#483E3B]'>
      <div className='w-[380px] md:w-[600px] lg:w-[900px] xl:w-[1080px] mx-auto px-4 md:px-6'>
        <div className='overflow-hidden'>
          <div ref={promoRef} className='flex transition-transform'>
            {promotionsList.map((promotion, index) => (
              <div key={index} className='min-w-full grid grid-cols-12 gap-4 md:gap-6'>
                <div className='col-span-12 lg:col-span-5'>
                  <Image
                    src={`${process.env.STORAGE_PROVIDER_URL}${promotion.image}`}
                    alt='Promotion Cover'
                    width={1200}
                    height={1200}
                    className='w-full rounded-xl object-cover'
                  />
                </div>

                <div className='col-span-12 lg:col-span-7'>
                  <div className='space-y-4'>
                    <p className='text-[#9C6E5A] text-sm font-medium capitalize'>
                      {activeLocale === 'th' ? 'โปรโมชัน' : 'Promotions'}
                    </p>
                    <div>
                      <h2 className='text-[#483E3B] text-xl md:text-2xl xl:text-3xl font-semibold'>
                        {activeLocale === 'th' ? promotion.title_th : promotion.title_en}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl font-bold'>{promotion.price}</div>
                    </div>
                    <p className='text-sm md:text-base'>
                      {activeLocale === 'th' ? promotion.description_th : promotion.description_en}
                    </p>
                    <div>
                      {promotion.benefits.map((benefit, i) => (
                        <div key={i} className='flex items-center gap-2 text-sm md:text-base'>
                          <CheckCheckIcon className='text-[#AA7F65] min-w-6 min-h-6' />
                          <span>{activeLocale === 'th' ? benefit.th : benefit.en}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link href={socialLink.line} target='_blank'>
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
          {promotionsList.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
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
