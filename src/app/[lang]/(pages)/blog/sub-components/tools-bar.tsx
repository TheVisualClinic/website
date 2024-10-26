'use client'

import { img1200x1200 } from '@/assets/images'
import { ArrowUpRightIcon } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { tagsMockData } from '../mock-date/tags'
import { promotionsMockData } from '../mock-date/promotions'
import { servicesMockData } from '../mock-date/services'

type ToolsBarProps = {
  onFilterChange?: (serviceId: string | null) => void
}

export default function ToolsBar({ onFilterChange }: ToolsBarProps) {
  const activeLocale = useLocale()
  const [servicesFilter, setServicesFilter] = useState<string | null>(null)

  const handleServiceClick = (serviceId: string) => {
    setServicesFilter(serviceId)
  }

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(servicesFilter)
    }
  }, [servicesFilter, onFilterChange])

  return (
    <div className='space-y-6 text-[#483E3B]'>
      <div className='p-4 bg-white rounded-xl space-y-4'>
        <div className='flex items-center gap-6'>
          <h3 className='text-xl min-w-fit'>โปรโมชั่น</h3>
          <div className='h-[2px] w-full bg-[#B8977F]' />
        </div>

        <div className='space-y-4'>
          {promotionsMockData.map((promotion) => (
            <div key={promotion.id} className='grid grid-cols-12 gap-4 transition-all duration-300'>
              <div className='col-span-5'>
                <Image
                  src={img1200x1200}
                  alt='Promotion'
                  className='w-full object-cover rounded-lg'
                />
              </div>
              <div className='col-span-7'>
                <h4 className='text-sm font-semibold truncate'>{promotion.name}</h4>
                <p className='line-clamp-2 text-xs'>{promotion.description}</p>
                <p className='text-[#9C6E5A] mt-1'>{promotion.price}</p>
                <div className='flex justify-end pt-1'>
                  <Link
                    href={promotion.link}
                    target='_blank'
                    className='flex gap-1 items-center text-xs text-[#9C6E5A] max-w-fit cursor-pointer transition-all duration-300 group hover:text-[#9C6E5A]/80'
                  >
                    <span>สอบถามข้อมูล</span>
                    <ArrowUpRightIcon className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='p-4 bg-white rounded-xl space-y-4'>
        <div className='flex items-center gap-6'>
          <h3 className='text-xl min-w-fit'>บริการอื่นๆ</h3>
          <div className='h-[2px] w-full bg-[#B8977F]' />
        </div>
        <div className='space-y-2 text-sm max-h-[250px] overflow-auto'>
          {servicesMockData.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className='py-1 px-2 rounded text-gray-500 transition-all duration-300 hover:bg-gray-100 cursor-pointer hover:text-gray-800'
            >
              {service.name}
            </div>
          ))}
        </div>
      </div>

      <div className='p-4 bg-white rounded-xl space-y-4'>
        <div className='flex items-center gap-6'>
          <h3 className='text-xl min-w-fit'>แท็กที่น่าสนใจ</h3>
          <div className='h-[2px] w-full bg-[#B8977F]' />
        </div>
        <div className='text-xs text-[#51463A] flex gap-2 flex-wrap'>
          {tagsMockData.map((tag) => (
            <div
              key={tag.id}
              className='border border-[#51463A] rounded-full w-fit py-1 px-2 transition-all duration-300 hover:bg-[#51463A]/10 cursor-pointer'
            >
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
