'use client'

import Image from 'next/image'
import { StarRatingIcon } from '@/components/base/star-rating-icon'
import { useLocale } from 'next-intl'

export default function TopReviewsSection({ pageData }: any) {
  const activeLocale = useLocale()
  const placeholderSrc = '/placeholder-image.jpg'

  return (
    <section className='bg-[#F9F6F3] py-12 md:py-16 top-review-section'>
      <div className='grid grid-cols-12 gap-4 md:gap-6 max-w-[1080px] mx-auto px-4 md:px-6 xl:px-0'>
        <div className='col-span-12 lg:col-span-5'>
          <Image
            src={
              pageData?.top_review_image_url
                ? `${process.env.IMAGE_URL}${pageData?.top_review_image_url}`
                : placeholderSrc
            }
            alt='Contact Image Cover'
            width={1200}
            height={1200}
            className='aspect-square object-cover rounded-xl'
            placeholder='blur'
            blurDataURL={placeholderSrc}
          />
        </div>
        <div className='col-span-12 lg:col-span-7'>
          <div className='bg-white p-6 rounded-2xl space-y-4'>
            <p className='text-sm text-[#483E3B]'>
              {activeLocale === 'th'
                ? pageData?.top_review_message_th
                : pageData?.top_review_message_en}
            </p>
            <div className='flex items-center justify-end gap-2'>
              {Array.from({ length: 5 }, (_, index) => (
                <StarRatingIcon
                  key={index}
                  variant={index < pageData?.top_review_rating ? 'filled' : 'outline'}
                />
              ))}
            </div>
          </div>
          <div className='flex items-center justify-center lg:justify-start py-4 gap-4 text-sm text-center'>
            {activeLocale === 'th'
              ? pageData?.top_review_caption_th?.split(',').map((tag: string, index: number) => (
                  <div
                    key={index}
                    className='text-white bg-[#51463A] rounded-full py-2 px-4 text-xs'
                  >
                    {tag}
                  </div>
                ))
              : pageData?.top_review_caption_en.split(',').map((tag: string, index: number) => (
                  <div
                    key={index}
                    className='text-white bg-[#51463A] rounded-full py-2 px-4 text-xs'
                  >
                    {tag}
                  </div>
                ))}
          </div>
          <div className='text-center lg:text-left'>
            <p className='text-[#483E3B] font-medium text-2xl'>
              {activeLocale === 'th'
                ? pageData?.top_review_nick_name_th
                : pageData?.top_review_nick_name_en}
            </p>
            <p className='text-[#877A6B]'>
              {activeLocale === 'th'
                ? pageData?.top_review_shot_message_th
                : pageData?.top_review_shot_message_en}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
