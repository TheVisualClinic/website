'use client'

import { useLocale } from 'next-intl'
import { servicesList } from '@/assets/mock-data/services'

export default function ToolsServicesCard() {
  const activeLocale = useLocale()

  return (
    <div className='p-4 bg-white rounded-xl space-y-4'>
      <div className='flex items-center gap-6'>
        <h3 className='text-xl min-w-fit'>
          {activeLocale == 'th' ? 'เกี่ยวกับบริการ' : 'About Our Services'}
        </h3>
        <div className='h-[2px] w-full bg-[#B8977F]' />
      </div>
      <div className='space-y-2 text-sm max-h-[250px] overflow-auto'>
        {servicesList.map((service) => (
          <div
            key={service.id}
            className='py-1 px-2 rounded text-gray-500 transition-all duration-300 hover:bg-gray-100 cursor-pointer hover:text-gray-800'
          >
            {activeLocale === 'th' ? service.title_th : service.title_en}
          </div>
        ))}
      </div>
    </div>
  )
}
