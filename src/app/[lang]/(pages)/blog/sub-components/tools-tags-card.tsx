'use client'

import { useLocale } from 'next-intl'
import { tagsList } from '@/assets/mock-data/blogs'

export default function ToolsTagsCard() {
  const activeLocale = useLocale()

  return (
    <div className='p-4 bg-white rounded-xl space-y-4'>
      <div className='flex items-center gap-6'>
        <h3 className='text-xl min-w-fit'>{activeLocale === 'th' ? 'แท็ก' : 'Tags'}</h3>
        <div className='h-[2px] w-full bg-[#B8977F]' />
      </div>
      <div className='text-xs text-[#51463A] flex gap-2 flex-wrap'>
        {tagsList.map((tag) => (
          <div
            key={tag.id}
            className='border border-[#51463A] rounded-full w-fit py-1 px-2 transition-all duration-300 hover:bg-[#51463A]/10 cursor-pointer'
          >
            #{tag.name}
          </div>
        ))}
      </div>
    </div>
  )
}
