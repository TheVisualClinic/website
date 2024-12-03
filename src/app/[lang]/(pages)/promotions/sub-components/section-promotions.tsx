'use client'

import { Button } from '@/components/ui/button'
import { CheckCheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { promotionsList } from '@/assets/mock-data/promotions'
import { useLocale, useTranslations } from 'next-intl'
import { socialLink } from '@/assets/mock-data/contacts'

export default function PromotionsSection() {
  const activeLocale = useLocale()
  const tBtn = useTranslations('button')

  return (
    <section className='bg-[#F9F6F3] py-12 md:py-16 text-[#483E3B]'>
      <div className='max-w-[1080px] mx-auto space-y-20 px-4 md:px-6'>
        {promotionsList.map((promotion, index) => (
          <div key={index} className='grid grid-cols-12 gap-4 md:gap-6'>
            {index % 2 === 0 ? (
              <>
                <div className='col-span-12 lg:col-span-5'>
                  <Image
                    src={`${process.env.MAIN_SERVICES_URL}${promotion.image}`}
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
                      <h2 className='text-[#483E3B] text-2xl md:text-3xl mx-auto font-semibold'>
                        {activeLocale === 'th' ? promotion.title_th : promotion.title_en}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl font-bold'>{promotion.price}</div>
                    </div>
                    <p className='text-sm md:text-base'>
                      {activeLocale === 'th' ? promotion.description_th : promotion.description_en}
                    </p>
                    <div className='text-sm md:text-base'>
                      {promotion.benefits.map((benefit, i) => (
                        <div key={i} className='flex items-center gap-2'>
                          <CheckCheckIcon className='text-[#AA7F65] min-w-6 min-h-6' />
                          <span>{activeLocale === 'th' ? benefit.th : benefit.en}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link href={socialLink.line} target='_blank'>
                        <Button className='w-full md:w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer capitalize'>
                          {tBtn('booking')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='col-span-12 lg:hidden'>
                  <Image
                    src={`${process.env.MAIN_SERVICES_URL}${promotion.image}`}
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
                      <h2 className='text-[#483E3B] text-2xl md:text-3xl mx-auto font-semibold'>
                        {activeLocale === 'th' ? promotion.title_th : promotion.title_en}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl font-bold'>{promotion.price}</div>
                    </div>
                    <p className='text-sm md:text-base'>
                      {activeLocale === 'th' ? promotion.description_th : promotion.description_en}
                    </p>
                    <div className='text-sm md:text-base'>
                      {promotion.benefits.map((benefit, i) => (
                        <div key={i} className='flex items-center gap-2'>
                          <CheckCheckIcon className='text-[#AA7F65] min-w-6 min-h-6' />
                          <span>{activeLocale === 'th' ? benefit.th : benefit.en}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link href={socialLink.line} target='_blank'>
                        <Button className='w-full md:w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer capitalize'>
                          {tBtn('booking')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-span-5 hidden lg:block'>
                  <Image
                    src={`${process.env.MAIN_SERVICES_URL}${promotion.image}`}
                    alt='Promotion Cover'
                    width={1200}
                    height={1200}
                    className='w-full rounded-xl object-cover'
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
