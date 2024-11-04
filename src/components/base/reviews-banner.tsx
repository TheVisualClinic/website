'use client'

import { useEffect } from 'react'
import { StarRatingIcon } from '@/components/base/star-rating-icon'
import { useLocale, useTranslations } from 'next-intl'
import anime from 'animejs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { reviewsList } from '@/assets/mock-data/reviews'

export default function ReviewsBanner({ action }: { action: boolean }) {
  const activeLocale = useLocale()
  const tBtn = useTranslations('button')

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
    title_th: 'รีวิวจากลูกค้าที่น่ารักของเรา',
    title_en: 'Reviews from Our Lovely Customers',
  }

  return (
    <section className='bg-[#E7DDD3]'>
      <div className='container py-16 space-y-6 text-center'>
        <p className='text-[#9C6E5A] font-semibold'>
          {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
        </p>

        <div className='grid grid-cols-3 gap-6 max-w-[1080px] mx-auto'>
          {reviewsList.map((review) => (
            <div key={review.id} className='review-card bg-white/40 p-6 rounded-xl space-y-4'>
              <div className='flex items-center justify-center gap-2'>
                {Array.from({ length: 5 }, (_, index) => (
                  <StarRatingIcon
                    key={index}
                    className='star-rating-icon'
                    variant={index < review.rating ? 'filled' : 'outline'}
                  />
                ))}
              </div>
              <p className='text-sm'>
                {activeLocale === 'th' ? review.content_th : review.content_en}
              </p>
              <p className='font-medium text-[#877A6B]'>
                {activeLocale === 'th' ? review.author_th : review.author_en}
              </p>
            </div>
          ))}
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
