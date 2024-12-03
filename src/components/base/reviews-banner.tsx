'use client'

import Link from 'next/link'
import anime from 'animejs'
import { useEffect, useRef, useState } from 'react'
import { StarRatingIcon } from '@/components/base/star-rating-icon'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import axios from 'axios'

export default function ReviewsBanner({ action }: { action: boolean }) {
  const activeLocale = useLocale()
  const tBtn = useTranslations('button')

  const [pageData, setPageData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/reviews-banner`
      )
      setPageData(response.data)
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

  useEffect(() => {
    const cards = document.querySelectorAll('.review-card')
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        anime({
          targets: card.querySelectorAll('.star-rating-icon'),
          rotate: '1turn',
          delay: anime.stagger(100, { from: 'first' }),
          duration: 800,
          easing: 'easeInOutSine',
        })
      })
    })
  }, [])

  const sectionContent = {
    title_th: pageData?.sub_review_caption_th || 'รีวิวจากลูกค้าที่น่ารักของเรา',
    title_en: pageData?.sub_review_caption_en || 'Reviews from Our Lovely Customers',
  }

  return (
    <section className='bg-[#E7DDD3]'>
      <div className='container px-4 md:px-6 py-12 md:py-16 space-y-6 text-center'>
        <p className='text-[#9C6E5A] font-semibold'>
          {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-[1080px] mx-auto'>
          <div className='review-card bg-white/40 p-6 rounded-xl space-y-4'>
            <div className='flex items-center justify-center gap-2'>
              {Array.from({ length: 5 }, (_, index) => (
                <StarRatingIcon
                  key={index}
                  className='star-rating-icon'
                  variant={index < pageData?.sub_review_1_rating ? 'filled' : 'outline'}
                />
              ))}
            </div>
            <p className='text-sm'>
              {activeLocale === 'th'
                ? pageData?.sub_review_1_message_th
                : pageData?.sub_review_1_message_en}
            </p>
            <p className='font-medium text-[#877A6B]'>
              {activeLocale === 'th'
                ? pageData?.sub_review_1_nick_name_th
                : pageData?.sub_review_1_nick_name_en}
            </p>
          </div>

          <div className='review-card bg-white/40 p-6 rounded-xl space-y-4'>
            <div className='flex items-center justify-center gap-2'>
              {Array.from({ length: 5 }, (_, index) => (
                <StarRatingIcon
                  key={index}
                  className='star-rating-icon'
                  variant={index < pageData?.sub_review_2_rating ? 'filled' : 'outline'}
                />
              ))}
            </div>
            <p className='text-sm'>
              {activeLocale === 'th'
                ? pageData?.sub_review_2_message_th
                : pageData?.sub_review_2_message_en}
            </p>
            <p className='font-medium text-[#877A6B]'>
              {activeLocale === 'th'
                ? pageData?.sub_review_2_nick_name_th
                : pageData?.sub_review_2_nick_name_en}
            </p>
          </div>

          <div className='review-card bg-white/40 p-6 rounded-xl space-y-4'>
            <div className='flex items-center justify-center gap-2'>
              {Array.from({ length: 5 }, (_, index) => (
                <StarRatingIcon
                  key={index}
                  className='star-rating-icon'
                  variant={index < pageData?.sub_review_3_rating ? 'filled' : 'outline'}
                />
              ))}
            </div>
            <p className='text-sm'>
              {activeLocale === 'th'
                ? pageData?.sub_review_3_message_th
                : pageData?.sub_review_3_message_en}
            </p>
            <p className='font-medium text-[#877A6B]'>
              {activeLocale === 'th'
                ? pageData?.sub_review_3_nick_name_th
                : pageData?.sub_review_3_nick_name_en}
            </p>
          </div>
        </div>

        {action && (
          <div className='flex justify-center'>
            <Link href={`/${activeLocale}/reviews`}>
              <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer capitalize'>
                {tBtn('viewReviews')}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
