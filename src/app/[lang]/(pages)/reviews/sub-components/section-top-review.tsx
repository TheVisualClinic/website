'use client'

import Image from 'next/image'
import { StarRatingIcon } from '@/components/base/star-rating-icon'
import { useLocale } from 'next-intl'
import { topReview } from '@/assets/mock-data/reviews'

export default function TopReviewsSection() {
  const activeLocale = useLocale()

  return (
    <section className='bg-[#F9F6F3] py-12 md:py-16 top-review-section'>
      <div className='grid grid-cols-12 gap-4 md:gap-6 max-w-[1080px] mx-auto px-4 md:px-6 xl:px-0'>
        <div className='col-span-12 lg:col-span-5'>
          <Image
            src={`${process.env.STORAGE_PROVIDER_URL}${topReview.image}`}
            alt='Top Review'
            width={1200}
            height={1200}
            className='w-full object-cover rounded-xl'
          />
        </div>
        <div className='col-span-12 lg:col-span-7'>
          <div className='bg-white p-6 rounded-2xl space-y-4'>
            <p className='text-sm text-[#483E3B]'>
              {activeLocale === 'th' ? topReview.review_content_th : topReview.review_content_en}
            </p>
            <div className='flex items-center justify-end gap-2'>
              {Array.from({ length: 5 }, (_, index) => (
                <StarRatingIcon
                  key={index}
                  variant={index < topReview.rating ? 'filled' : 'outline'}
                />
              ))}
            </div>
          </div>
          <div className='flex items-center justify-center lg:justify-start py-4 gap-4 text-sm text-center'>
            {topReview.tags.map((tag, index) => (
              <div key={index} className='text-white bg-[#51463A] rounded-full py-2 px-4 text-xs'>
                {activeLocale === 'th' ? tag.th : tag.en}
              </div>
            ))}
          </div>
          <div className='text-center lg:text-left'>
            <p className='text-[#483E3B] font-medium text-2xl'>
              {activeLocale === 'th' ? topReview.customer_name_th : topReview.customer_name_en}
            </p>
            <p className='text-[#877A6B]'>
              {activeLocale === 'th' ? topReview.caption_th : topReview.caption_en}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
