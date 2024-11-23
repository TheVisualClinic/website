'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { ourPrideList } from '@/assets/mock-data/our-pride-list'

export default function OurPrideSection() {
  const activeLocale = useLocale()

  const sectionContent = {
    caption_th: 'รอคุณหมอคิดมาให้',
    caption_en: 'Our Pride',
    title_th:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque atque reiciendis voluptatum illum aliquam provident maxime? Ea fuga accusantium mollitia, quibusdam esse corrupti hic quam, tempore quos architecto aspernatur eum!',
    title_en:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque atque reiciendis voluptatum illum aliquam provident maxime? Ea fuga accusantium mollitia, quibusdam esse corrupti hic quam, tempore quos architecto aspernatur eum!',
  }

  return (
    <section className='py-12 md:py-16 bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6'>
        {/* Section Header */}
        <div className='text-center mb-8 space-y-2'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h3 className='text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mx-auto md:whitespace-pre-line'>
            {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
          </h3>
        </div>

        {/* Images Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
          {ourPrideList.map((item) => (
            <div key={item.id} className='flex justify-center'>
              <Image
                src={item.image_url}
                alt={activeLocale === 'th' ? item.our_pride_name_th : item.our_pride_name_en}
                width={400}
                height={400}
                className='object-cover rounded-lg shadow-md'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
