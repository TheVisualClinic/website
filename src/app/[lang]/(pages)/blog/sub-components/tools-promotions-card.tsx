'use client'

import Image from 'next/image'
import Link from 'next/link'
import { promotionsList } from '@/assets/mock-data/promotions'
import { useLocale, useTranslations } from 'next-intl'
import { socialLink } from '@/assets/mock-data/contacts'
import { ArrowUpRightIcon } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function ToolsPromotionsCard() {
  const activeLocale = useLocale()
  const tLink = useTranslations('buttonLink')

  return (
    <div className='p-4 bg-white rounded-xl space-y-4'>
      <div className='flex items-center gap-6'>
        <h3 className='text-xl min-w-fit'>{activeLocale === 'th' ? 'โปรโมชั่น' : 'Promotions'}</h3>
        <div className='h-[2px] w-full bg-[#B8977F]' />
      </div>

      <div className='space-y-4'>
        {promotionsList.map((promotion) => (
          <div key={promotion.id} className='grid grid-cols-12 gap-4 transition-all duration-300'>
            <div className='col-span-5'>
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={`${process.env.STORAGE_PROVIDER_URL}${promotion.image}`}
                    alt='Promotion Image'
                    width={1200}
                    height={1200}
                    className='w-full object-cover rounded-lg'
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{activeLocale === 'th' ? 'โปรโมชั่น' : 'Promotion'}</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>

                  <Image
                    src={`${process.env.STORAGE_PROVIDER_URL}${promotion.image}`}
                    alt='Promotion Image'
                    width={1200}
                    height={1200}
                    className='w-full object-cover rounded-lg'
                  />
                  <div>
                    <h3 className='text-xl font-semibold'>
                      {activeLocale === 'th' ? promotion.title_th : promotion.title_en}
                    </h3>
                    <p>
                      {activeLocale === 'th' ? promotion.description_th : promotion.description_en}
                    </p>
                    {promotion.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className='text-gray-500'>
                        - {activeLocale === 'th' ? benefit.th : benefit.en}
                      </div>
                    ))}
                    <div className='flex items-center justify-end mt-6'>
                      <Link
                        href={socialLink.line}
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
              {promotion.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className='text-xs truncate'>
                  - {activeLocale === 'th' ? benefit.th : benefit.en}
                </div>
              ))}
              <p className='text-[#9C6E5A] mt-1'>{promotion.price}</p>
              <div className='flex justify-end pt-1'>
                <Link
                  href={socialLink.line}
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
