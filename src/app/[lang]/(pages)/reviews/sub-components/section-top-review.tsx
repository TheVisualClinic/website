'use client'

import { useEffect } from 'react'
import { StarRatingIcon } from '@/components/base/star-rating-icon'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import anime from 'animejs'
import { topReview } from '@/assets/mock-data/reviews'

export default function TopReviewsSection() {
  const activeLocale = useLocale()

  useEffect(() => {
    anime({
      targets: '.top-review-section .col-span-4, .top-review-section .col-span-8',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutQuad',
      delay: anime.stagger(200),
    })
  }, [])

  return (
    <section className='bg-[#F9F6F3] py-16 top-review-section'>
      <div className='grid grid-cols-12 gap-6 max-w-[1080px] mx-auto'>
        <div className='col-span-4'>
          <Image
            src={`${process.env.STORAGE_PROVIDER_URL}${topReview.image}`}
            alt='Top Review'
            width={1200}
            height={1200}
            className='w-full object-cover rounded-xl'
          />
        </div>
        <div className='col-span-8 px-4'>
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
          <div className='flex items-center py-4 gap-4'>
            {topReview.tags.map((tag, index) => (
              <div key={index} className='text-white bg-[#51463A] rounded-full py-2 px-4 text-xs'>
                {activeLocale === 'th' ? tag.th : tag.en}
              </div>
            ))}
          </div>
          <div>
            <p className='text-[#483E3B] font-medium text-lg'>
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
