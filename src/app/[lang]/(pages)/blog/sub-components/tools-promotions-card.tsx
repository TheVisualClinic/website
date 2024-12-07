'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { ArrowUpRightIcon } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '@/app/[lang]/hooks'

export default function ToolsPromotionsCard() {
  const activeLocale = useLocale()
  const tLink = useTranslations('buttonLink')
  const placeholderSrc = '/placeholder-image.jpg'
  const socialData = useAppSelector((state) => state.websiteData.socialData)

  const [lastPromotionList, setLastPromotionList] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/blogs/last-promotions`
      )
      setLastPromotionList(response.data)
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
    <div className='p-4 bg-white rounded-xl space-y-4'>
      <div className='flex items-center gap-6'>
        <h3 className='text-xl min-w-fit'>{activeLocale === 'th' ? 'โปรโมชัน' : 'Promotions'}</h3>
        <div className='h-[2px] w-full bg-[#B8977F]' />
      </div>

      <div className='space-y-4 overflow-y-auto max-h-[320px]'>
        {lastPromotionList?.map((promotion, index) => (
          <div key={index} className='grid grid-cols-12 gap-4 transition-all duration-300'>
            <div className='col-span-5'>
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={
                      promotion.item_image_url
                        ? `${process.env.IMAGE_URL}${promotion.item_image_url}`
                        : placeholderSrc
                    }
                    alt={promotion.text_th || 'Promotion Image'}
                    width={1200}
                    height={1200}
                    className='aspect-square object-cover rounded-lg'
                    placeholder='blur'
                    loading='lazy'
                    blurDataURL={placeholderSrc}
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{activeLocale === 'th' ? 'โปรโมชัน' : 'Promotion'}</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <Image
                    src={
                      promotion.item_image_url
                        ? `${process.env.IMAGE_URL}${promotion.item_image_url}`
                        : placeholderSrc
                    }
                    alt={promotion.text_th || 'Promotion Image'}
                    width={1200}
                    height={1200}
                    className='aspect-square object-cover rounded-lg'
                    placeholder='blur'
                    loading='lazy'
                    blurDataURL={placeholderSrc}
                  />
                  <div>
                    <h3 className='text-xl font-semibold'>
                      {activeLocale === 'th' ? promotion.title_th : promotion.title_en}
                    </h3>
                    <p>
                      {activeLocale === 'th' ? promotion.description_th : promotion.description_en}
                    </p>
                    {promotion?.benefits.map((benefit: any, index: number) => (
                      <div key={index} className='text-gray-500'>
                        - {activeLocale === 'th' ? benefit.text_th : benefit.text_en}
                      </div>
                    ))}
                    <div className='flex items-center justify-end mt-6'>
                      <Link
                        href={socialData.social_line_link}
                        target='_blank'
                        className='flex gap-1 items-center text-[#9C6E5A] max-w-fit cursor-pointer transition-all duration-300 group hover:text-[#9C6E5A]/80'
                      >
                        <span className='capitalize'>{tLink('requestInfo')}</span>
                        <ArrowUpRightIcon className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' />
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className='col-span-7'>
              <h4 className='text-sm font-semibold truncate'>
                {activeLocale === 'th' ? promotion.title_th : promotion.title_en}
              </h4>
              {promotion?.benefits?.map((benefit: any, index: number) => (
                <div key={index} className='text-xs truncate'>
                  - {activeLocale === 'th' ? benefit.text_th : benefit.text_en}
                </div>
              ))}
              {promotion.promotion_price !== 0 && (
                <p className='text-[#9C6E5A] mt-1'>{promotion.promotion_price}</p>
              )}

              <div className='flex justify-end pt-1'>
                <Link
                  href={socialData.social_line_link}
                  target='_blank'
                  className='flex gap-1 items-center text-xs text-[#9C6E5A] max-w-fit cursor-pointer transition-all duration-300 group hover:text-[#9C6E5A]/80'
                >
                  <span className='capitalize'>{tLink('requestInfo')}</span>
                  <ArrowUpRightIcon className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
