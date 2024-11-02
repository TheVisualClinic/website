'use client'

import { Button } from '@/components/ui/button'
import { CheckCheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import anime from 'animejs'
import { useLocale, useTranslations } from 'next-intl'
import { promotionsList } from '@/assets/mock-data/promotions'

export default function PromotionsSection() {
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
    <section className='bg-[#F9F6F3] py-16 text-[#483E3B]'>
      <div className='max-w-[1080px] mx-auto'>
        <div className='overflow-hidden'>
          <div ref={promoRef} className='flex transition-transform'>
            {promotionsList.map((promotion, index) => (
              <div key={index} className='min-w-full grid grid-cols-12 gap-6'>
                <div className='col-span-4'>
                  <Image
                    src={`${process.env.STORAGE_PROVIDER_URL}${promotion.image}`}
                    alt='Promotion Cover'
                    width={1200}
                    height={1200}
                    className='w-full rounded-xl object-cover'
                  />
                </div>
                <div className='col-span-8 px-6'>
                  <div className='space-y-4'>
                    <p className='text-[#9C6E5A] text-sm font-medium capitalize'>
                      {activeLocale === 'th' ? 'โปรโมชั่น' : 'Promotions'}
                    </p>
                    <div>
                      <h2 className='text-[#483E3B] text-3xl mx-auto font-semibold'>
                        {activeLocale === 'th' ? promotion.title_th : promotion.title_en}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl font-bold'>{promotion.price}</div>
                    </div>
                    <p>
                      {activeLocale === 'th' ? promotion.description_th : promotion.description_en}
                    </p>
                    <div>
                      {promotion.benefits.map((benefit, i) => (
                        <div key={i} className='flex items-center gap-2'>
                          <CheckCheckIcon className='text-[#AA7F65]' />
                          <span>{activeLocale === 'th' ? benefit.th : benefit.en}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link href={'https://lin.ee/CyHa9b3'} target='_blank'>
                        <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer capitalize'>
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
