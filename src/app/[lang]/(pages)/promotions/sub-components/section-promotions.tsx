'use client'

import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useLocale, useTranslations } from 'next-intl'
import { useAppSelector } from '@/app/[lang]/hooks'
import { Button } from '@/components/ui/button'
import { CheckCheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PromotionsSection() {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()
  const tBtn = useTranslations('button')

  const [promotionsList, setPromotionList] = useState<any[]>([])
  const socialData = useAppSelector((state) => state.websiteData.socialData)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/promotions-list`
      )
      setPromotionList(response.data)
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

  return (
    <section className='bg-[#F9F6F3] py-12 md:py-16 text-[#483E3B]'>
      <div className='max-w-[1080px] mx-auto space-y-20 px-4 md:px-6'>
        {promotionsList?.map((promotion, index) => (
          <div key={index} className='grid grid-cols-12 gap-4 md:gap-6'>
            {index % 2 === 0 ? (
              <>
                <div className='col-span-12 lg:col-span-5'>
                  <Image
                    src={
                      promotion?.item_image_url
                        ? `${process.env.IMAGE_URL}${promotion?.item_image_url}`
                        : placeholderSrc
                    }
                    alt={
                      activeLocale === 'th' ? promotion?.title_th || '' : promotion.title_en || ''
                    }
                    width={1200}
                    height={1200}
                    className='aspect-square object-cover rounded-xl'
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
                      <h2 className='text-[#483E3B] text-2xl md:text-3xl mx-auto font-semibold'>
                        {activeLocale === 'th' ? promotion.title_th : promotion.title_en}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl font-bold'>{promotion.price}</div>
                    </div>
                    <p className='text-sm md:text-base'>
                      {activeLocale === 'th' ? promotion.description_th : promotion.description_en}
                    </p>
                    <div className='text-sm md:text-base'>
                      {promotion.benefits.map((benefit: any, index: number) => (
                        <div key={index} className='flex items-center gap-2'>
                          <CheckCheckIcon className='text-[#AA7F65] min-w-6 min-h-6' />
                          <span>
                            {activeLocale === 'th' ? benefit.text_th || '' : benefit.text_en || ''}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link href={socialData.social_line_link} target='_blank'>
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
                    src={
                      promotion?.item_image_url
                        ? `${process.env.IMAGE_URL}${promotion?.item_image_url}`
                        : placeholderSrc
                    }
                    alt={
                      activeLocale === 'th' ? promotion?.title_th || '' : promotion.title_en || ''
                    }
                    width={1200}
                    height={1200}
                    className='aspect-square object-cover rounded-xl'
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
                      <h2 className='text-[#483E3B] text-2xl md:text-3xl mx-auto font-semibold'>
                        {activeLocale === 'th' ? promotion.title_th : promotion.title_en}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl font-bold'>{promotion.price}</div>
                    </div>
                    <p className='text-sm md:text-base'>
                      {activeLocale === 'th' ? promotion.description_th : promotion.description_en}
                    </p>
                    <div className='text-sm md:text-base'>
                      {promotion.benefits.map((benefit: any, index: number) => (
                        <div key={index} className='flex items-center gap-2'>
                          <CheckCheckIcon className='text-[#AA7F65] min-w-6 min-h-6' />
                          <span>
                            {activeLocale === 'th' ? benefit.text_th || '' : benefit.text_en || ''}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link href={socialData.social_line_link} target='_blank'>
                        <Button className='w-full md:w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer capitalize'>
                          {tBtn('booking')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-span-5 hidden lg:block'>
                  <Image
                    src={
                      promotion?.item_image_url
                        ? `${process.env.IMAGE_URL}${promotion?.item_image_url}`
                        : placeholderSrc
                    }
                    alt={
                      activeLocale === 'th' ? promotion?.title_th || '' : promotion.title_en || ''
                    }
                    width={1200}
                    height={1200}
                    className='aspect-square object-cover rounded-xl'
                    placeholder='blur'
                    blurDataURL={placeholderSrc}
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
